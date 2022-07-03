import React, { useEffect, useState } from 'react'
import { Formik, Form } from "formik";
import {
    Wrapper,
    Row,
    SearchTitle,
    SearchResult,
    SortWrapper,
    SelectInput
} from './CardWrapper.styled'
import CardComponent from '../../global/card/CardComponent'
import axios from 'axios';
const CardWrapper = () => {
    //to store all properties after fetching ...
    const [AllProperties, setAllProperties] = useState([]);
    const initialValues = {
        trie: '',
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    //get all images byt split
    const getImagesBySplit = (str) => {
        var tempArray = str.split(",");
        for (let index = 0; index < tempArray.length; index++) {
            tempArray[index] = "http://localhost:3006/images/" + tempArray[index];            
        }
        return tempArray;
    }
    //get all properties ...
    const getAllProperties = () => {
        axios
            .get("http://localhost:3006/api/property")
            .then(result => {
                const { properties } = result.data;
                setAllProperties(properties);
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(AllProperties);
    // fetching the properties when the page load
    useEffect(() => {
        getAllProperties();
    }, [])

    const SortItem = [
        { key: 'Prix (de haut en bas)', value: "prixhaut" },
        { key: 'Prix (de bas en haut)', value: "prixbas" },
        { key: 'Le plus récent', value: "recent" },
        { key: 'Salles de bain ', value: "salledebain" },
        { key: 'Chambres', value: "chambre" },
        { key: 'Mètre carré', value: "metrecarre" },
    ]
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <Wrapper>
                <Row container spacing={1} paddingTop>
                    <Row item xs={12} column alignStart>
                        <SearchTitle>
                            Annaba City NY Immobilier & Maisons à Vendre
                        </SearchTitle>
                        <div className="formWrapper">
                            <SearchResult>{AllProperties.length} Résultats</SearchResult>
                            <SortWrapper>
                                <p>Trier par :</p>
                                <Form>
                                    <SelectInput
                                        name="trie"
                                        options={SortItem}
                                    />
                                </Form>
                            </SortWrapper>
                        </div>
                    </Row>
                    {
                        AllProperties.map(element => {
                            return (
                                <Row item xs={12} md={6} key={element._id_property}>
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
            </Wrapper>
        </Formik>
    )
}

export default CardWrapper
