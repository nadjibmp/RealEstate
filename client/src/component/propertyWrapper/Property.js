import React from 'react'
import {
    PropertyWrapper,
    ContainerWrapper,
    Row,
    PropertyInformation,
    ContactSection,
    PropertyMain,
    CondtionPaimentContainer,
    PaimentItem
} from './Property.styled'
import { BiBuildingHouse, BiDollar, BiMapPin } from "react-icons/bi"
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
const Property = ({ information }) => {
    const lat = [{
        key: information.data._id_property,
        popupMessage: information.data.wilaya,
        position: {
            lat: information.data.localisation_x,
            lng: information.data.localisation_y
        }
    }];
    return (
        <PropertyMain>
            <PropertyWrapper>
                <ContainerWrapper>
                    <Row container row spacing={3}>
                        <Row item xs={12} md={8}>
                            <PropertyInformation >
                                <Back />
                                <PropertyCar img_data={information.data.img_url} />
                                <Price price={information.data.price} />

                                <Description
                                    description={information.data.description}
                                    wilaya={information.data.wilaya}
                                    adresse={information.data.adresse}
                                    nb_chambre={information.data.nombre_chambre}
                                    feet={information.data.feet}
                                    nb_etages={information.data.nbetages} />

                                <Row container row spacing={2}>
                                    <Row item xs={6} md={4}>
                                        <Amenities info={information.data.typebien} infotoshow="type de maison">
                                            <BiBuildingHouse className='icon-orange' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info={information.data.nbetages} infotoshow="étage">
                                            <BiBuildingHouse className='icon-green' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info="Bonne" infotoshow="conditions générales">
                                            <GppGoodIcon className='icon-purple' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info={'à ' + information.data.categorie} infotoshow="statut">
                                            <BiDollar className='icon-green' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info={information.data.annee_construction} infotoshow="Année Construction">
                                            <BiMapPin className='icon-purple' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info={information.data.jardin ? "OUI" : "NON"} infotoshow="Jardin">
                                            <BiBuildingHouse className='icon-orange' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info={information.data.elevator ? "OUI" : "NON"} infotoshow="ascenseur">
                                            <BiBuildingHouse className='icon-purple' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info={information.data.pool ? "OUI" : "NON"} infotoshow="piscine">
                                            <BiBuildingHouse className='icon-orange' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={6} md={4}>
                                        <Amenities info={information.data.garage ? "OUI" : "NON"} infotoshow="Garage / Parking">
                                            <BiBuildingHouse className='icon-green' />
                                        </Amenities>
                                    </Row>
                                    <Row item xs={12} md={12}>
                                        <h4 className='cond-paimenet-title'>Condtion de paiment</h4>
                                        <CondtionPaimentContainer>

                                            {
                                                information.data.promesse_vente ?
                                                    <PaimentItem> Promesse de vente possible </PaimentItem>
                                                    : null
                                            }
                                            {
                                                information.data.paiment_tranche ?
                                                    <PaimentItem> Paimenet par tranche possible </PaimentItem>
                                                    : null
                                            }
                                            {
                                                information.data.credit_bancaire ?
                                                    <PaimentItem> Crédit bancaire possible </PaimentItem>
                                                    : null
                                            }
                                        </CondtionPaimentContainer>
                                    </Row>
                                    <Row item xs={12} md={12}>
                                        <h4 className='cond-paimenet-title'>Papiers</h4>
                                        <CondtionPaimentContainer>

                                            {
                                                information.data.papier ?
                                                    <PaimentItem> {information.data.papier} </PaimentItem>
                                                    : null
                                            }
                                        </CondtionPaimentContainer>
                                    </Row>
                                </Row>
                            </PropertyInformation>
                        </Row>
                        <Row item xs={12} md={4} >
                            <ContactSection>
                                <SaveShare />
                                <Contact />
                                <OpenHouse />
                                <CommentSection />
                            </ContactSection>
                        </Row>
                        <Row item xs={12} md={12}>
                            <Loaction title="Position">
                                <Map setMark locations={lat} />
                            </Loaction>
                            <Plan
                                plan_url={information.data.plan_img_path}
                                plan_img_alt={information.data.image_desc} />
                        </Row>
                    </Row>
                </ContainerWrapper>
            </PropertyWrapper>
        </PropertyMain>


    )
}

export default Property
