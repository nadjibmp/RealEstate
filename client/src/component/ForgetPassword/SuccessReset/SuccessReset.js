import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Row } from '../../heroSection/Hero.styled'
import { BtnResetPassword, Container, HintText, ImgWrapper, MainTitle } from '../PasswordSend/EmailStep.styled'

const SuccessReset = () => {
    let navigate = useNavigate();

    const NavigateBack = () => {
        navigate("../enregistrer", { replace: true });
    }
    return (
        <Container>
            <Row container>
                <Row item xs={12}>
                    <ImgWrapper>
                        <BsCheck2Circle className="lock-icon" color="#17905A" size={25} />
                    </ImgWrapper>
                </Row>

                <Row item xs={12}>
                    <MainTitle> Réinitialisation du mot de passe réussie </MainTitle>
                </Row>

                <Row item xs={12}>
                    <HintText>
                        Votre mot de passe a été réinitialisé avec succès. <br />
                        Cliquez ci-dessous pour vous connecter.
                    </HintText>
                </Row>

                <Row>
                    <div className="input-control">
                        <BtnResetPassword type="button" onClick={NavigateBack}>Continue </BtnResetPassword>

                        <div className="back-control">
                            <span onClick={NavigateBack}> <BiArrowBack /> Retour aux page d'accueil</span>
                        </div>
                    </div>
                </Row>
            </Row>
        </Container>
    )
}

export default SuccessReset