// My Components
import Header from "./Header";
import StyledButton from "./styled/StyledButton";
import StyledInput, { StyledInputWrapper, StyledTextarea } from "./styled/StyledInput";

// My Context
import { useSocialAppContext } from "../providers/SocialAppContext";

// External Components 
import styled from "styled-components";
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { useParams } from "react-router-dom";





// ------ COMPONENT ------  //
const EditPost = ({ postId, place, date, title, text, edited }) => {

    const { posts, setPosts, addPost, toggleStar, editPost, deletePost } = useSocialAppContext();
    const { id } = useParams();         // für den pfad in der app.js --> der aktuelle post

    console.log("useParams:", id);
    console.log("title:", title);


    // Funktionen
    const handleEditClick = () => {        
        editPost(postId);
    }    
    

    //useRefs
    const EditPostBeacheRef = useRef();
    const EditPostTitleRef = useRef();
    const EditPostTextRef = useRef();
    const AddPostEditRef = useRef(); 


    //
    return (
        <Fragment>
            <Header full />
            <StyledEditPostWrapper>

                <h1>Flaschen-Post bearbeiten</h1>

                <StyledInputWrapper>
                    <StyledInput placeholder="Bild" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Strand"  ref={EditPostBeacheRef} ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Titel" ref={EditPostTitleRef} ></StyledInput>
                </StyledInputWrapper>
                
                <StyledInputWrapper>
                    <StyledTextarea placeholder="Text" ref={EditPostTextRef} ></StyledTextarea>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder={id} ></StyledInput>
                </StyledInputWrapper>

                <StyledButton  >
                    <Link to="/bottle-posts" ref={AddPostEditRef} onClick={handleEditClick}> Zurück ins Meer </Link>
                    {/* <Link to="/bottle-posts"> Zurück ins Meer </Link> */}

                </StyledButton>
            
            </StyledEditPostWrapper>        
        </Fragment>
    )
}

export default EditPost;


// ------ STYLED COMPONENTS ------  //
const StyledEditPostWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`