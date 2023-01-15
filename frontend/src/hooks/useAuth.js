// // External Components 
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';



// LokalStorage, useStates, Token laden 

const useAuth = () => {

    // LokalStorage als Token
    const LOCAL_STORAGE_KEY = "token";

    // useState-Hooks für den angemeldeten user und alle User und dern Token
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const [userData, setUserData] = useState();

    // Erstes Rendern der App ruft den Custom Hook aus
    useEffect(() => {
        const ls = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        console.log("mein ls", ls);

        try {
            var decodedJwt = jwt_decode(ls.access);
            console.log("mein User-useState: ", decodedJwt.email);
            console.log("mein UserToken-useState: ", ls);
            console.log("mein UserData-useState: ", decodedJwt);

            setUser(decodedJwt.email);
            setToken(ls.access);
            setUserData(decodedJwt);
        } catch (error) {
            console.log("mein error", error);
        }
    }, []);




    // FUNKTIONEN


    // Logout (CustomHook-Funktion)
    // Alle States/Token/LokalStorage werden geleert
    const logoutUser = () => {
        setUser(undefined);
        setToken(undefined);
        setUserData(undefined)
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    return [LOCAL_STORAGE_KEY, user, setUser, token, setToken, userData, setUserData, logoutUser];
}

export default useAuth;