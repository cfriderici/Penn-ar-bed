// My components 
import Header from "./Header";


// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

     


// ------ COMPONENT ------  //
const Profile = () => {
    return (
        <StyledProfileWrapper>
            <Header full />

            <h1>Mein Profil</h1>
            <div>Bild</div>
            <div>Vorname</div>
            <div>Name</div>
            <div>E-Mail-Adresse</div>
            <div>...</div>
            <StyledLink to="/"><button>Logout</button></StyledLink>
            
        </StyledProfileWrapper>
    )
}

export default Profile;



// ------ STYLED COMPONENTS ------  //
const StyledProfileWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
`

const StyledLink  = styled(Link)`
    background-color: rgba(250, 0, 250, 0.2);
    width: 50px;
    height: 50px;
    font-size: smaller;
    text-transform: uppercase;
`