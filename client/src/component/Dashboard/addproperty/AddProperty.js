import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState, useEffect, useRef } from 'react'
import Select from '../../signup/component/Select'
import { categorieList, TypeBien, Papiers, initialValues, validationSchema } from './AddPropArgs'
import { InputItem, InputLabel } from '../../signup/Signup.styled'
import React from 'react'
import { InputField } from '../../propertyWrapper/contact/Contact.styled';
import { ErrorFieldWrapper } from '../../signup/Signup.styled'
import {
    AddPropWrapper,
    FormHeader,
    FormControl,
    LabelInput,
    BtnSubmit,
    MapWrapper,
} from './AddProperty.styled';
import WilayaLatLong from './WilayaLatLong.json';
import Commune from './Commune.json';
import { CardContainer, Header } from '../profile/Profile.styled'
import { Row } from '../Dashboard.styled';
import Map from '../../annoncebody/mapComponent/Map';
import ImageUploader from './ImageUploader';
import axios from 'axios'
import PlanUploader from './PlanUploader'
import { AlertBox } from '../../heroSection/Hero.styled'
import { useNavigate } from "react-router-dom";

export const getContext = React.createContext();

const AddProperty = () => {
    axios.defaults.withCredentials = true;

    //display alert on success
    const [display, setDisplay] = useState(false)

    //creating state to store Cities
    const [villes, setVilles] = useState([]);

    //State to set Images ....
    const [images, setImages] = useState([]);

    //state to set plan image
    const [planImage, setPlanImage] = useState([]);

    //Creating State to store Communes based on Cities..
    const [communes, setCommunes] = useState([]);

    //getting Latitude longitude from map component by passing setLatLong with useContext Hook
    const [latLong, setLatLong] = useState(null);

    //geting the position in order to fly to that posstion
    const [flyToPoint, setFlyToPoint] = useState({});

    //to disable some checkbox and input based on 'type du bien '
    const ref = useRef(null);
    const [disable, setDisable] = useState(false);

    //message came from backend
    const [message, setMessage] = useState("");

    //to navigate to another page 
    let navigate = useNavigate();


    // Getting coords of all wilaya in allgeria and put theme into selet box
    const getWilaya = () => {
        setVilles(WilayaLatLong.map(ville => {
            return (
                { key: ville.admin_name, value: ville.admin_name }
            )
        }))
        setVilles(villes => [{ key: "Selectionner votre wilaya", value: "" }, ...villes])
    }

    //getting all communes according to cities choosen in the oder fields
    const getCommune = () => {
        var { wilaya } = ref.current.values;
        let tempArray = [];
        Commune.map(comm => {
            if (comm.wilaya_name_ascii === wilaya) {
                tempArray.push({ value: comm.commune_name_ascii, key: comm.commune_name_ascii });
            }
        })
        setCommunes(tempArray.map(element => {
            return element;
        }))
        setCommunes(communes => [{ key: "Selectionner votre commune", value: "" }, ...communes])
        flyTo();
    }

    //fetch wilaya from local Json file...
    useEffect(() => {
        getWilaya()
    }, [])

    //to disable some checkboxes and inputs based on 'type du bien '
    const handleRef = () => {
        if (ref) 
        {
            const { typebien } = ref.current.values;
            if (typebien === "Appartement" || typebien === "Studio" || typebien === "") {
                setDisable(true);
            } else {
                setDisable(false);
            }
        }
    }

    //Fly to position when selecting a citie
    const flyTo = () => {
        if (ref) {
            var { wilaya } = ref.current.values;
            console.log(wilaya);
            WilayaLatLong.map(element => {
                if (element.admin_name === wilaya) {
                    setFlyToPoint({ lat: element.lat, lng: element.lng })
                }
            })
        }
    }

    //Submit function ..
    const onSubmit = (values, { resetForm }) => {
        const formData = new FormData();
        Object.values(images).forEach(img => { formData.append("Myfile", img) })
        Object.values(values).forEach(element => { formData.append("data", element) })
        Object.values(planImage).forEach(element => { formData.append("myPlan", element) })
        if (latLong != null) {
            formData.append("lat", latLong.lat);
            formData.append("lng", latLong.lng);
        } else {
            formData.append("lat", 0);
            formData.append("lng", 0);
        }
        const localStorageValue = JSON.parse(localStorage.getItem('userID'));
        formData.append("UserId", localStorageValue.userId);

        axios
            .post("http://localhost:3006/api/addListing", formData,
                {
                    headers: {
                        'Content-Type': "multipart/form-data",
                    }
                })
            .then((response) => {
                setMessage(response.data.message);
                setDisplay(true);
                resetForm({ values: "" })
                navigate("../properties")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Formik
            innerRef={ref}
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}>
            {
                Formik => {
                    return (
                        <>
                            {
                                display ?
                                    <AlertBox variant="filled" severity="success">{message}</AlertBox>
                                    : null
                            }
                            <AddPropWrapper >
                                <Row container>
                                    <Row item xs={12} md={12}>
                                        <CardContainer>
                                            <Header>Ajouter une nouvelle propriété </Header>
                                        </CardContainer>
                                    </Row>
                                    <Row item xs={12}>
                                        <CardContainer className="card-container">
                                            <Form>
                                                <div className="control-wrapper" >
                                                    <Row container row>
                                                        <Row item xs={12}>
                                                            <FormHeader>
                                                                Transaction
                                                            </FormHeader>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Catégorie</InputLabel>
                                                                <Select
                                                                    name='categorie'
                                                                    options={categorieList}
                                                                >
                                                                </Select>
                                                                <ErrorFieldWrapper>
                                                                    <ErrorMessage name="categorie" />
                                                                </ErrorFieldWrapper>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Type du Bien</InputLabel>
                                                                <Select
                                                                    name='typeBien'
                                                                    options={TypeBien}
                                                                    onBlur={handleRef}
                                                                >
                                                                </Select>
                                                                <ErrorFieldWrapper>
                                                                    <ErrorMessage name="typeBien" />
                                                                </ErrorFieldWrapper>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={12}>
                                                            <FormHeader>
                                                                Décrire votre Bien
                                                            </FormHeader>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Superficie du bien</InputLabel>
                                                                <InputItem
                                                                    name="superficieBien"
                                                                    placeholder='En m²'
                                                                    type="number"
                                                                >
                                                                </InputItem>
                                                                <ErrorFieldWrapper>
                                                                    <ErrorMessage name="superficieBien" />
                                                                </ErrorFieldWrapper>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Superficie du terrain</InputLabel>
                                                                <InputItem
                                                                    name="superficieTerrain"
                                                                    placeholder='En m²'
                                                                    type="number"
                                                                    disabled={disable}
                                                                >
                                                                </InputItem>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Etage(s)</InputLabel>
                                                                <InputItem
                                                                    name="etages"
                                                                    placeholder='En Chiffre'
                                                                    type="number"
                                                                >
                                                                </InputItem>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Nombre de piéces</InputLabel>
                                                                <InputItem
                                                                    name="nombrePiece"
                                                                    placeholder='En Chiffre'
                                                                    type="number"
                                                                >
                                                                </InputItem>
                                                                <ErrorFieldWrapper>
                                                                    <ErrorMessage name="nombrePiece" />
                                                                </ErrorFieldWrapper>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Papiers</InputLabel>
                                                                <Select
                                                                    name='papier'
                                                                    options={Papiers}
                                                                >
                                                                </Select>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Année de construction</InputLabel>
                                                                <InputItem
                                                                    name="anneeConstrucion"
                                                                    placeholder='Année'
                                                                    type="number"
                                                                >
                                                                </InputItem>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={12}>
                                                            <FormHeader>
                                                                Spécification
                                                            </FormHeader>
                                                        </Row>
                                                        <Row container row>
                                                            <Row item xs={2}>
                                                                <FormControl row>
                                                                    <Field type="checkbox" name='suppliments' value="jardin" />
                                                                    <LabelInput>Jardin</LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={2}>
                                                                <FormControl row>
                                                                    <Field type="checkbox" name='suppliments' value="piscine" />
                                                                    <LabelInput>Piscine</LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={2}>
                                                                <FormControl row>
                                                                    <Field type="checkbox" name='suppliments' value='ascensseur' />
                                                                    <LabelInput>Ascenseur</LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={3}>
                                                                <FormControl row>
                                                                    <Field type="checkbox" name='suppliments' value="parkingGarage" />
                                                                    <LabelInput>Parking / Garage </LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={3}>
                                                                <FormControl row>
                                                                    <Field type="checkbox" name="suppliments" value="terasse" />
                                                                    <LabelInput>Térasse</LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={12}>
                                                                <FormHeader>
                                                                    Description
                                                                </FormHeader>
                                                            </Row>
                                                            <Row item xs={12}>
                                                                <FormControl row>
                                                                    <InputField
                                                                        name="description"
                                                                        placeholder=" Je suis intéressé par votre bien !"
                                                                        className="text-area"
                                                                    />
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={12}>
                                                                <FormHeader>
                                                                    Prix
                                                                </FormHeader>
                                                            </Row>
                                                            <Row item xs={12}>
                                                                <FormControl >
                                                                    <InputLabel>Prix</InputLabel>
                                                                    <InputItem
                                                                        name="prix"
                                                                        placeholder='En Dinard Algerien'
                                                                        type="number"
                                                                        className="price-input"
                                                                    >
                                                                    </InputItem>
                                                                    <ErrorFieldWrapper>
                                                                        <ErrorMessage name="prix" />
                                                                    </ErrorFieldWrapper>
                                                                </FormControl>

                                                            </Row>
                                                            <Row item xs={12}>
                                                                <FormControl >
                                                                    <InputLabel>Conditions de paiment</InputLabel>
                                                                    <div className='checkbox-wrapper'>
                                                                        <FormControl row center>
                                                                            <Field type="checkbox" name='conditionsPaiment' value='Promesse de vente' />
                                                                            <LabelInput>Promesse de vente</LabelInput>
                                                                        </FormControl>
                                                                        <FormControl row center>
                                                                            <Field type="checkbox" name='conditionsPaiment' value='Paiment par tranche' />
                                                                            <LabelInput>Paiment par tranche</LabelInput>
                                                                        </FormControl>
                                                                        <FormControl row center>
                                                                            <Field type="checkbox" name='conditionsPaiment' value='Crédit bancaire possible' />
                                                                            <LabelInput>Crédit bancaire possible</LabelInput>
                                                                        </FormControl>
                                                                    </div>

                                                                </FormControl>
                                                            </Row>
                                                        </Row>
                                                        <Row item xs={12}>
                                                            <FormHeader>
                                                                Choisir la location du bien
                                                            </FormHeader>
                                                        </Row>
                                                        <Row item xs={12} md={6}>
                                                            <FormControl >
                                                                <InputLabel>Wilaya</InputLabel>
                                                                <Select
                                                                    name='wilaya'
                                                                    options={villes}
                                                                    onBlur={getCommune}
                                                                >
                                                                </Select>
                                                                <ErrorFieldWrapper>
                                                                    <ErrorMessage name="wilaya" />
                                                                </ErrorFieldWrapper>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={12} md={6}>
                                                            <FormControl >
                                                                <InputLabel>Commune</InputLabel>
                                                                <Select
                                                                    name='commune'
                                                                    options={communes}
                                                                >
                                                                </Select>
                                                                <ErrorFieldWrapper>
                                                                    <ErrorMessage name="commune" />
                                                                </ErrorFieldWrapper>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={12} md={12}>
                                                            <FormControl >
                                                                <InputLabel>Adresse</InputLabel>
                                                                <InputItem
                                                                    className='adresse-input'
                                                                    name="adresse"
                                                                    placeholder='Taper votre adresse compléte'
                                                                    type="text"
                                                                >
                                                                </InputItem>
                                                            </FormControl>
                                                        </Row>
                                                    </Row>
                                                </div>
                                            </Form>
                                            {/* setting the map so we can retrieve from it coord x and y */}
                                            <Row container>
                                                <Row item xs={12}>
                                                    <MapWrapper >
                                                        <FormHeader>
                                                            Choisir la Position exact du bien
                                                        </FormHeader>
                                                    </MapWrapper>
                                                </Row>
                                                <Row item xs={12} >
                                                    <MapWrapper>
                                                        <getContext.Provider value={setLatLong}>
                                                            <Map navigateto={flyToPoint} zoom={15} />
                                                        </getContext.Provider>
                                                    </MapWrapper>
                                                </Row>
                                                <Row item xs={12}>
                                                    <MapWrapper >
                                                        <FormHeader>
                                                            Images de votre bien
                                                        </FormHeader>
                                                    </MapWrapper>
                                                </Row>
                                                <Row item xs={12}>
                                                    <ImageUploader setImages={setImages} />
                                                </Row>
                                                <Row item xs={12}>
                                                    <MapWrapper >
                                                        <FormHeader>
                                                            Image de votre plan
                                                        </FormHeader>
                                                    </MapWrapper>
                                                </Row>
                                                <Row item xs={12}>
                                                    <PlanUploader setImages={setPlanImage} />
                                                </Row>
                                            </Row>
                                            <Form>
                                                <div className="step-control-wrapper">
                                                    <BtnSubmit type="submit">Créer</BtnSubmit>
                                                </div>
                                            </Form>
                                        </CardContainer>
                                    </Row>
                                </Row>
                            </AddPropWrapper>
                        </>
                    )
                }
            }

        </Formik>
    )
}

export default AddProperty