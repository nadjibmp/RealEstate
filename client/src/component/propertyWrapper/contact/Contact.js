import { Formik } from 'formik';
import React from 'react'
import {
    ContactBtn,
    ContactWrapper,
    Header,
    InputField,
    SendIcon
} from './Contact.styled';
const initialValues = {
    email:'',
    message:'',
};

const onSubmit = (values) => {
    console.log(values);
};
const Contact = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <ContactWrapper>
                <Header>
                    Contactez-nous
                </Header>
                <InputField
                    name='email'
                    placeholder='Email'
                    type='email'
                />
                <InputField
                    as='textarea'
                    name="message"
                    placeholder=" Je suis intéressé par votre bien !"
                    rows='4'
                />
                <ContactBtn> <SendIcon/>Contactez-nous</ContactBtn>
            </ContactWrapper>
        </Formik>
    )
}

export default Contact
