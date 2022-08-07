import * as yup from "yup";

export const initialValues = {
    email: "",
};

export const validationSchema = yup.object({
    email: yup
        .string()
        .email("Entrez un e-mail valide ! ")
        .required("Entrez votre e-mail !")
});