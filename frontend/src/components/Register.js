// My components 
import Input from "./Input";


// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Fragment} from "react";



// ------ SUB COMPONENTS ------  //
const RegisterHeader = ()  => {
    return  (
        <Fragment>
            <h2>REGISTER</h2>
            <h3>Hallo  - du bist wohl neu hier!</h3>    
        </Fragment>
    )
}   
const RegisterContent = ()  => {
    return  (
        <Fragment>                
            <div>Vorname</div>
            <Input />

            <div>Nachname</div>
            <Input />

            <div>E-Mail</div>
            <Input />

            <div>Passwort</div>
            <Input />
        </Fragment>
    )
}
const RegisterActions = ()  => {
    return  (
        <StyledLink to="/profile"><button>registrieren</button></StyledLink>
    )
}


// ------ COMPONENT ------  //
const Register = () => {
    return (
        <StyledRegisterWrapper>
            
            <RegisterHeader />
            <RegisterContent />
            <RegisterActions />

        </StyledRegisterWrapper>
    )
}

export default Register;



// ------ STYLED COMPONENTS ------  //
const StyledRegisterWrapper = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
    display: flex;
    flex-direction: column;

    > h2, h3 {
        text-align: center;
    }

    > div {
        background-color: rgba(0, 250, 0, 1);
    }
`

const StyledLink  = styled(Link)`
    background-color: rgba(250, 0, 250, 0.2);
    width: 50px;
    height: 50px;
    font-size: smaller;
    text-transform: uppercase;
`