export const initialValues = {
    categorie: "",
    typebien: "",
    superficie: "",
    etage: "",
    nombrepiece: "",
    papier: "",
    jardin: "",
    piscine: "",
    asceensseur: "",
    terasse: "",
    description: "",
    prix: "",
    conditionpaimenet: "",
    wilaya:"",
    adresse:"",
    
};

export const categorieList = [
    { key: 'Choisir une option', value: '' },
    { key: 'Vente', value: "Vente" },
    { key: 'Location', value: "Location" },
    { key: 'Location Vacance', value: "LocationVacance" },
    { key: 'Echange', value: "Echange" },
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
    { key: 'Promotion Immobiliére', value: "Promotion" },
    { key: 'Acte notarié', value: "Acte" },
    { key: 'Acte dans l\'indivision', value: "ActeIndivision" },
    { key: 'Papier Timbré', value: "PapierTimbre" },
    { key: 'Décision', value: "Decision" },
    { key: 'Livret foncier', value: "Livret" },
]

export const PaymentCondition = [
    { key: 'Choisir une option', value: '' },
    { key: 'Promesse de vente possible', value: "promesse" },
    { key: 'Paiment par tranche possible', value: "tranche" },
    { key: 'Crédit bancaire possible', value: "crédit" },
]