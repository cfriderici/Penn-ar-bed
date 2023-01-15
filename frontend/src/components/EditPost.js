// My Components
import Header from "./Header";


// My Styled Components
import StyledWrapper from "./styled/StyledWrapper";
import StyledH1, { StyledH2, StyledH3 } from "./styled/StyledHeadlines";
import StyledInput, { StyledInputWrapper, StyledTextarea } from "./styled/StyledInput";
import StyledButton from "./styled/StyledButton";
import StyledLink from "./styled/StyledLink";


// My Context
import { useSocialAppContext } from "../providers/SocialAppContext";

// External Components 
import styled from "styled-components";
import { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";






// ------ COMPONENT ------  //
const EditPost = ({ postId, place, date, title, text, edited }) => {

    const { posts, setPosts, addPost, toggleStar, editPost, deletePost } = useSocialAppContext();
    const { id } = useParams();         // für den pfad in der app.js --> der aktuelle post

    console.log("useParams:", id);
    console.log("place:", place);
    console.log("title:", title);
    console.log("text:", posts[0].text);
    console.log("meine posts:", posts);



    // Funktionen
    const handleEditClick = () => {     
        console.log('EditPostBeacheRef', EditPostBeacheRef.current.value)   
        editPost(
            id, 
            EditPostBeacheRef.current.value, 
            EditPostTitleRef.current.value,
            EditPostTextRef.current.value
        );
    }    
    

    //useRefs
    const EditPostBeacheRef = useRef();
    const EditPostTitleRef = useRef();
    const EditPostTextRef = useRef();
    const AddPostEditRef = useRef(); 


    // Daten des Post einladen (hier muss map-Funktion in {} und nicht in () wie in Posts.js)
    useEffect (() => {
        posts.map(e => {
            if (e.id === id) {
                EditPostBeacheRef.current.value = e.place;
                EditPostTitleRef.current.value = e.title;
                EditPostTextRef.current.value = e.text;
            }
        })
    }, [])


    //
    return (
        <Fragment>
            <Header full />
            <StyledEditPostWrapper>

                <StyledWrapper>
                    <StyledH1>Flaschen-Post bearbeiten</StyledH1>
                </StyledWrapper>

                <StyledWrapper>
                    <StyledInputWrapper>
                        <StyledInput placeholder="Bild" /*ref={todoNameRef} */ ></StyledInput>
                    </StyledInputWrapper>

                    <StyledInputWrapper>
                        <StyledInput placeholder="Strandname" ref={EditPostBeacheRef} ></StyledInput>
                    </StyledInputWrapper>

                    <StyledInputWrapper>
                        <StyledInput placeholder="Titel" ref={EditPostTitleRef} ></StyledInput>
                    </StyledInputWrapper>
                    
                    <StyledInputWrapper>
                        <StyledTextarea placeholder="Beitrag" ref={EditPostTextRef} ></StyledTextarea>
                    </StyledInputWrapper>

                    <StyledInputWrapper>
                        <StyledInput placeholder={id} ></StyledInput>
                    </StyledInputWrapper>
                </StyledWrapper>

                <StyledWrapper>
                    <div className="wrapper">
                        <StyledButton>
                            <StyledLink to="/bottle-posts"> Abbrechen </StyledLink>
                        </StyledButton>

                        <StyledButton>
                            <StyledLink to="/bottle-posts" ref={AddPostEditRef} onClick={handleEditClick}> Zurück ins Meer </StyledLink>
                        </StyledButton>
                    </div>
                </StyledWrapper>


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
    /* justify-content: center; */
    /* padding: 5% 10%; */

    h1 {
        background-color: rgba(250, 0, 0, 0.2);
        /* width: 80%; */
    }
`

// const StyledWrapper = styled.div`
//     background-color: rgba(250, 0, 0, 0.2);
//     display: flex;
//     /* gap: 10px; */
//     width: 100%;
// `