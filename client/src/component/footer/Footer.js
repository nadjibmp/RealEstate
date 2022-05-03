import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {
    FooterSection,
    Wrapper,
    Row,
    Title,
    SubTitle,
    UsefulLink,
    IconWrapper
} from './Footer.styled';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => { 
    const [show, setShow] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === '/SignUp' || location.pathname === '/dashboard/mainDashboard' || location.pathname === '/SignInn' || location.pathname === '/Annonces') {
            setShow(false);
        } else {
            setShow(true);
        }
    },[location.pathname])
    
    return (
        <>
            <FooterSection show={show}>
                <Wrapper border padding="50px 0">
                    <Row container >
                        <Row item xs={12} md={4} column center >
                            <Title>Contacter nous</Title>
                            <SubTitle>32 El Banafseg, 1st Settlement New Cairo, Cairo, Egypt</SubTitle>
                            <UsefulLink to='/'>anadjib54@gmail.com</UsefulLink>
                            <SubTitle>Contacter nous</SubTitle>
                            <IconWrapper>
                                <FaFacebookSquare/>
                                <FaInstagram/>
                                <FaLinkedin/>
                            </IconWrapper>
                        </Row>
                        <Row item xs={12} md={4} column center>
                            <Title>Liens utiles</Title>
                            <UsefulLink to='/'>A propos de nous</UsefulLink>
                            <UsefulLink to='/'>termes & conditions</UsefulLink>
                            <UsefulLink to='/'>Politique de confidentialités</UsefulLink>
                        </Row>
                        <Row item xs={12} md={4} column center>
                            <Title>Recherches populaires </Title>
                        </Row>
                    </Row>
                </Wrapper>
                <Wrapper  padding="10px 0">
                <SubTitle>2021 3aqaar LLC.</SubTitle>
                </Wrapper>
            </FooterSection>
        </>
    )
}

export default Footer
