import * as yup from "yup";


export const initialValues = {
    email: '',
    motdepass: ''
};

export const validationSchema = yup.object({
    email: yup
        .string()
        .email("Entrez un e-mail valide ! ")
        .required("Entrez votre e-mail !"),
    motdepass: yup
        .string()
        .required("Entrez Votre mot de pass ?")
});