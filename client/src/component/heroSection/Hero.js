import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
    HeroSection,
    Shape,
    Overlay,
    MainHeader,
    SecondHeader,
    Btn,
    Wrapper,
    Row,
    BoxSearch,
    Label,
    Form,
    SelectInput,
    LoactionIcon,
    DarIcon,
    PriceIcon,
    CalendarIcon,
    SearchBtn,
    SendingIcon,
    AlertBox
} from "./Hero.styled";
import background from './lroom.jpg'
const Hero = (props) => {
    axios.defaults.withCredentials = true;
    // States
    const navigate = useNavigate()
    const { state } = useLocation()
    const location = useLocation()
    const [display, setDisplay] = useState(false)
    const [wilaya, setWilaya] = useState([])
    const [color, setColor] = useState(false)
    const [filters, setFilters] = useState({
        emplacement: "",
        type: "",
        prix: "",
        typelocation: "",
        ameublement: "",
    });
    const TypeAppartement = [
        'Terrain',
        'Villa',
        'Maison',
        'Local',
        'Carcasse',
        'Niveau de villa',
        'Terrain Agricole',
        'Immeuble',
        'Duplex',
        'Studio',
        'Hangar',
        'Bungalow',
        'Usine',
        'Autre'
    ]
    // Function
    const handleColor = () => {
        setColor(!color);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setFilters({
            ...filters,
            [event.target.name]: value,
        });
    };

    // load all the cities in algeria once the page is loaded
    const getWilayas = () => {
        axios
            .get("wilaya.json")
            .then((res) => {
                setWilaya(res.data);
                if (state) {
                    setDisplay(true)
                    timer()
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    
    const timer = () => {
        setTimeout(() => {
            setDisplay(false)
            navigate(location.pathname, { replace: true })
        }, 5000)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getWilayas()
        return () => {
            clearTimeout(timer)
        }
    }, []);

    //for login purposes...

    return (
        <>
            {
                display ?
                    <AlertBox variant="filled" severity="success">Votre compte a été créé avec succès !</AlertBox>
                    : null
            }
            <HeroSection style={{ backgroundImage: `url(${background})` }}>
                <Overlay>
                    <Wrapper>
                        <Row container>
                            <Row item xs={12}>
                                <MainHeader>Trouvez votre meilleur immobilier </MainHeader>
                            </Row>
                            <Row item xs={12}>
                                <SecondHeader>
                                    nous nous occupons de tout pour vous sous un même toit{" "}
                                </SecondHeader>
                            </Row>
                        </Row>
                        <Row container>
                            <Row item xs={12} flexstart>
                                <Btn colortheme={!color} onClick={handleColor} brtleft>
                                    Acheter
                                </Btn>
                                <Btn colortheme={color} onClick={handleColor}>
                                    Louer
                                </Btn>
                            </Row>
                        </Row>
                        <Row container>
                            <BoxSearch>
                                <Form>
                                    <Row container>
                                        <Row item xs={12} md={2} column alignStart>
                                            <Label>EMPLACEMENT</Label>
                                            <LoactionIcon />
                                            <SelectInput onChange={handleChange} name="emplacement">
                                                {wilaya.map((el) => {
                                                    return <option key={el.id}> {el.nom}</option>;
                                                })}
                                            </SelectInput>
                                        </Row>
                                        <Row item xs={12} md={2} column alignStart>
                                            <DarIcon />
                                            <Label>TYPE</Label>
                                            <SelectInput onChange={handleChange} name="type">
                                                {
                                                    TypeAppartement.map(el => {
                                                        return <option key={el}>{el}</option>
                                                    })
                                                }
                                            </SelectInput>
                                        </Row>
                                        <Row item xs={12} md={2} column alignStart>
                                            <PriceIcon />
                                            <Label>PRIX</Label>
                                            <SelectInput onChange={handleChange} name="prix">
                                                {
                                                    !color ?
                                                        <>
                                                            <option> Moin de 1.000.000 Da</option>
                                                            <option> Moin de 2.000.000 Da</option>
                                                            <option> Moin de 3.000.000 Da</option>
                                                            <option> Moin de 4.000.000 Da</option>
                                                            <option> Moin de 5.000.000 Da</option>
                                                            <option> Plus de 5.000.000 Da</option>
                                                        </>
                                                        : <>
                                                            <option> Moin de 100.000 Da</option>
                                                            <option> Moin de 200.000 Da</option>
                                                            <option> Moin de 300.000 Da</option>
                                                            <option> Moin de 400.000 Da</option>
                                                            <option> Moin de 500.000 Da</option>
                                                            <option> Plus de 500.000 Da</option>
                                                        </>
                                                }

                                            </SelectInput>
                                        </Row>
                                        <Row item xs={12} md={2} column alignStart>
                                            <CalendarIcon />
                                            <Label>LOCATION PAR</Label>
                                            <SelectInput
                                                onChange={handleChange}
                                                name="typelocation"
                                                disabled={!color}
                                            >
                                                <option> Jours</option>
                                                <option> Semaine</option>
                                                <option> Mois</option>
                                                <option> Année</option>
                                            </SelectInput>
                                        </Row>
                                        <Row item xs={12} md={3} column alignStart>
                                            <CalendarIcon />
                                            <Label>AMEUBLEMENT</Label>
                                            <SelectInput onChange={handleChange} name="ameublement">
                                                <option>Semi meublé</option>
                                                <option>Entiérement meublé</option>
                                                <option>Non meublé</option>
                                            </SelectInput>
                                        </Row>
                                        <Row item xs={12} sm={12} md={1}>
                                            <SearchBtn>
                                                <SendingIcon />
                                            </SearchBtn>
                                        </Row>
                                    </Row>
                                </Form>
                            </BoxSearch>
                        </Row>
                    </Wrapper>
                </Overlay>
                <Shape>
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </Shape>
            </HeroSection>
        </>
    );
};

export default Hero;
