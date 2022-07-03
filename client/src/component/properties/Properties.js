import React, { useEffect, useState } from 'react'
import {
    PropContainer,
    PropWrapper,
    Row,
    Heading,
    Description
} from './Properties.styled'
import CardComponent from '../global/card/CardComponent'
import axios from 'axios'
const Properties = () => {
    const [AllProperties, setAllProperties] = useState([]);

    const getImagesBySplit = (str) => {
        var tempArray = str.split(",");
        for (let index = 0; index < tempArray.length; index++) {
            tempArray[index] = "http://localhost:3006/images/" + tempArray[index];            
        }
        console.log(tempArray);
        return tempArray;
    }

    const GetLastProperties = () => {
        axios
            .get("http://localhost:3006/api/getLastProperties")
            .then(result => {
                const { data } = result.data;
                setAllProperties(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(AllProperties);
    useEffect(() => {
        GetLastProperties();
    }, [])

    return (
        <PropWrapper>
            <PropContainer>
                <Row container >
                    <Row item xs={12} center>
                        <Heading>Résidences populaires</Heading>
                    </Row>
                    <Row item xs={12} center>
                        <Description>
                            Le groupe 3aqaar s'engage à aider ses clients à atteindre leurs objectifs
                        </Description>
                    </Row>
                </Row>
                <Row container spacing={4}>
                    {
                        AllProperties.map(element => {
                            return (
                                <Row item xs={12} md={4} center key={element._id_property}>
                                    <CardComponent
                                        images={getImagesBySplit(element.img_url)}
                                        data="0"
                                        title={element.title}
                                        adresse={element.adresse}
                                        chambre={element.nombre_chambre}
                                        feet={element.feet}
                                        prix={element.price}
                                        vues={element.vues === null ? "0" : element.vues}
                                        typeBien={element.typebien}
                                        id={element._id_property}
                                    />
                                </Row>
                            )
                        })
                    }
                </Row>
            </PropContainer>
        </PropWrapper>
    )
}

export default Properties
