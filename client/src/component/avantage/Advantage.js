import React from 'react'
import {
    Avantages,
    Wrapper,
    Row,
    TitleWrapper,
    Title,
    TitleResp,
    Description
}   from './Advantage.styled';

const Advantage = () => {
    return (
        <Avantages>
            <Wrapper>
                <Row container>
                    <Row item xs={12} md={6} >
                        <TitleWrapper>
                            <Title> Notre mission</Title>
                            <TitleResp>C'est notre travail de savoir quelle maison vous cherchez.</TitleResp>
                        </TitleWrapper>    
                    </Row>
                    <Row item xs={12} md={6}>
                        <Description>
                        Trouvez facilement la maison que vous recherchez. 
                        Combien de pièces de manu voulez-vous? A-t-il un jardin ? 
                        est-il détaché ? Dans quelle ville, dans quel quartier.
                        Nous avons toutes les réponses à ces questions.
                        </Description>   
                    </Row>
                </Row>
            </Wrapper>
        </Avantages>
    )
}

export default Advantage
