import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { ErrorFieldWrapper, InputItem } from "../../signup/Signup.styled";
import { HiLockClosed } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { Row } from "../../SignIn/SignIn.styled";
import { initialValues, validationSchema } from './EmailStepArgs'
import { Container, ImgWrapper, MainTitle, HintText, BtnResetPassword } from "./EmailStep.styled";
import axios from "axios";
const EmailStep = ({ setCount, setDigit, setMail }) => {

    const [error, setError] = useState('');

    let navigate = useNavigate();

    const NavigateBack = () => {
        navigate("../enregistrer", { replace: true });
    }
    
    const handleClick = () => {
        setCount(1);
    }

    const SendDigits = (values) => {
        try {
            let myDigits = Math.floor(100000 + Math.random() * 900000);
            setDigit(myDigits);
            axios
                .post(`http://localhost:3006/api/SendFirstStepEmail`, {
                    digits: myDigits,
                    email: values,
                })
                .then(response => {
                    setMail(values.email);
                    handleClick();
                })
                .catch(error => {
                    console.log('error');
                })
        } catch (error) {
            console.log(error);
        }
    }


    const CheckEmail = (values) => {
        try {
            axios
                .post('http://localhost:3006/api/CheckEmailIExist', {
                    email: values,
                })
                .then(response => {
                    const { data } = response.data;
                    if (data == 0) {
                        setError('Ce Email n\'existe pas ! Entrez un email valide !');
                    }
                    else {
                        SendDigits(values);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Container>
            <Row container>
                <Row item xs={12}>
                    <ImgWrapper orange>
                        <HiLockClosed className="lock-icon" color="#df711c" size={25} />
                    </ImgWrapper>
                </Row>

                <Row item xs={12}>
                    <MainTitle> Mot de passe Oublié ? </MainTitle>
                </Row>

                <Row item xs={12}>
                    <HintText>
                        Pas de soucis! nous vous enverrons des informations de
                        réinitialisation
                    </HintText>
                </Row>
                <Row>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={CheckEmail}>
                        <Form>
                            <div className="input-control">
                                <label for="input-email">Email</label>
                                <InputItem name="email" type="email" />
                                <ErrorFieldWrapper>
                                    {error}
                                </ErrorFieldWrapper >

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
    );
};

export default EmailStep;
