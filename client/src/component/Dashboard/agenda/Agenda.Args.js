import * as yup from "yup";

export const initialValues = {
    title:""
};

export const validationSchema = yup.object({
    title: yup
        .string()
        .required("Entrez une petite déscription de l'événement ?"),
});