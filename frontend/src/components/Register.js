// My components 
import Header from "./Header";
import Input from "./sub/Input";
import StyledLink from "./styled/StyledLink";
import StyledButton from "./styled/StyledButton";
import { StyledH2, StyledH3} from "./styled/StyledHeadlines";
import StyledInput, { StyledInputWrapper, StyledTextarea } from "./styled/StyledInput";



// External Components 
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import {Fragment} from "react";
import { useRef } from "react";




// ------ SUB COMPONENTS ------  //
// const RegisterHeader = ()  => {
//     return  (
//         <StyledRegisterHeader>
//             <StyledH2>Registrieren</StyledH2>
//             <StyledH3>Hallo  - du bist wohl neu hier!</StyledH3>    
//         </StyledRegisterHeader>
//     )
// }   

// const RegisterContent = ()  => {
//     return  (
//         <StyledRegisterContent>  
//             <StyledInputWrapper>
//                 <StyledInput placeholder="Vorname" /*ref={todoNameRef} */ ></StyledInput>
//             </StyledInputWrapper>
//             <StyledInputWrapper>
//                 <StyledInput placeholder="E-Mail" /*ref={todoNameRef} */ ></StyledInput>
//             </StyledInputWrapper>
//             <StyledInputWrapper>
//                 <StyledInput placeholder="Passwort" /*ref={todoNameRef} */ ></StyledInput>
//             </StyledInputWrapper>
//         </StyledRegisterContent>
//     )
// }

// const RegisterActions = ()  => {
//     return  (
//         <StyledRegisterActions>                
//             <StyledButton><Link to="/profile">registrieren</Link></StyledButton>
//             <StyledLink to="/login">Du hast bereits einen Account? Anmelden</StyledLink>  
//         </StyledRegisterActions>
//     )
// }




// ------ COMPONENT ------  //
const Register = ({ users, setUsers }) => {

    //useRefs definieren --> wie geht das für das ganze array ?!?
    const AddUserNameRef = useRef();
    const AddUserMailRef = useRef();
    const AddPasswortRef = useRef();

    //Funktion: User hinzufügen 
    const newUser = () => {
        if (AddUserMailRef.current.value && AddPasswortRef.current.value !== "") {
            setUsers([...users,
                {
                    id: uuidv4(),
                    name: AddUserNameRef.current.value,
                    mail: AddUserMailRef.current.value,
                    passwort: AddPasswortRef.current.value,
                }
            ])
        }
    }
    const handleAddClick = () => {
        newUser();
    }


    return (
        <Fragment>
            <Header />
            <StyledRegisterWrapper>

                {/* <RegisterHeader /> */}
                <StyledRegisterHeader>
                    <StyledH2>Registrieren</StyledH2>
                    <StyledH3>Hallo  - du bist wohl neu hier!</StyledH3>    
                </StyledRegisterHeader>

                {/* <RegisterContent /> */}
                <StyledRegisterContent>  
                    <StyledInputWrapper>
                        <StyledInput placeholder="Vorname" ref={AddUserNameRef} ></StyledInput>
                    </StyledInputWrapper>
                    <StyledInputWrapper>
                        <StyledInput placeholder="E-Mail" ref={AddUserMailRef} ></StyledInput>
                    </StyledInputWrapper>
                    <StyledInputWrapper>
                        <StyledInput placeholder="Passwort" ref={AddPasswortRef} ></StyledInput>
                    </StyledInputWrapper>
                </StyledRegisterContent>

                {/* <RegisterActions /> */}
                <StyledRegisterActions>                
                    <StyledButton onClick={handleAddClick}> <Link to="/profile">registrieren</Link> </StyledButton>
                    <StyledLink to="/login">Du hast bereits einen Account? Anmelden</StyledLink>  
                </StyledRegisterActions>

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
    align-items: center;
    width: 100%;
`


const StyledRegisterHeader = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledRegisterContent = styled.div`
    background-color: rgba(0, 0, 250, 0.2);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledRegisterActions = styled.div`
    background-color: rgba(0, 250, 250, 0.2);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`




