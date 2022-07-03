import React from 'react'
import {
    DescriptionWrapper,
    TitleWrapper,
    Ville,
    Address,
    Information,
    Row,
    Descr,
    Info,
    Title,
    BedIcon,
    BathIcon,
    MIcon,
    DesHeader,
    DesMain
} from './Description.styled'
const Description = ({ description, wilaya, adresse, nb_chambre, feet, nb_etages }) => {
    return (
        <>
            <DescriptionWrapper >
                <TitleWrapper>
                    <Row container row spacing={2}>
                        <Row item xs={12} md={6}>
                            <Title>
                                <Ville>{wilaya}</Ville>
                                <Address>{adresse}</Address>
                            </Title>
                        </Row>
                        <Row item xs={12} md={6}>
                            <Information>
                                <Info>
                                    <BedIcon />
                                    <span>{nb_chambre} Chambres</span>
                                </Info>
                                <Info>
                                    <BathIcon />
                                    <span>{nb_etages} Etage</span>
                                </Info>
                                <Info>
                                    <MIcon />
                                    <span>{feet} M²</span>
                                </Info>
                            </Information>
                        </Row>
                    </Row>
                </TitleWrapper>
                <Descr>
                    <DesHeader>
                        Description
                    </DesHeader>
                    <DesMain>
                        {description}
                    </DesMain>
                </Descr>
            </DescriptionWrapper>
        </>
    )
}

export default Description
