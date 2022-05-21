import * as yup from "yup";

export const initialValues = {
    categorie: "",
    typeBien: "",
    superficieBien: "",
    superficieTerrain: "",
    etages: "",
    nombrePiece: "",
    papier: "",
    anneeConstrucion:"",
    description: "",
    prix: "",
    wilaya: "",
    commune: "",
    adresse: "",
    suppliments:[],
    conditionsPaiment:[],
};

export const validationSchema = yup.object({
    categorie: yup
        .string()
        .required("Choisir la categorie du transaction ?"),
    typeBien: yup
        .string()
        .required("Choisir le type du bien ?"),
    superficieBien: yup
        .string()
        .matches(/(?=.*?[0-9])/, "Entrer des chiffres seulement !")
        .required("Entrez la superficie de votre bien"),
    nombrePiece: yup
        .string()
        .matches(/(?=.*?[0-9])/, "Entrer des chiffres seulement !")
        .required("Veuillez mentionner le nombre des piéces !"),
    prix: yup
        .string()
        .matches(/(?=.*?[0-9])/, "Entrer des chiffres seulement !")
        .required("Veuillez ajouter un prix !"),
    wilaya: yup
        .string()
        .required("Entrez votre vilaya !"),
    commune: yup
        .string()
        .required("Entrez votre commune !"),
});

export const categorieList = [
    { key: 'Choisir une option', value: '' },
    { key: 'À  vendre', value: "vendre" },
    { key: 'À  louer', value: "louer" },
    { key: 'À  louer pour les vacances', value: "louer pour les vacances" },
    { key: 'À  louer par ans', value: "louer par ans" },
    { key: 'À échanger', value: "échanger" },
]

export const TypeBien = [
    { key: 'Choisir une option', value: '' },
    { key: 'Appartement', value: "Appartement" },
    { key: 'Terrain', value: "Terrain" },
    { key: 'Villa', value: "Villa" },
    { key: 'Local', value: "Local" },
    { key: 'Niveau De Villa', value: "NiveauDeVilla" },
    { key: 'Terrain Agricole', value: "Terrainagricole" },
    { key: 'Immeuble', value: "Immeuble" },
    { key: 'Duplex', value: "Duplex" },
    { key: 'Studio', value: "Studio" },
    { key: 'Hangar', value: "Hangar" },
    { key: 'Bungalow', value: "Bungalow" },
    { key: 'Usine', value: "Usine" },
    { key: 'Autre', value: "Autre" },
]

export const Papiers = [
    { key: 'Choisir une option', value: '' },
    { key: 'Promotion Immobiliére', value: "Promotion Immobiliére" },
    { key: 'Acte notarié', value: "Acte notarié" },
    { key: 'Acte dans l\'indivision', value: "Acte Indivision" },
    { key: 'Papier Timbré', value: "Papier Timbre" },
    { key: 'Décision', value: "Décision" },
    { key: 'Livret foncier', value: "Livret foncier" },
]

export const PaymentCondition = [
    { key: 'Choisir une option', value: '' },
    { key: 'Promesse de vente possible', value: "Promesse de vente" },
    { key: 'Paiment par tranche possible', value: "Paimenet par tranche" },
    { key: 'Crédit bancaire possible', value: "Crédit bancaire" },
]