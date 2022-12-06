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





// ------ COMPONENT ------  //
const EditPost = ({ title }) => {

    const { editPost } = useSocialAppContext();

    //useRefs definieren
    const EditPostBeacheRef = useRef();
    const EditPostTitleRef = useRef();
    const EditPostTextRef = useRef();

    //Funktion: Post hinzufügen 
    // const newPost = () => {
    //     if (EditPostTitleRef.current.value && EditPostTextRef.current.value !== "") {
    //         addPost(
	// 			EditPostBeacheRef.current.value, 
    //             EditPostTitleRef.current.value, 
    //             EditPostTextRef.current.value
	// 		)
    //     }
    //     console.log("Flaschen Post geschmissen")
    // }
    // const handleAddClick = () => {
    //     newPost();
    // }

    //
    return (
        <Fragment>
            <Header full />
            <StyledEditPostWrapper>

                <h1>Flaschen-Post bearbeiten</h1>

                <StyledInputWrapper>
                    <StyledInput placeholder="Bild hochlagen" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Strand eingeben"  ref={EditPostBeacheRef} ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="" ref={EditPostTitleRef} ></StyledInput>
                </StyledInputWrapper>
                
                <StyledInputWrapper>
                    <StyledTextarea placeholder="Text eingeben" ref={EditPostTextRef} ></StyledTextarea>
                </StyledInputWrapper>

                <StyledButton  >
                    <Link to="/bottle-posts">Zurück ins Meer</Link>
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