import React from 'react';
import {
    Service,
    Wrapper,
    Row,
    Heading,
    SmallHeading
} from './Services.styled';
import  Card  from './card/Card';
import { CardOne, CardTwo, CardThree} from './card/CardData';
import { HiHome } from "react-icons/hi";
import { GiBalloons } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";
const Services = () => {
    return (
        <>
            <Service>
                <Wrapper column>
                    <Row container >
                        <Row item column>
                            <Heading>Nos Services</Heading>
                            <SmallHeading>En ce qui concerne l'immobilier et les propriétés, nous sommes heureux à chaque étape</SmallHeading>
                        </Row>
                    </Row>
                    <Row container spacing={6}>
                        <Row item xs={12} md={6} lg={4} cardRow>
                            <Card {...CardOne}>
                                <HiHome  size={56} color='#39D5A2'/>
                            </Card>
                        </Row>
                        <Row item xs={12} md={6} lg={4} cardRow>
                            <Card {...CardTwo}>
                                <GiBalloons  size={56} color='#EFA13B'/>
                            </Card>
                        </Row>
                        <Row item xs={12} md={6} lg={4} cardRow>
                            <Card {...CardThree}>
                                <BiNetworkChart  size={56} color='#0D2435'/>
                            </Card>
                        </Row>
                    </Row>
                </Wrapper>
            </Service>
        </>
    )
}

export default Services
