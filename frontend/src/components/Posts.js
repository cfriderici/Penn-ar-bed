// My components 
import Header from "./Header";
import Post from "./sub/Post";
import Sort from "./sub/Sort";



// External Components 
import styled from "styled-components";
import { Fragment } from "react";
import { FaWineBottle } from "react-icons/fa";
import { Link } from 'react-router-dom';

     

// ------ INSIDE COMPONENTS ------  //
const PostsHeader = ()  => {
    return  (

        <StyledPostsHeader>

            <h1>Meine Flaschen-Posts</h1>

            {/* <StyledImgWrapper>  */}
                <Link to="/create-bottle-posts"><div> Neuer Flaschen-Post <FaWineBottle /> </div></Link>
            {/* </StyledImgWrapper>                */}

            <Sort placeHolder="Select..."  /> 
        
        </StyledPostsHeader>

    )
}



// ------ COMPONENT ------  //
const Posts = ({ posts, setPosts }) => {
    return (

        <Fragment>
            
            <Header full />

            <StyledPostsWrapper>

                <PostsHeader />

                {
                    posts.map(e => (
                        <Post key={e.id} image={e.image} title={e.title} text={e.text} userId={e.userId} userName={e.userName} place={e.place} date={e.date} postId={e.id} edited={e.edited} editingDate={e.editingDate} posts={posts} setPosts={setPosts}/>
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

const StyledPostsHeader = styled.div`
    background-color: rgba(0, 250, 250, 0.4);
    width: 100%;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    align-items: center;
    border-radius: 4px;
    /* box-shadow: inset 1px 1px 4px gray; */
    padding: 6px;
    margin-bottom: 30px;
`