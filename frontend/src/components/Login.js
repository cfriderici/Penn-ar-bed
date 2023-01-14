// My Components 
import Header from "./Header";
import Input from "./sub/Input";
import StyledLink from "./styled/StyledLink";
import StyledButton from "./styled/StyledButton";
import StyledInput, { StyledInputWrapper } from "./styled/StyledInput";
import StyledH1, { StyledH2, StyledH3} from "./styled/StyledHeadlines";


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
        <StyledHeaderWrapper>
            <StyledH1>Login</StyledH1>
            <StyledH2>Prima!<br />Du hast schon einen Account.</StyledH2>
        </StyledHeaderWrapper>
    )
}   
const LoginContent = ()  => {
    return  (
        <Fragment>   

            {/* <div>E-Mail</div>
            <Input />

            <div>Passwort</div>
            <Input />  */}

        </Fragment>
    )
}
const LoginActions = ()  => {

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
        <StyledActionWrapper>    
            <StyledForm onSubmit={handleSubmit}>
                <StyledInputWrapper>
                    <StyledInput  placeholder="E-Mail" id="email" label="E-Mail" name="email"  /> 
                </StyledInputWrapper>

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

            <StyledLink to="/password">Logindaten verggessen?</StyledLink>
            <StyledLink to="/register">Neu hier? </StyledLink>  

        </StyledActionWrapper>
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
    background-color: rgba(250, 250, 0, 0.2);
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
`

const StyledHeaderWrapper = styled.div`
    background-color: rgba(250, 200, 0, 0.6);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`


const StyledActionWrapper = styled.div`
    /* background-color: rgba(250, 200, 0, 0.6); */
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const StyledForm = styled.form`
    /* background-color: rgba(250, 100, 0, 0.6); */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;

    .loginError {
        background-color: rgba(0, 250, 0, 0.2);
        margin: 10px;
        text-align: center;
    }
`


