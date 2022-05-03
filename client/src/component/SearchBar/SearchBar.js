
import { Formik, Form } from 'formik';
import React from 'react'
import Select from '../signup/component/Select';
import {
    SearchWrapper,
    Row,
    SearchDiv,
    SearchIcon,
    SearchItem,
    SearchBtn,
    DropDown,
    DropdownBtn,
    DropDownContent,
    
} from './SearchBar.styled';

const SearchBar = ({resultSearch}) => {
    const initialValues = {
        typerecherche:'',
        listprix:'',
        chambre:'',
        toilette:'',
        typebien:'',
        recherche:'',
    };

    const onSubmit = (values) => {
        console.log(values);
    };
    const TypeBien  = [
        {key: 'Type de bien ', value: "tout"},
        {key: 'Maison', value:"maison"},
        {key: 'Appartement', value:"appartement"},
        {key: 'Maison multifamiliale', value:"multifamiliale"},
        {key: 'Lots/Terrain', value:"lot"},
        {key: 'Garage/Local', value:"local"},
    ]
    const NombreChambre = [
        {key: '1 chambre', value: "1"},
        {key: '2 chambres', value:"2"},
        {key: '3 chambres', value:"3"},
        {key: '4 chambres', value:"4"},
        {key: 'Plus de 5 chambres', value:"5"},
    ];
    const NombreToilette = [
        {key: '1 Salle de bain', value: "1"},
        {key: '2 Salle de bain', value:"2"},
        {key: '3 Salle de bain', value:"3"},
    ];
    const PriceList = [
        {key: 'Jusqu\'à 5 000 000 Dzd', value: "5000000"},
        {key: 'jusqu\'à 6 000 000 Dzd', value:"6000000"},
        {key: 'jusqu\'à 7 000 000 Dzd', value:"7000000"},
        {key: 'jusqu\'à 8 000 000 Dzd', value:"8000000"},
        {key: 'jusqu\'à 9 000 000 Dzd', value:"9000000"},
        {key: 'jusqu\'à 10 000 000 Dzd', value:"10000000"},
        {key: 'jusqu\'à 15 000 000 Dzd', value:"15000000"},
        {key: 'jusqu\'à 20 000 000 Dzd', value:"20000000"},
        {key: 'jusqu\'à 25 000 000 Dzd', value:"25000000"},
        {key: 'jusqu\'à 30 000 000 Dzd et plus ', value:"30000000"},
    ];
    const RechercheType = [
        {key: 'Achat', value: "Achat"},
        {key: 'Location', value:"Location"},
    ]
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <SearchWrapper>
                    <Form>
                        <Row container row spacing={1}>
                            <Row item xs={12}  md={6} lg={4} xl={3}>
                                <SearchDiv>
                                    <SearchItem type="text" name="recherche" placeholder='Nom de la ville, Commune, Quartier ou Code Zip ? '/>
                                    <SearchIcon/>
                                </SearchDiv>
                            </Row>
                            <Row item xs={6} md={2} lg={2} xl={1}>
                                <Select
                                    name="typerecherche"
                                    options={RechercheType}
                                >
                                </Select>
                            </Row>
                            <Row item xs={6} md={4} lg={2} xl={2}>
                                <Select
                                    name="listprix"
                                    options={PriceList}
                                >
                                </Select>
                            </Row>
                            <Row item xs={6} md={2} lg={2} xl={1}>
                                <Select
                                    name="chambre"
                                    options={NombreChambre}
                                ></Select>
                            </Row>
                            <Row item xs={6} md={2} lg={2} xl={1}>
                                <Select
                                    name="toilette"
                                    options={NombreToilette}
                                ></Select>
                            </Row>
                            <Row item xs={12} md={2} lg={4} xl={1}>
                                <Select
                                    name='typebien'
                                    options={TypeBien}
                                ></Select>
                            </Row>
                            <Row item xs={12} md={4} xl={2}>
                                <DropDown>
                                    <DropdownBtn>Plus de filtres</DropdownBtn>
                                    <DropDownContent className='dropdown-content'>
                                        <p>HEllo</p>
                                        <p>HEllo</p>
                                        <p>HEllo</p>
                                        <p>HEllo</p>
                                        <p>HEllo</p>
                                    </DropDownContent>
                                </DropDown>
                            </Row>
                            <Row item xs={12} md={2} lg={4} xl={1}>
                                <SearchBtn>Rechercher</SearchBtn>
                            </Row>
                        </Row>
                    </Form>
            </SearchWrapper>
        </Formik>
    )
}

export default SearchBar
