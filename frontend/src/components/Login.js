// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Login = () => {
    return (
        <StyledLockinWrapper>
            <h2>LOGIN</h2>
            <h3>Prima - du hast schon einen Account!</h3>
            <p>E-Mail</p>
            <p>Passwort</p>
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