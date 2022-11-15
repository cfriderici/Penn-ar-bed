// My Components 
import Header from "./Header";
import Input from "./sub/Input";
import StyledLink from "./styled/StyledLink";
import StyledButton from "./styled/StyledButton";


// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Fragment} from "react";

  

// ------ INSIDE COMPONENTS ------  //
const LoginHeader = ()  => {
    return  (
        <Fragment>
            <h2>Login</h2>
            <h3>Prima - du hast schon einen Account!</h3>
        </Fragment>
    )
}   
const LoginContent = ()  => {
    return  (
        <Fragment>   

            <div>E-Mail</div>
            <Input />

            <div>Passwort</div>
            <Input /> 

        </Fragment>
    )
}
const LoginActions = ()  => {
    return  (
        <Fragment>              
            <StyledButton><Link to="/dashboard">anmelden</Link></StyledButton>  
            <StyledLink to="/password">Passwort verggessen?</StyledLink>

            <StyledLink to="/register">Neu hier? Registrieren</StyledLink>  
        </Fragment>
    )
}


// ------ COMPONENT ------  //
const Login = () => {
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

    > h2, h3 {
        /* text-align: center; */
    }

    > div {
        /* background-color: rgba(250, 200, 0, 0.6);
        width: 100% */
    }
`