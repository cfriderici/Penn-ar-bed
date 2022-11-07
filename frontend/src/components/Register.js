// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Login = () => {
    return (
        <StyledRegisterWrapper>
            <h2>REGISTER</h2>
            <h3>Hallo  - du bist wohl neu hier!</h3>
            <p>Vorname</p>
            <p>Nachname</p>
            <p>E-Mail</p>
            <p>Passwort</p>
        </StyledRegisterWrapper>
    )
}

export default Login;



// ------ STYLED COMPONENTS ------  //
const StyledRegisterWrapper = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
    display: flex;
    flex-direction: column;

    > h2, h3 {
        text-align: center;
    }

    > p {
        background-color: rgba(0, 250, 0, 1);
    }
`