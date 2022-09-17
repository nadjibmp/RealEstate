import { useState, createContext, useContext } from "react";
import axios from "axios";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    axios.defaults.withCredentials = true;
    let email = null
    let userLocal = ""
    let prenomLocal = ""
    let nomLocal = ""
    if (localStorage.getItem('userID')) {
        const localStorageValue = JSON.parse(localStorage.getItem('userID'))
        email = localStorageValue.email
        userLocal = localStorageValue.user
        nomLocal = localStorageValue.nom
        prenomLocal = localStorageValue.prenom       
    }
    const [user, setUser] = useState(email)
    const [nom, setNom] = useState(nomLocal)
    const [prenom, setPrenom] = useState(prenomLocal)

    const login = (user, nom, prenom) => {
        setUser(user)
        setNom(nom)
        setPrenom(prenom)
    }
    const logout = () => {
        axios.get('http://localhost:3006/api/logout')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
        localStorage.clear();
        setUser(null)
    }

    return <AuthContext.Provider value={{ login, logout, user, nom, prenom }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}