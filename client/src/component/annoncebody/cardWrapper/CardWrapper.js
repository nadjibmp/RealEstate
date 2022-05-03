import React from 'react'
import { Formik, Form } from "formik";
import {
    Wrapper,
    Row,
    SearchTitle,
    SearchResult,
    SortWrapper,
    SelectInput
} from './CardWrapper.styled'
import CardComponent from '../../global/card/CardComponent'
const CardWrapper = () => {
    
    const initialValues = {
        trie:'',
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const SortItem = [
        {key: 'Prix (de haut en bas)', value: "prixhaut"},
        {key: 'Prix (de bas en haut)', value:"prixbas"},
        {key: 'Le plus récent', value: "recent"},
        {key: 'Salles de bain ', value: "salledebain"},
        {key: 'Chambres', value: "chambre"},
        {key: 'Mètre carré', value: "metrecarre"},
    ]
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <Wrapper>
                <Row container spacing={1} paddingTop>
                        <Row item xs ={12} column alignStart>
                            <SearchTitle>
                                Annaba City NY Immobilier & Maisons à Vendre
                            </SearchTitle>
                            <div className="formWrapper">
                                <SearchResult>1856 Résultats</SearchResult>
                                <SortWrapper>
                                    <p>Trier par :</p>
                                    <Form>
                                        <SelectInput
                                        name="trie"
                                        options={SortItem}
                                        />
                                    </Form>
                                </SortWrapper>
                            </div>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent data="0"/>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent data="4"/>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent data="2"/>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent data="3"/>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent/>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent/>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent/>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent/>
                        </Row>
                        <Row item xs={12} md={6}>
                            <CardComponent/>
                        </Row>
                </Row>
            </Wrapper>
        </Formik>
    )
}

export default CardWrapper
