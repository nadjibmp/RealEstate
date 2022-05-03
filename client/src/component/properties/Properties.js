import React from 'react'
import {
    PropContainer,
    PropWrapper,
    Row,
    Heading,
    Description
} from './Properties.styled'
import CardComponent from '../global/card/CardComponent'
const Properties = () => {
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
                    <Row item xs={12} md={4} center>
                        <CardComponent/>
                    </Row>
                    <Row item xs={12} md={4} center>
                        <CardComponent/>
                    </Row>
                    <Row item xs={12} md={4} center>
                        <CardComponent/>
                    </Row>
                </Row>
            </PropContainer>
        </PropWrapper>
    )
}

export default Properties
