// My components 
import Header from "./Header";
import Input from "./sub/Input";
import StyledLink from "./styled/StyledLink";
import StyledButton from "./styled/StyledButton";
import { StyledH2, StyledH3} from "./styled/StyledHeadlines";


// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Fragment} from "react";



// ------ SUB COMPONENTS ------  //
const RegisterHeader = ()  => {
    return  (
        <Fragment>
            <StyledH2>REGISTER</StyledH2>
            <StyledH3>Hallo  - du bist wohl neu hier!</StyledH3>    
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
        <Fragment>                
            <StyledButton><Link to="/profile">registrieren</Link></StyledButton>
            <StyledLink to="/login">Du hast bereits einen Account? Anmelden</StyledLink>  
            <p>Using styled-components, we can create our own React button component and style it with css inside the template tag. If you're not familiar with styled-components, check out our guide here. Styling a button is not much different than styling a div, except we're adding styles on top of the browser's already styled button, so the good news is that we don't need to add too many properties here to make it look nice. For example, the html button's text is already centered for us.</p>

        </Fragment>

    )
}


// ------ COMPONENT ------  //
const Register = () => {
    return (
        <Fragment>       

            <Header />

            <StyledRegisterWrapper>
                <RegisterHeader />
                <RegisterContent />
                <RegisterActions />
            </StyledRegisterWrapper>

        </Fragment>
    )
}

export default Register;



// ------ STYLED COMPONENTS ------  //
const StyledRegisterWrapper = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
    display: flex;
    flex-direction: column;

    > div {
        background-color: rgba(0, 250, 0, 0.4);
    }
`
