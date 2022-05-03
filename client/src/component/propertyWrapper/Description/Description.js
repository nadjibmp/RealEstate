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
const Description = () => {
    return (
        <>
            <DescriptionWrapper >
                <TitleWrapper>
                    <Row container row spacing={2}>
                        <Row item xs={12} md={6}>
                            <Title>
                                <Ville>Annaba</Ville>
                                <Address>Cité Didouche Mourad 440 lgts.</Address>
                            </Title>
                        </Row>
                        <Row item xs={12} md={6}>
                            <Information>
                                <Info>
                                    <BedIcon/>
                                    <span>6 Chambres</span>
                                </Info>
                                <Info>
                                    <BathIcon/>
                                    <span>2 Salle de bain</span>
                                </Info>
                                <Info>
                                    <MIcon/>
                                    <span>100 M²</span>
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </DesMain>
                </Descr>
            </DescriptionWrapper>
        </>
    )
}

export default Description
