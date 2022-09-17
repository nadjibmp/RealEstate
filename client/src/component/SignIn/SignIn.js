import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../GlobalContext/Auth';
import { Formik, Form, ErrorMessage } from "formik";
import { BiErrorCircle } from "react-icons/bi";
import { initialValues, validationSchema } from './signinArgs/Args';
import logo from "../navbar/logo2.svg"
import axios from 'axios';
import {
    SignWrapper,
    Overlay,
    FormWrapper,
    Wrapper,
    FormHeader,
    Row,
    Logo,
    Header,
    FormBody,
    HaveAccountLink,
    InputLabel,
    InputItem,
    ErrorFieldWrapper,
    SendBtn,
    FbIcon,
    GgIcon,
    TwIcon,
    SocialWrapper,
    ErrorMessageBackend
} from './SignIn.styled'
import background from '../../assets/lroom.jpg'
const SignIn = () => {

    // for receiving credentials from responses
    axios.defaults.withCredentials = true;

    //seting the userEmail ...
    const [user, setUser] = useState('')

    //seeting the message error using state
    const [error, setError] = useState({
        error: true,
        message: ""
    })

    //for login purposes...
    const auth = useAuth()

    // to navigate to another page 
    const navigate = useNavigate()


    const handleLogin = (values) => {
        axios
            .post("http://localhost:3006/api/login", {
                values,
                withCredentials: true,
            })
            .then((response) => {
                const { email, userId, nom, prenom } = response.data
                localStorage.setItem("userID", JSON.stringify({email, userId, nom, prenom, user}))
                setUser(email);
                setError({
                    error: true,
                    message: ""
                });
                auth.login(user, nom, prenom);
                navigate('/')
            })
            .catch((err) => {
                const { message } = err.response.data
                setError({
                    error: false,
                    message: message
                });
            });
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
        >
            <SignWrapper style={{ backgroundImage: `url(${background})`}}>
                <Overlay>
                    <FormWrapper>
                        <Wrapper>
                            <FormHeader>
                                <Row container>
                                    <Row item xs={12}>
                                        <Logo src={logo} />
                                    </Row>
                                    <Row item xs={12}>
                                        <Header>Nous sommes heureux de vous revoir</Header>
                                    </Row>
                                </Row>
                            </FormHeader>
                            <FormBody>
                                <Form>
                                    <Row container>
                                        <Row item xs={12}>
                                            <HaveAccountLink to="/">
                                                Vous n'avez pas un compte? Inscrivez-vous ici
                                            </HaveAccountLink>
                                        </Row>
                                        <Row container row>
                                            <Row item xs={12} paddingTop>
                                                <InputLabel>
                                                    <p>E-mail <span>*</span></p>
                                                </InputLabel>
                                                <InputItem type="text" name="email" onKeyUp={(event) => setUser(event.target.value)} />
                                                <ErrorFieldWrapper>
                                                    <ErrorMessage name="email" />
                                                </ErrorFieldWrapper>
                                            </Row>
                                            <Row item xs={12} paddingTop>
                                                <InputLabel>
                                                    <p>Mot de pass <span>*</span></p>
                                                    <HaveAccountLink to="/">Mot de pass oublié ? </HaveAccountLink>
                                                </InputLabel>
                                                <InputItem type="password" name="motdepass" />
                                                <ErrorFieldWrapper>
                                                    <ErrorMessage name="motdepass" />
                                                </ErrorFieldWrapper>
                                            </Row>
                                            <Row item xs={12} paddingTop>
                                                <SendBtn type="submit">Connexion</SendBtn>
                                            </Row>
                                            <Row item xs={12} paddingTop>
                                                {
                                                    error.error ? null : <ErrorMessageBackend> <BiErrorCircle />{error.message} </ErrorMessageBackend>
                                                }
                                            </Row>
                                        </Row>
                                    </Row>
                                </Form>
                            </FormBody>
                            <Row container>
                                <Row item xs={12}>
                                    <Header>
                                        Vous pouvez également utiliser les médias sociaux pour vous
                                        connectez !
                                    </Header>
                                </Row>
                                <Row item xs={12}>
                                    <SocialWrapper>
                                        <FbIcon />
                                        <GgIcon />
                                        <TwIcon />
                                    </SocialWrapper>
                                </Row>
                            </Row>
                        </Wrapper>
                    </FormWrapper>
                </Overlay>
            </SignWrapper>
        </Formik>
    )
}

export default SignIn
