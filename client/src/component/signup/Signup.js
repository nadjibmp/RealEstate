import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Formik, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import logo from "../navbar/logo2.svg";
import Select from './component/Select'
import { initialValues, validationSchema, sexeList, dropdownOptions } from "./signupArgs/Args";
import {
    SignWrapper,
    Overlay,
    Wrapper,
    FormWrapper,
    Logo,
    FormHeader,
    Header,
    FormBody,
    HaveAccountLink,
    Row,
    InputItem,
    InputLabel,
    SendBtn,
    SocialWrapper,
    FbIcon,
    GgIcon,
    TwIcon,
    ErrorFieldWrapper,
    ErrorMessageBackend
} from "./Signup.styled";
import background from '../../assets/lroom.jpg'


const Signup = () => {

    //instanciate navigate hook 
    let navigate = useNavigate();

    //creating state to store countries
    const [countries, setCountries] = useState([])

    //Creating state to store error from backend
    const [error, setError] = useState({
        success: true,
        message: ''
    })


    //Submitting Methode
    const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        axios
            .post("http://localhost:3006/api/inscrire", { values })
            .then((response) => {
                resetForm({ values: "" })
                setStatus({ success: "Email sent !" })
                navigate("/", { state: 'hello from signup page' })
            })
            .catch((err) => {
                console.log(err.response.data.message)
                setError({
                    success: false,
                    message: err.response.data.message
                })
            });
        setSubmitting(false)
    };

    // getting coutries from github repo
    const getCountries = () => {
        axios.get("https://raw.githubusercontent.com/diplomatiegouvfr/applitutoriel-js/master/src/resources/mock/par/par-pays-data.json")
            .then((response) => {
                setCountries(response.data.pays.map((el) => {
                    if (el.nationalite == null) {
                        return { key: el.libelle, value: el.nationalite }
                    } else
                        return { key: el.nationalite, value: el.nationalite }
                }))
                setCountries(countries => [{ key: "Selectionner votre nationalité", value: "" }, ...countries])
            })
            .catch(error => console.log(error))
    }

    //loading the countries once when the page load 
    useEffect(() => {
        getCountries()
    }, [])
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                formik => {
                    return (
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
                                                    <Header>Prenons quelques informations sur vous !</Header>
                                                </Row>
                                            </Row>
                                        </FormHeader>
                                        <FormBody>
                                            <Form>
                                                <Row container>
                                                    <Row item xs={12}>
                                                        <HaveAccountLink to="/">
                                                            Avez-vous déjà un compte? Connectez vous ici
                                                        </HaveAccountLink>
                                                    </Row>
                                                    <Row container row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Nom <span>*</span>
                                                            </InputLabel>
                                                            <InputItem type="text" name="nom" />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="nom" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Prénom <span>*</span>
                                                            </InputLabel>
                                                            <InputItem type="text" name="prenom" />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="prenom" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Email <span>*</span>
                                                            </InputLabel>
                                                            <InputItem type="email" name="email" />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="email" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Comfirmer l'Email <span>*</span>{" "}
                                                            </InputLabel>
                                                            <InputItem type="email" name="cemail" />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="cemail" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Numéro de téléphone <span>*</span>
                                                            </InputLabel>
                                                            <InputItem type="tel" name="tel" />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="tel" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                2éme Numero <span>*</span>
                                                            </InputLabel>
                                                            <InputItem type="tel" name="tell" />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="tell" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Date de naissance <span>*</span>
                                                            </InputLabel>
                                                            <InputItem
                                                                type="date"
                                                                placeholder="JJ/MM/AAAA"
                                                                name="naissance"
                                                            />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="naissance" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Sexe <span>*</span>
                                                            </InputLabel>
                                                            <Select
                                                                name="sexe"
                                                                options={sexeList}
                                                            >
                                                            </Select>
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="sexe" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Mot de passe <span>*</span>
                                                            </InputLabel>
                                                            <InputItem type="password" name="motdepass1" />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="motdepass1" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Comfirmer le Mot de passe <span>*</span>
                                                            </InputLabel>
                                                            <InputItem type="password" name="motdepass2" />
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="motdepass2" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Vous êtes <span>*</span>
                                                            </InputLabel>
                                                            <Select
                                                                name="status"
                                                                options={dropdownOptions}
                                                            >
                                                            </Select>
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="status" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <InputLabel>
                                                                Nationalité <span>*</span>
                                                            </InputLabel>
                                                            <Select
                                                                name="nationalite"
                                                                options={countries}
                                                            >
                                                            </Select>
                                                            <ErrorFieldWrapper>
                                                                <ErrorMessage name="nationalite" />
                                                            </ErrorFieldWrapper>
                                                        </Row>
                                                        <Row item xs={12} md={6} paddingTop>
                                                            <SendBtn type="submit" disabled={formik.isSubmitting}>S'enregistrer</SendBtn>
                                                        </Row>
                                                        <Row>
                                                            {
                                                                error.success ? null : <ErrorMessageBackend>{error.message}</ErrorMessageBackend>
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
                                                    inscrire !
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
                    )
                }
            }
        </Formik>
    );
};

export default Signup;
