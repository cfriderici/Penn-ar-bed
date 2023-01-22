// My Components
import Header from "./Header";

// My Styled Components
import StyledWrapper from "./styled/StyledWrapper";
import StyledH1, { StyledH2, StyledH3 } from "./styled/StyledHeadlines";
import StyledButton from "./styled/StyledButton";
import StyledInput, { StyledInputWrapper, StyledTextarea } from "./styled/StyledInput";
import StyledLink from "./styled/StyledLink";

// My Context
import { useSocialAppContext } from "../providers/SocialAppContext";

// External Components 
import styled from "styled-components";
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useRef } from "react";




// ------ COMPONENT ------  //
const AddPost = () => {

    const { addPost } = useSocialAppContext();

    //useRefs definieren
    const AddPostBeacheRef = useRef();
    const AddPostTitleRef = useRef();
    const AddPostTextRef = useRef();

    //Funktion: Post hinzufügen 
    const newPost = () => {
        if (AddPostTitleRef.current.value && AddPostTextRef.current.value !== "") {
            addPost(
				AddPostBeacheRef.current.value, 
                AddPostTitleRef.current.value, 
                AddPostTextRef.current.value
			)
        }
        console.log("Flaschen Post geschmissen")
    }
    const handleAddClick = () => {
        newPost();
    }

    //
    return (
        <Fragment>
            <Header full />
            <StyledAddPostWrapper>

                <StyledWrapper>
                    <StyledH1>Neuer Flaschen-Post</StyledH1>
                    <StyledH2>Toll - noch ein Post !!!</StyledH2>
                </StyledWrapper>

                <StyledWrapper>
                    <StyledImgWrapper>
                        <button className="uploadImageButton" component="label" >
                            {/* <img className="avatarImage" alt="Avatar" src={userData.avatarImageLink ? userData.avatarImageLink : './img/sunset.jpg'} /> */}
                            <img className="postImage"  src='https://upload.wikimedia.org/wikipedia/commons/6/62/E_pulcherrima_ies.jpg' alt="Bild"/>

                            <input className="uploadImageInput"
                                type="file"
                                multiple accept="image/jpeg, image/png"
                                // onChange={(e) => handleFileChange(e)}
                                // hidden
                            />
                        </button>
                    </StyledImgWrapper>

                    <StyledInputWrapper>
                        <StyledInput placeholder="Strand eingeben"  ref={AddPostBeacheRef} ></StyledInput>
                    </StyledInputWrapper>

                    <StyledInputWrapper>
                        <StyledInput placeholder="Titel eingeben"  ref={AddPostTitleRef} ></StyledInput>
                    </StyledInputWrapper>
                    
                    <StyledInputWrapper>
                        <StyledTextarea placeholder="Text eingeben" ref={AddPostTextRef} ></StyledTextarea>
                    </StyledInputWrapper>
                </StyledWrapper>

                <StyledWrapper>
                    <StyledButton>
                        <StyledLink to="/bottle-posts">Ne, doch nicht ...</StyledLink>
                    </StyledButton>

                    <StyledButton onClick={handleAddClick} >
                        <StyledLink to="/bottle-posts">Ab ins Meer !!!</StyledLink>
                    </StyledButton>
                </StyledWrapper>
            
            </StyledAddPostWrapper>        
        </Fragment>
    )
}

export default AddPost;


// ------ STYLED COMPONENTS ------  //
const StyledAddPostWrapper = styled.div`
    background-color: rgba(250, 250, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
`





const StyledImgWrapper  = styled.div`
    background-color: rgba(0, 200, 0, 0.2);
    /* width: 50vw; */
    /* height: 50vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-bottom: 30px;
    /* border: 1px solid black; */
    /* border-radius: 50%; */

    .uploadImageButton {
        /* background-color: transparent; */
        border: none;
        /* border: dashed 1px black; */
        /* width: 50vw; */
        /* height: 50vw; */
        padding: 0;

        .avatarImage {
            width: 50vw;
            height: 50vw;
            object-fit: cover;
            border: 5px solid white;
            border-radius: 50%;
        }

        .postImage {
            width: 100vw;
            height: 100vw;
        }

        .uploadImageInput {
            /* display: none; */
        }
    }

`