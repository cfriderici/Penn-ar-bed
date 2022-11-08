// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

     


// ------ COMPONENT ------  //
const Login = () => {
    return (
        <StyledLockinWrapper>
            
            <h2>LOGIN</h2>
            <h3>Prima - du hast schon einen Account!</h3>
            <p>E-Mail</p>
            <p>Passwort</p>
            <StyledLink to="/dashboard"><button>anmelden</button></StyledLink>

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

    > p {
        background-color: rgba(250, 250, 0, 1);
    }
`

const StyledLink  = styled(Link)`
    background-color: rgba(250, 0, 250, 0.2);
    width: 50px;
    height: 50px;
    font-size: smaller;
    text-transform: uppercase;
`