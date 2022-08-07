import * as yup from "yup";

export const initialValues = {
    motdepass1: "",
    motdepass2: "",
};

export const validationSchema = yup.object({

    motdepass1: yup
        .string()
        .required("Quel est votre mot de pass ?")
        .min(8, "Doit contenir 8 charactere au moin !")
        .matches(/(?=.*?[A-Z])/, "Doit contenir une lettre majiscule !")
        .matches(/(?=.*?[0-9])/, "Doit contenir un chiffre !"),
    motdepass2: yup
        .string()
        .oneOf([yup.ref("motdepass1"), null], "Mot de pass non identique")
        .required("Quel est votre mot de pass ?"),
});