import * as yup from "yup";

export const validationSchema = yup.object({
    nom: yup
        .string()
        .required("Quel est votre nom ?"),
    prenom: yup
        .string()
        .required("Quel est votre prénom ?"),
    email: yup
        .string()
        .email("Entrez un e-mail valide ! ")
        .required("E-mail est obligatoire !"),
    tel: yup
        .string()
        .matches(/^(00213|\+213|0)(5|6|7)[0-9]{8}$/, "Format du numéro invalide ")
        .required("Quel est votre numero ?"),
    naissance: yup
        .string()
        .required("Date de naissance est obligatoire "),
    motdepass1: yup
        .string()
        .min(8, "Doit contenir 8 charactere au moin !")
        .matches(/(?=.*?[A-Z])/, "Doit contenir une lettre majiscule !")
        .matches(/(?=.*?[0-9])/, "Doit contenir un chiffre !"),
    motdepass2: yup
        .string()
        .oneOf([yup.ref("motdepass1"), null], "Mot de pass non identique"),
    sexe: yup
        .string()
        .required("Veuillez selectionner votre sexe"),
});
export const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    naissance: "",
    sexe: "",
    motdepass1: "",
    motdepass2: "",
};