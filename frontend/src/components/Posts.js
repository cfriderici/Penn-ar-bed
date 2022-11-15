// My components 
import Header from "./Header";
import Post from "./sub/Post";

// External Components 
import styled from "styled-components";
import { Fragment } from "react";
     

// ------ INSIDE COMPONENTS ------  //
// const PostsHeader = ()  => {
//     return  (
//         <h1>Meine Posts</h1>
//     )
// }





// ------ COMPONENT ------  //
const Posts = ({ posts }) => {
    return (

        <Fragment>
            
            <Header full />

            <StyledPostsWrapper>

                <h1>Meine Posts</h1>

                {
                    posts.map(e => (
                        <Post key={e.id} image={e.image} title={e.title} text={e.text} userId={e.userId} userName={e.userName} place={e.place} date={e.date}  />
                    ))
                }
                
            </StyledPostsWrapper>

        </Fragment>
    )
}

export default Posts;



// ------ STYLED COMPONENTS ------  //
const StyledPostsWrapper = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
`