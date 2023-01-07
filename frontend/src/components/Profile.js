// My components 
import Header from "./Header";
import StyledButton from "./styled/StyledButton";
import StyledInput, { StyledInputWrapper, StyledTextarea } from "./styled/StyledInput";


// External Components 
import styled from "styled-components";
import { FaRegTimesCircle, FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { Link } from 'react-router-dom';
import {Fragment} from "react";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";



// ------ INSIDE COMPONENTS ------  //

// HEADER
const ProfileHeader = ()  => {
    return  (
        <StyledProfileHeader>
            <h1>Mein Profil</h1>
            <StyledProfileImg>
                <ImageUploader 
                    deleteIcon={ <FaRegTimesCircle className="deleteImg"/> } 
                    uploadIcon={ <CiFaceSmile className="addImg"/>  }
                />                
            </StyledProfileImg>
        </StyledProfileHeader>
    )
}

//CONTENT
const ProfileContent = ({ users, setUsers, name })  => {
    return  (
        <StyledProfileContent>              
                <StyledInputWrapper>
                    <div>name: {name}</div>
                    <StyledInput placeholder="Vorname" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>
                <StyledInputWrapper>
                    <StyledInput placeholder="Nachname" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>
        </StyledProfileContent>
    )
}

// ACTIONS
const ProfileActions = ()  => {
    return  (
        <StyledButton><Link to="/">Logout</Link></StyledButton>
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


const StyledProfileHeader = styled.div`
`

const StyledProfileContent = styled.div`
    background-color: rgba(250, 250, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledProfileAction = styled.div`
`




const StyledProfileWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
`




const StyledProfileImg  = styled.div`
    /* background-color: rgba(250, 0, 250, 0.2); */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

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

