import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { Row } from '../../heroSection/Hero.styled'
import { ErrorFieldWrapper, InputItem } from '../../signup/Signup.styled'
import { BtnResetPassword, Container, HintText, ImgWrapper, MainTitle } from '../PasswordSend/EmailStep.styled'
import { initialValues } from './CheckEmailArgs'
import { BackContainer } from './CheckEmail.styled'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CheckEmail = ({ email, setCount, digits }) => {

    const [error, setError] = useState('');
    const [timeLeft, setTimeLeft] = useState(120);

    //to navigate to the singup page 
    let navigate = useNavigate();
    const NavigateBack = () => {
        navigate("../enregistrer", { replace: true });
    }

    const NavigateToFirstStep = () => {
        setCount(0);
    }
    const handleClick = () => {
        setCount(2);
    }


    const ResetPassword = (values) => {
        try {
            if (values.digits == digits && timeLeft > 0) {
                handleClick();
            }
            else {
                if (timeLeft <= 0) {
                    setError('temps de réponse epuisé veuillez demander un autre code ! ')
                }
                else
                    setError('Le code que vous avez entrez est erroné ! ')
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const timer =
            timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <Container>
            <Row container>
                <Row item xs={12}>
                    <ImgWrapper>
                        <HiOutlineMail className="lock-icon" color="#df711c" size={25} />
                    </ImgWrapper>
                </Row>

                <Row item xs={12}>
                    <MainTitle> Vérifiez votre boite mail </MainTitle>
                </Row>

                <Row item xs={12}>
                    <HintText>
                        veuillez entrer les six chiffres que nous envoyons à <br />
                        <b>{email}</b>
                    </HintText>
                </Row>

                <Row item xs={12}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={ResetPassword}>
                        <Form>
                            <div className="input-control">
                                <label for="digits">Entrez les 6 chiffres </label>
                                <InputItem name="digits" type="number" />
                                <ErrorFieldWrapper>
                                    {error}
                                </ErrorFieldWrapper>

                                <BtnResetPassword type='submit'>Réinitialiser le mot de passe</BtnResetPassword>
                            </div>
                        </Form>
                    </Formik>
                </Row>

                <Row item xs={12}>
                    <HintText>
                        le code sera Invalide aprés {timeLeft} seconds<br />
                        Vous n'avez pas reçu le mail ? <a onClick={NavigateToFirstStep}> cliquez pour renvoyer</a>
                    </HintText>
                </Row>

                <Row item={12}>
                    <BackContainer className="back-control">
                        <span onClick={NavigateBack}> <BiArrowBack /> Retour aux page d'accueil</span>
                    </BackContainer>
                </Row>
            </Row>
        </Container>
    )
}

export default CheckEmail