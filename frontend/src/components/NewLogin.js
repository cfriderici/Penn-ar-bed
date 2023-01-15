// My Components 
import Header from "./Header";


// My Styled Components
import StyledLink from "./styled/StyledLink";
import StyledButton from "./styled/StyledButton";
import StyledInput, { StyledInputWrapper } from "./styled/StyledInput";
import StyledH1, { StyledH2 } from "./styled/StyledHeadlines";
import StyledWrapper from "./styled/StyledWrapper";
import StyledForm from "./styled/StyledForm";


// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import {Fragment} from "react";

import axios from 'axios';
import { useSocialAppContext } from "../providers/SocialAppContext";
import { useState } from 'react';
import jwt_decode from "jwt-decode";



// ------ INSIDE COMPONENTS ------  //

const LoginHeader = ()  => {
    return  (
        <StyledWrapper>
            <StyledH1>Logindaten vergessen</StyledH1>
            <StyledH2>Kein Ding - <br /> kann ja mal passieren.</StyledH2>
        </StyledWrapper>
    )
}   

const LoginContent = ()  => {
    const {user, setUser, token, setToken, userData, setUserData, logoutUser } = useSocialAppContext();
    
    const LOCAL_STORAGE_KEY = "token";

    // Error falls falsche Logindaten
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    
    const navigate = useNavigate();

    // FUNKTIONEN
    // Mittels FormData wird überprüft was im Frontend eingegeben wurde
    // Diese Daten werden in credentials zwischengespeichert und an data übergeben (?)
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Anmelden wurde gedrückt")
        
        const data = new FormData(event.currentTarget);
        console.log("login data: ", data);

        const credentials = {
            email: data.get('email'),
            password: data.get('password'),
        }
        console.log("Login credentials: ", credentials);

        var config = {
            method: 'post',
            url: '/api/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data : credentials
        };
        console.log("Login config: ", config);

        // data wird an axios-Abfrage geschickt mit Daten aus DB überprüft
        // wenn korrekt erhält man den token (string aus logindaten: email + Password)
        // der token wird in den Lokal Storage geschrieben 
        // token wird in State geschrieben (setToken) 
        // user wird in State geschrieben (setUser)
        // Error-Meldung wird geleert (weil hier die Login-Daten ja jetzt stimmen)
        // dann wird zur Hauptroute navigiert --> weil user jetzt angemeldet, wird Dashboard statt Login angezeigt
        try {
            const response = await axios(config);
            const data = response.data;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      
            var decodedJwt = jwt_decode(data.access);
            console.log("Login UserData: ", decodedJwt);
            
            setToken(data.access);       
            setUser(credentials.email);      
            setUserData(decodedJwt);
      
            console.log("mein Token: ", data.access);
            console.log("mein User: ", credentials.email);
            console.log("mein UserData: ", decodedJwt);

            setShowErrorMessage(false);
      
            navigate("/dashboard");
          } catch (error) {
            setShowErrorMessage(true);
        }
    };

    return  (
        <StyledWrapper>    
            <StyledForm onSubmit={handleSubmit}>
                <StyledInputWrapper>
                    <StyledInput  placeholder="E-Mail" id="email" label="E-Mail" name="email"  /> 
                </StyledInputWrapper>

                <label>Neues Passwort schicken</label>
                <StyledInputWrapper>
                    <StyledInput placeholder="Passwort" name="password" label="Passwort" type="password" id="password" /> 
                </StyledInputWrapper>

                <StyledButton type="submit">
                    Login
                </StyledButton>

                {showErrorMessage && 
                    <div className="loginError">
                        Ups - wohl leicht seekrank ...<br />
                        Bitte versuche es noch einmal.
                    </div>
                }                
            </StyledForm>  
        </StyledWrapper>
    )
}

const LoginActions = ()  => {
    return (
        <StyledWrapper>
            <StyledLink to="/login">Du hast bereits einen Account?</StyledLink>  
            <StyledLink to="/register">Neu hier? </StyledLink>  
        </StyledWrapper>
    )
}




// ------ COMPONENT ------  //
const Login = () => {
  
    const {user, setUser, token, setToken, userData, setUserData, logoutUser } = useSocialAppContext();

    return (
        <Fragment>

           <Header />

            <StyledLockinWrapper>
                <LoginHeader />
                <LoginContent />
                <LoginActions />
            </StyledLockinWrapper>
            
        </Fragment>
    )
}

export default Login;



// ------ STYLED COMPONENTS ------  //
const StyledLockinWrapper = styled.div`
    background-color: rgba(250, 0, 250, 0.2);
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
`


