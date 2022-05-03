import React from 'react'
import { Formik, Form } from "formik";
import { 
    ContactBtn, 
    InputField,
    FormWrapper,
    CommentIcon } from './Form.styled';
const initialValues = {
    commentaire: "",
};

const onSubmit = (values) => {
    console.log(values);
};


const FormComp = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <FormWrapper>
                <Form>
                    <InputField
                        name="commentaire"
                        placeholder='Donnez votre avis'
                        as="textarea"
                    />
                    <ContactBtn><CommentIcon/> Donnez votre avis</ContactBtn>
                </Form>
            </FormWrapper>
        </Formik>
    )
}

export default FormComp
