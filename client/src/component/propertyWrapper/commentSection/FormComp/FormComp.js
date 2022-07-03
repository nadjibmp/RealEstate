import React, { useRef } from 'react'
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import {
    ContactBtn,
    InputField,
    FormWrapper,
    CommentIcon
} from './Form.styled';
import { ErrorFieldWrapper } from '../../../signup/Signup.styled';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const FormComp = ({update, state}) => {
    const ref = useRef(null);
    const params = useParams();

    const onSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`http://localhost:3006/api/postComments/`,[ref.current.value, params.id])
        .then(result => {
            ref.current.value = "";
            update(!state);
        })
        .catch(error => {
            console.log(console.log());
        })
    };

    return (
            <FormWrapper>
                <form onSubmit={onSubmit}>
                    <InputField
                        name="commentaire"
                        placeholder='Donnez votre avis'
                        required
                        ref={ref}
                    />
                    <ContactBtn type="submit"><CommentIcon /> Donnez votre avis</ContactBtn>
                </form>
            </FormWrapper>
    )
}

export default FormComp
