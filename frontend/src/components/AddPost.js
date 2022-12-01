// My Components
import Header from "./Header";
import StyledButton from "./styled/StyledButton";
import StyledInput, { StyledInputWrapper, StyledTextarea } from "./styled/StyledInput";

// My Hooks
import usePosts from "../hooks/usePosts";

// External Components 
import styled from "styled-components";
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useRef } from "react";




// ------ COMPONENT ------  //
const AddPost = ({ posts, setPosts }) => {

    const [ addPost ] = usePosts();

    //useRefs definieren --> wie geht das für das ganze array ?!?
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
    }
    const handleAddClick = () => {
        newPost();
        console.log("Flaschen Post geschmiussen")

    }

    //
    return (
        <Fragment>
            <Header full />
            <StyledAddPostWrapper>

                <h1>Neuer Post</h1>

                <StyledInputWrapper>
                    <StyledInput placeholder="Bild hochlagen" /*ref={todoNameRef} */ ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Strand eingeben"  ref={AddPostBeacheRef} ></StyledInput>
                </StyledInputWrapper>

                <StyledInputWrapper>
                    <StyledInput placeholder="Titel eingeben"  ref={AddPostTitleRef} ></StyledInput>
                </StyledInputWrapper>
                
                <StyledInputWrapper>
                    <StyledTextarea placeholder="Text eingeben" ref={AddPostTextRef} ></StyledTextarea>
                </StyledInputWrapper>

                <StyledButton onClick={handleAddClick} >
                    <Link to="/bottle-posts">ins Meer schmeißen</Link>
                </StyledButton>
            
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