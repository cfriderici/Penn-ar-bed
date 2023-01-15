// My components 
import Header from "./Header";

// My Styled Components
import StyledWrapper from "./styled/StyledWrapper";
import StyledH1, { StyledH2, StyledH3 } from "./styled/StyledHeadlines";
import StyledLink from "./styled/StyledLink";
import StyledButton from "./styled/StyledButton";
import StyledInput, { StyledInputWrapper, StyledTextarea } from "./styled/StyledInput";

// My Context
import { useSocialAppContext } from "../providers/SocialAppContext";

// External Components 
import styled from "styled-components";
import { FaRegTimesCircle, FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { Link } from 'react-router-dom';
import {Fragment} from "react";




// ------ INSIDE COMPONENTS ------  //

// HEADER
const ProfileHeader = ()  => {
    return  (
        <StyledWrapper>
            <StyledH1>Profil</StyledH1>
        </StyledWrapper>
    )
}

//CONTENT
const ProfileContent = ({ users, setUsers, name })  => {
    return  (
        <Fragment>
            <StyledWrapper>    
                <StyledProfileImg>
                    Hier kommt das Profilbild hin
                </StyledProfileImg>

                <StyledInputWrapper>
                    <StyledInput placeholder="Name" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="E-Mail" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Passwort ändern" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>
            </StyledWrapper>

            <StyledWrapper>    
                <StyledH3>Kontodetails</StyledH3>
                <StyledInputWrapper>
                    <StyledInput placeholder="Dabei seit: Datum" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Posts" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Likes" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Freunde" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>            
            </StyledWrapper>
        </Fragment>
    )
}

// ACTIONS
const ProfileActions = ()  => {

    const {user, setUser, token, setToken, logoutUser } = useSocialAppContext();

    const handleAccountClick = () => {
        logoutUser();
        console.log("User abgemeldet")
      }

    return  (
        <StyledWrapper>              

            <StyledButton onClick={handleAccountClick}>
                <StyledLink to="/">Logout</StyledLink>
            </StyledButton>

        </StyledWrapper>

    )
}




// ------ COMPONENT ------  //
const Profile = ({ users, setUsers, name }) => {
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


// const StyledProfileHeader = styled.div`
// `

// const StyledProfileContent = styled.div`
//     background-color: rgba(250, 250, 0, 0.2);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

// const StyledProfileAction = styled.div`
// `




const StyledProfileWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
`




const StyledProfileImg  = styled.div`
    background-color: rgba(250, 0, 250, 0.2);
    width: 50vw;
    height: 50vw;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 30px;

    .uploader__container {
        /* background-color: rgba(250, 250, 0, 0.2); */
        margin: 10px;

        .uploader__placeholder {
        /* background-color: rgba(0, 250, 0, 0.2); */
        background-color: transparent;
        min-height: 200px;
        min-width: 200px;

            .uploader__btn_wrapper {
            /* background-color: rgba(0, 250, 250, 0.2); */

                .uploader__btn {
                /* background-color: rgba(0, 250, 250, 0.4); */

                    .deleteImg {
                        font-size: x-large;
                    }
                }
            }

            .uploader__file_input_label {
                background-color: lightgray;
                width: 100%;
                height: 100%;
                box-shadow: inset 1px 1px 4px gray;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                .addImg {
                    /* background-color: rgba(0, 50, 20, 0.2); */
                    width: 50%;
                    height: 50%;
                }

                .uploader__file_input {

                }
            }
            
            .uploader__file {
                /* background-color: rgba(0, 250, 0, 0.2); */
                border-radius: 50%;
            }
        }       
    }
`

