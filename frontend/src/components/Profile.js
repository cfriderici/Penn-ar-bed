// My components 
import Header from "./Header";


// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Fragment} from "react";




// ------ INSIDE COMPONENTS ------  //
const ProfileHeader = ()  => {
    return  (
        <h1>Mein Profil</h1>
    )
}

const ProfileContent = ()  => {
    return  (
        <Fragment>

            <StyledProfileImg>
                <img src={ require('../img/IMG_3115.jpg') } alt=""/>
            </StyledProfileImg>
                
            <div>Vorname</div>
            <div>Name</div>
            <div>E-Mail-Adresse</div>
            <div>...</div>

        </Fragment>
    )
}

const ProfileActions = ()  => {
    return  (
        <StyledLink to="/"><button>Logout</button></StyledLink>
    )
}



// ------ COMPONENT ------  //
const Profile = () => {
    return (
        <StyledProfileWrapper>

            <Header full />
            <ProfileHeader />
            <ProfileContent />
            <ProfileActions />

        </StyledProfileWrapper>
    )
}

export default Profile;



// ------ STYLED COMPONENTS ------  //
const StyledProfileWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
`
const StyledProfileImg  = styled.div`
    background-color: rgba(250, 0, 250, 0.2);
    display: flex;
    justify-content: center;

    > img {
        width: 50%;
        height: auto;
        border-radius: 50%;
    }

`

const StyledLink  = styled(Link)`
    background-color: rgba(250, 0, 250, 0.2);
    width: 50px;
    height: 50px;
    font-size: smaller;
    text-transform: uppercase;
`