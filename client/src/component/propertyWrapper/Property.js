import React from 'react'
import {
    PropertyWrapper,
    ContainerWrapper,
    Row,
    PropertyInformation,
    ContactSection,
    PropertyMain
} from './Property.styled'
import {BiBuildingHouse, BiDollar, BiMapPin} from "react-icons/bi"
import GppGoodIcon from '@mui/icons-material/GppGood';
import PropertyCar from './propertyCarousel/PropertyCar'
import Back from './backComp/Back'
import SaveShare from './saveShare/SaveShare'
import Contact from './contact/Contact'
import OpenHouse from './openHouse/OpenHouse'
import Price from './price/Price'
import Description from './Description/Description'
import CommentSection from './commentSection/CommentSection'
import Amenities from './amenities/Amenities'
import Plan from './FloorPlan/Plan';
import Loaction from './location/Loaction';
import Map from '../annoncebody/mapComponent/Map'
const Property = () => {
    return (
        <PropertyMain>
            <PropertyWrapper>
                <ContainerWrapper>
                    <Row container row spacing={3}>
                        <Row item xs={12} md={8}>
                            <PropertyInformation >
                                <Back/>
                                <PropertyCar/>
                                <Price/>
                                <Description/>
                                <Row container row spacing={2}>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Appartement" infotoshow="type de maison">
                                            <BiBuildingHouse className='icon-orange'/>
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Deux" infotoshow="étage">
                                            <BiBuildingHouse className='icon-green'/>
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Bonne" infotoshow="conditions générales">
                                            <GppGoodIcon className='icon-purple'/>
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="à Vendre" infotoshow="statut">
                                            <BiDollar className='icon-green'/>
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Est" infotoshow="exposition">
                                            <BiMapPin className='icon-purple'/>
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Trois" infotoshow="balcon">
                                            <BiBuildingHouse className='icon-orange'/>
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Non" infotoshow="ascenseur">
                                            <BiBuildingHouse className='icon-purple'/>
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Non" infotoshow="piscine">
                                            <BiBuildingHouse className='icon-orange'/>
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Oui" infotoshow="placard">
                                            <BiBuildingHouse className='icon-green'/>
                                        </Amenities>
                                    </Row>
                                </Row>
                            </PropertyInformation>
                        </Row>
                        <Row item xs={12} md={4} >
                            <ContactSection>
                                <SaveShare/>
                                <Contact/>
                                <OpenHouse/>
                                <CommentSection/>
                            </ContactSection>
                        </Row>
                        <Row item xs={12} md={12}>
                            <Loaction>
                                <Map/>
                            </Loaction>
                            <Plan/>
                        </Row>
                    </Row>
                </ContainerWrapper>
            </PropertyWrapper>
        </PropertyMain>
        

    )
}

export default Property
