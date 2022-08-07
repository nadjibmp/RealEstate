import * as yup from "yup";


export const initialValues = {
    message:'Bonjour je suis intéréssé par votre bien'
};

export const validationSchema = yup.object({
    message: yup
        .string()
        .required("Ecrire Votre Message svp!"),
});