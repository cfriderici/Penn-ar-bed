// My Components 
import Header from "./Header";
import Input from "./sub/Input";


 // My Styled Components
import StyledLink from "./styled/StyledLink";
import StyledButton from "./styled/StyledButton";
import StyledH1, { StyledH2, StyledH3} from "./styled/StyledHeadlines";
import StyledInput, { StyledInputWrapper, StyledTextarea } from "./styled/StyledInput";
import StyledWrapper from "./styled/StyledWrapper";
import StyledForm from "./styled/StyledForm";


// External Components 
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import {Fragment} from "react";
import { useRef } from "react";
import { useSocialAppContext } from "../providers/SocialAppContext";





// ------ SUB COMPONENTS ------  //
const RegisterHeader = ()  => {
    return  (
        <StyledWrapper>
            <StyledH1>Registrieren</StyledH1>
            <StyledH2>Hallo! <br /> du bist wohl neu hier.</StyledH2>    
        </StyledWrapper>
    )
}   

const RegisterContent = ()  => {

    const { registerUser } = useSocialAppContext();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Registrieren wurde gedrückt")

        const data = new FormData(event.currentTarget);
        console.log("Register data 48: ", data);

        const registerData = {
            id: uuidv4(),
            email: data.get('email'),
            name: data.get('name'),
            password: data.get('password'),
            registerDate: new Date(),
        }
        console.log("Register registerData 57: ", registerData);

        registerUser(registerData);

        navigate("/login");

    }

    return  (
        <StyledWrapper>  
            <StyledForm onSubmit={handleSubmit}>
            {/* <StyledForm onSubmit={handleSubmit}> */}
                <StyledInputWrapper>
                    <StyledInput  placeholder="Name" id="name"  name="name" label="Name" /> 
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="E-Mail" id="email"  name="email" label="E-Mail" /> 
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Passwort" id="password" name="password" label="Passwort" type="password"  /> 
                </StyledInputWrapper>

                <StyledButton type="submit">
                    Registrieren
                </StyledButton>

                {/* {showErrorMessage && 
                    <div className="loginError">
                        Ups - wohl leicht seekrank ...<br />
                        Bitte versuche es noch einmal.
                    </div>
                }                 */}
            </StyledForm>  
        </StyledWrapper>
    )
}

const RegisterActions = ()  => {
    return  (
        <StyledWrapper>                
            <StyledLink to="/login">Du hast bereits einen Account?</StyledLink>  
        </StyledWrapper>
    )
}




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
                    password: AddPasswortRef.current.value,
                    numberOfPosts: "",
                    numberOfLikes: "1",
                    numberOfFriends: "2",
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
    align-items: center;
    width: 100%;
`
