import React from 'react'
import { HiLockClosed } from 'react-icons/hi'
import { Row } from '../../heroSection/Hero.styled'
import { BtnResetPassword, Container, HintText, ImgWrapper, MainTitle } from '../PasswordSend/EmailStep.styled'
import { Formik, Form, ErrorMessage } from "formik";
import { initialValues, validationSchema } from './ResetPasswordArgs'
import { ErrorFieldWrapper, InputItem } from '../../signup/Signup.styled';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = ({email, setCount}) => {

    let navigate = useNavigate();

    const NavigateBack = ({ }) => {
        navigate("../enregistrer", { replace: true });
    }

    const handleClick = () => {
        setCount(3);
    }


    const ResetPassword = (values) => {
        try {
            axios
                .put("http://localhost:3006/api/ResetPassword",{
                    password : values.motdepass1,
                    email:email,
                })
                .then(response => {
                    handleClick();
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Container>
            <Row container>
                <Row item xs={12}>
                    <ImgWrapper>
                        <HiLockClosed className="lock-icon" color="#df711c" size={25} />
                    </ImgWrapper>
                </Row>

                <Row item xs={12}>
                    <MainTitle> Definir un nouveau mot de passe </MainTitle>
                </Row>

                <Row item xs={12}>
                    <HintText>
                        Entrer un nouveau mot de passe afin de le mémoriser facilement
                    </HintText>
                </Row>

                <Row item xs={12}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={ResetPassword}
                    >
                        <Form>
                            <div className="input-control">
                                <label for="input-password">Mot de pass :</label>
                                <InputItem name="motdepass1" type="password" />
                                <ErrorFieldWrapper>
                                    <ErrorMessage name="motdepass1" />
                                </ErrorFieldWrapper>
                            </div>
                            <div className="input-control">
                                <label for="input-password2">Comfirmer le mot de pass :</label>
                                <InputItem name="motdepass2" type="password" />
                                <ErrorFieldWrapper>
                                    <ErrorMessage name="motdepass2" />
                                </ErrorFieldWrapper>

                                <BtnResetPassword type="submit">Réinitialiser le mot de passe</BtnResetPassword>

                                <div className="back-control">
                                    <span onClick={NavigateBack}> <BiArrowBack /> Retour aux page d'accueil</span>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </Row>
            </Row>
        </Container>
    )
}

export default ResetPassword