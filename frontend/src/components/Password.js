// My Components 
import Header from "./Header";
import Input from "./Input";



// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Fragment} from "react";

   

// ------ INSIDE COMPONENTS ------  //
const PwHeader = ()  => {
    return  (
        <h1>Neues Passwort</h1>
    )
}
const PwContent = ()  => {
    return  (
        <Fragment>
            
            <div>Neuse Passwort eingeben</div>
            <Input /> 

            <div>Neuse Passwort wiederholen</div>
            <Input /> 

        </Fragment>
    )
}
const PwActions = ()  => {
    return  (
        <StyledLink to="/"><button>absenden</button></StyledLink>
    )
}


// ------ COMPONENT ------  //
const Password = () => {
    return (
        <StyledPasswordWrapper>

            <Header  />
            <PwHeader />
            <PwContent />
            <PwActions />
            
        </StyledPasswordWrapper>
    )
}

export default Password;



// ------ STYLED COMPONENTS ------  //
const StyledPasswordWrapper = styled.div`
    background-color: rgba(0, 0, 250, 0.2);
`

const StyledLink  = styled(Link)`
    background-color: rgba(250, 0, 250, 0.2);
    width: 50px;
    height: 50px;
    font-size: smaller;
    text-transform: uppercase;
`