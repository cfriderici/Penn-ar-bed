// My components 
import Header from "./Header";


// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Posts = () => {
    return (
        <StyledPostsWrapper>
            <Header full />

            <h1>Meine Flaschen-Posts</h1>
            <div>Bild</div>
            <div>Pors Theolen</div>
            <div>Text ...</div>

            
        </StyledPostsWrapper>
    )
}

export default Posts;



// ------ STYLED COMPONENTS ------  //
const StyledPostsWrapper = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
`