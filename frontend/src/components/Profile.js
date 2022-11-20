// My components 
import Header from "./Header";
import Input from "./sub/Input";
// import ImageUpload from "./sub/Imguploader";
import StyledButton from "./styled/StyledButton";
import StyledImgWrapper from "./styled/StyledImgWrapper";


// External Components 
import styled from "styled-components";
import { FaPen } from "react-icons/fa";
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
                {/* <ImageUpload /> */}
                <StyledInputWrapper>
                    Profilbild bearbeiten 
                    <StyledImgWrapper> <FaPen /> </StyledImgWrapper>
                </StyledInputWrapper>
            </StyledProfileImg>
                
            <Input />
            
                <div>Vorname</div>

            <div>Name</div>
            <div>E-Mail-Adresse</div>
            <div>...</div>

        </Fragment>
    )
}

const ProfileActions = ()  => {
    return  (
        <StyledButton><Link to="/">Logout</Link></StyledButton>
    )
}



// ------ COMPONENT ------  //
const Profile = () => {
    return (
        <Fragment>

            <Header full />

            <StyledProfileWrapper>
                <ProfileHeader />
                <ProfileContent />
                <ProfileActions />
            </StyledProfileWrapper>

        </Fragment>
    )
}

export default Profile;



// ------ STYLED COMPONENTS ------  //
const StyledProfileWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const StyledProfileImg  = styled.div`
    background-color: rgba(250, 0, 250, 0.2);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    > img {
        width: 50%;
        height: auto;
        border-radius: 50%;
    }

    > div {
        /* width: 100%; */
        background-color: rgba(250, 0, 250, 0.2);

    }

`
const StyledInputWrapper = styled.div`
    background-color: white;
    background-color: rgba(0, 250, 0, 0.4);
    /* width: 80%; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    box-shadow: inset 1px 1px 4px gray;
    padding: 6px;
    margin-bottom: 30px;

    @media only screen and (min-width: 992px) {
        width: 50%;
    }
`