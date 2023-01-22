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
import axios from 'axios';
import styled from "styled-components";
import { Fragment } from "react";
import { useEffect, useState } from "react";




// ------ INSIDE COMPONENTS ------  //

// HEADER
const ProfileHeader = ()  => {

    const {user, setUser, token, setToken, logoutUser, userData, setUserData } = useSocialAppContext();

    return  (
        <StyledWrapper>
            <StyledH1>Profil</StyledH1>
            <StyledH2>Hallo {userData.name}, hier kannst du deine Daten einsehen. </StyledH2>
        </StyledWrapper>
    )
}

//CONTENT
const ProfileContent = ({ users, setUsers, name, email })  => {

    const {user, setUser, token, setToken, logoutUser, userData, setUserData } = useSocialAppContext();
    

    // AVATAR ----
    const [avatarFile, setAvatarFile] = useState();
    
    // Mit FormData das Bild (avatarFile) als object erstellen ...
    const changeImageInBackend = async () => {
        var formData = new FormData();
        formData.append('file', avatarFile);

        // ... und per config-Objekt für axios an body übergeben --> Route noch fürs Backend bauen (api.js)
        // die userId muss hier wieder im Pfad mitgegeben werden
        var config = {
            method: 'post',
            url: '/api/change-avatar-image?userId='+userData.id,
            headers: { 
              'Content-Type': 'multipart/form-data'
            },
            data : formData
          };
          const response = await axios(config);
          console.log(response);
    }

    const handleFileChange = e => {
        setAvatarFile(e.target.files[0])
        // console.log("Profile.js handleFileChange 44 (e): ", e);
        // console.log("Profile.js handleFileChange 44 (e.target.files[0]): ", e.target.files[0]);
    } 

    // useEffekt soll jedesmal ausgeführt werden, wenn der Avatar-State (avatarFile) sich ändert
    useEffect(() => {
        if (avatarFile) {
          changeImageInBackend();
        }
      }, [avatarFile])
      
    // ---- AVATAR

    useEffect(() => {
        console.log("Profile 40 userData: ", userData);
    })


    return  (
        <Fragment>
            <StyledWrapper>    

                <StyledImgWrapper>
                    <button className="avatarButton" component="label" >
                        <img className="avatarImage" alt="Avatar" src={userData.avatarImageLink} />
                        {/* <img style={{width: '100px', height: '100px' }} className="post-img"  src='https://upload.wikimedia.org/wikipedia/commons/6/62/E_pulcherrima_ies.jpg' alt=""/> */}
                        <input className="avatarInput"
                            type="file"
                            multiple accept="image/jpeg, image/png"
                            onChange={(e) => handleFileChange(e)}
                            // hidden
                        />
                    </button>
                </StyledImgWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder={userData.name} /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder={userData.email} /*ref={todoNameRef} */ ></StyledInput>
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
                    <StyledInput placeholder={userData.numberOfPosts} /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder={userData.numberOfLikes} /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder={userData.numberOfFriends} /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>            
            </StyledWrapper>
        </Fragment>
    )
}

// ACTIONS
const ProfileActions = ()  => {

    const {user, setUser, token, setToken, logoutUser, userData, setUserData } = useSocialAppContext();

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
const Profile = ({ users, setUsers, name, userData, setUserData }) => {
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




const StyledImgWrapper  = styled.div`
    /* background-color: rgba(0, 200, 0, 0.2); */
    width: 50vw;
    height: 50vw;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-bottom: 30px;
    /* border: 1px solid black; */
    /* border-radius: 50%; */

    .avatarButton {
        /* background-color: rgba(250, 0, 250, 0.2); */
        background-color: transparent;
        border: none;
        /* border: dashed 1px black; */
        width: 100%;
        height: 100%;
        padding: 0;

        .avatarImage {
            width: 100%;
            height: 100%;
            border: 5px solid white;
            border-radius: 50%;
        }

        .avatarInput {
            /* display: none; */
        }
    }

`

