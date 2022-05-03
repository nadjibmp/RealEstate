import { Formik, Form } from 'formik'
import { useState, useEffect, useRef } from 'react'
import Select from '../../signup/component/Select'
import { categorieList, TypeBien, Papiers, PaymentCondition, initialValues } from './AddPropArgs'
import { InputItem } from '../../signup/Signup.styled'
import React from 'react'
import { InputField } from '../../propertyWrapper/contact/Contact.styled'
import {
    AddPropWrapper,
    FormHeader,
    FormControl,
    LabelInput,
    BtnSubmit,
    MapWrapper
} from './AddProperty.styled'
import { InputLabel } from '../../signup/Signup.styled'
import WilayaLatLong from './WilayaLatLong.json';
import Commune from './Commune.json'
import { CardContainer, Header } from '../profile/Profile.styled'
import { Row } from '../Dashboard.styled'
import Map from '../../annoncebody/mapComponent/Map'
import ImageUploader from './ImageUploader'
export const getContext = React.createContext();

const AddProperty = () => {

    //creating state to store Cities
    const [villes, setVilles] = useState([]);

    //Creating State to store Communes based on Cities..
    const [communes, setCommunes] = useState([]);

    //getting Latitude longitude from map component by passing setLatLong with useContext Hook
    const [latLong, setLatLong] = useState(null);

    //geting the position in order to fly to that posstion
    const [flyToPoint, setFlyToPoint] = useState({});

    //to disable some checkbox and input based on 'type du bien '
    const ref = useRef(null);
    const [disable, setDisable] = useState(false);

    //for control state 
    const [step, setStep] = useState(1);

    //multi step form ...
    const NextStep = () => {
        if (step < 3) {
            setStep(step + 1)
        }
    }
    const PrevStep = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

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
        flyTo();
    }

    //fetch wilaya from local Json file...
    useEffect(() => {
        getWilaya()
    }, [])

    //to disable some checkboxes and inputs based on 'type du bien '
    const handleRef = () => {
        if (ref) {
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
    console.log(flyToPoint);
    return (
        <Formik
            innerRef={ref}
            enableReinitialize
            initialValues={initialValues}>
            {
                Formik => {
                    return (
                        <>
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
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Type du Bien</InputLabel>
                                                                <Select
                                                                    name='typebien'
                                                                    options={TypeBien}
                                                                    onBlur={handleRef}
                                                                >
                                                                </Select>
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
                                                                    name="superficiebien"
                                                                    placeholder='En m²'
                                                                    type="number"
                                                                >
                                                                </InputItem>
                                                            </FormControl>
                                                        </Row>
                                                        <Row item xs={6}>
                                                            <FormControl >
                                                                <InputLabel>Superficie du terrain</InputLabel>
                                                                <InputItem
                                                                    name="superficieterrain"
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
                                                                    name="etage"
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
                                                                    name="nombrepiece"
                                                                    placeholder='En Chiffre'
                                                                    type="number"
                                                                >
                                                                </InputItem>
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
                                                                    name="anneeconstruction"
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
                                                                    <input type="checkbox" name='jardin' />
                                                                    <LabelInput>Jardin</LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={2}>
                                                                <FormControl row>
                                                                    <input type="checkbox" name='piscine' />
                                                                    <LabelInput>Piscine</LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={2}>
                                                                <FormControl row>
                                                                    <input type="checkbox" name='asceensseur' />
                                                                    <LabelInput>Ascenseur</LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={3}>
                                                                <FormControl row>
                                                                    <input type="checkbox" name='Garage' />
                                                                    <LabelInput>Parking / Garage </LabelInput>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={3}>
                                                                <FormControl row>
                                                                    <input type="checkbox" name="terasse" />
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
                                                                        as='textarea'
                                                                        name="description"
                                                                        placeholder=" Je suis intéressé par votre bien !"
                                                                        rows='4'
                                                                    />
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={12}>
                                                                <FormHeader>
                                                                    Prix
                                                                </FormHeader>
                                                            </Row>
                                                            <Row item xs={6}>
                                                                <FormControl >
                                                                    <InputLabel>Prix</InputLabel>
                                                                    <InputItem
                                                                        name="prix"
                                                                        placeholder='En Dinard Algerien'
                                                                        type="number"
                                                                    >
                                                                    </InputItem>
                                                                </FormControl>
                                                            </Row>
                                                            <Row item xs={6}>
                                                                <FormControl >
                                                                    <InputLabel>Conditions de paiment</InputLabel>
                                                                    <Select
                                                                        name='conditionpaimenet'
                                                                        options={PaymentCondition}
                                                                    >
                                                                    </Select>
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
                                                            Uploadez vos images
                                                        </FormHeader>
                                                    </MapWrapper>
                                                </Row>
                                                <Row item xs={12}>
                                                    <ImageUploader/>
                                                </Row>
                                            </Row>
                                            {/* Button to navigate over the form  */}
                                            <div className="step-control-wrapper">
                                                <BtnSubmit type="submit">Créer</BtnSubmit>
                                            </div>
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