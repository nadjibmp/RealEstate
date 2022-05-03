import * as yup from "yup";
export const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    cemail: "",
    tel: "",
    tell: "",
    naissance: "",
    sexe: "",
    motdepass1: "",
    motdepass2: "",
    status: "",
    nationalite: "",
};

export const validationSchema = yup.object({
    nom: yup
        .string()
        .required("Quel est votre nom ?"),
    prenom: yup
        .string()
        .required("quel est votre prénom ?"),
    email: yup
        .string()
        .email("Entrez un e-mail valide ! ")
        .required("E-mail est obligatoire !"),
    cemail: yup
        .string()
        .email("Entrez un email valide ! ")
        .oneOf([yup.ref("email"), null], "E-mail non identique")
        .required("Quel est votre e-mail ? "),
    tel: yup
        .string()
        .matches(/^(00213|\+213|0)(5|6|7)[0-9]{8}$/, "Format du numéro invalide ")
        .required("Quel est votre numero ?"),
    tell: yup
        .string()
        .matches(/^(00213|\+213|0)(5|6|7)[0-9]{8}$/, "Format du numéro invalide ")
        .required("Quel est votre deuxiéme numero ?"),
    naissance: yup
        .string()
        .required("Date de naissance est obligatoire "),
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
    sexe: yup
        .string()
        .required("Veuillez selectionner votre sexe"),
    nationalite: yup
        .string()
        .required('Choisi votre Nationalité'),
    status: yup
        .string()
        .required('Choisi votre status'),
});

// setting the dropdown options
export  const dropdownOptions = [
    { key: 'Choisir une option', value: '' },
    { key: 'Agence Immobiliere', value: "Agence" },
    { key: 'Individu', value: "individu" },
]   

export const sexeList = [
    { key: 'Choisir une option', value: '' },
    { key: 'Homme', value: "homme" },
    { key: "Femme", value: "femme" }
]