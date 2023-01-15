// My components 
import Header from "./Header";
import Post from "./sub/Post";
import Sort from "./sub/Sort";

 // My Styled Components
 import StyledLink from "./styled/StyledLink";
 import StyledButton from "./styled/StyledButton";
 import StyledH1, { StyledH2, StyledH3} from "./styled/StyledHeadlines";
 import StyledWrapper from "./styled/StyledWrapper";


// My Context
import { useSocialAppContext } from "../providers/SocialAppContext";


// External Components 
import styled from "styled-components";
import { Fragment } from "react";
import { FaWineBottle } from "react-icons/fa";
// import { Link } from 'react-router-dom';



// ------ INSIDE COMPONENTS ------  //

// HEADER
const PostsHeader = ()  => {
    return  (
        <StyledWrapper>
            
            <StyledH1>Flaschen-Posts</StyledH1>
            
            <div className="wrapper">
                <StyledButton>
                    <StyledLink to="/create-bottle-post">
                        <div>Neuer Flaschen-Post <FaWineBottle /> </div>
                    </StyledLink>
                </StyledButton>

                <Sort />      
            </div>   

        </StyledWrapper>
    )
}

// CONTENT
const PostsContent = () => {

    const { posts, setPosts } = useSocialAppContext();

    return (
        <StyledPostsContent>
            {           
                posts.map(e => (
                    <Post key={e.id} image={e.image} title={e.title} text={e.text} userId={e.userId} userName={e.userName} place={e.place} date={e.date} postId={e.id} edited={e.edited} editingDate={e.editingDate} star={e.star} posts={posts} setPosts={setPosts} />
                ))
            }
        </StyledPostsContent>        
    )
}



// ------ COMPONENT ------  //
const Posts = ({ players, setPlayers }) => {

    const { posts, setPosts, addPost, deletePost } = useSocialAppContext();

    return (
        <Fragment>            
            <Header full />
            <StyledPostsWrapper>
                <PostsHeader />
                <PostsContent posts={posts} setPosts={setPosts} />                    
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

// const StyledPostsHeader = styled.div`
//     background-color: rgba(0, 250, 250, 0.4);
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     /* flex-wrap: wrap; */
//     /* justify-content: space-between; */
//     align-items: center;
//     border-radius: 4px;
//     /* box-shadow: inset 1px 1px 4px gray; */
//     padding: 6px;
//     margin-bottom: 30px;
// `

const StyledPostsContent = styled.div`
    background-color: rgba(0, 250, 250, 0.4);
    width: 100%;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    align-items: center;
    /* border-radius: 4px; */
    /* box-shadow: inset 1px 1px 4px gray; */
    /* padding: 6px; */
    /* margin-bottom: 30px; */
`