// My Components 
import Input from "./Input";


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
            <StyledLink to="/password">Passwort verggessen?</StyledLink>
            <StyledLink to="/dashboard"><button>anmelden</button></StyledLink>  
        </Fragment>
    )
}


// ------ COMPONENT ------  //
const Login = () => {
    return (
        <StyledLockinWrapper>
            
            <LoginHeader />
            <LoginContent />
            <LoginActions />
 
        </StyledLockinWrapper>
    )
}

export default Login;



// ------ STYLED COMPONENTS ------  //
const StyledLockinWrapper = styled.div`
    background-color: rgba(250, 250, 0, 0.2);
    display: flex;
    flex-direction: column;

    > h2, h3 {
        text-align: center;
    }

    > div {
        background-color: rgba(250, 200, 0, 0.6);
    }
`

const StyledLink  = styled(Link)`
    background-color: rgba(250, 200, 0, 0.6);
    /* width: 50px;
    height: 50px; */
    font-size: smaller;
    text-transform: uppercase;
`