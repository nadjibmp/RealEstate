import { Formik, Form } from 'formik'
import React from 'react'
import {
    ContactBtn,
    ContactWrapper,
    Header,
    InputField,
    SendIcon
} from './Contact.styled';

import { initialValues, validationSchema } from './Contact.Args';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
    //Get the ID of the listing from the url...
    const params = useParams();


    const SendFirstMessage = (message) => {
        const listingID = params.id;
        axios
            .post("http://localhost:3006/api/AddFirstMessage", {
                withCredentials: true,
                message: message,
                time: new Date.now(),
                receiverID:listingID
            })
            .then(response => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const onSubmit = (values) => {
        // SendFirstMessage();
        console.log(values);
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <ContactWrapper>
                    <Header>
                        Contactez-nous
                    </Header>
                    <InputField
                        type="text"
                        name="message"
                        placeholder="Bonjour, Je suis intéressé par votre bien !"
                    />
                    <ContactBtn type='submit'> <SendIcon />Contactez-nous</ContactBtn>
                </ContactWrapper>
            </Form>

        </Formik>
    )
}

export default Contact
