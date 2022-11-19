// My components 
import Header from "./Header";
import Post from "./sub/Post";
import Input from "./sub/Input";
import Sort from "./sub/Sort";
import Createpost from "./Createpost";
import StyledImgWrapper from "./styled/StyledImgWrapper";



// External Components 
import styled from "styled-components";
import { Fragment } from "react";
import { FaPen } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

     

// ------ INSIDE COMPONENTS ------  //
const PostsHeader = ()  => {
    return  (

        <StyledPostsHeader>

            <h1>Meine Flaschen-Posts</h1>

            {/* <StyledImgWrapper>  */}
                <Link to="/create-bottle-posts"><div> Neuer Flaschen-Post <FaPen /> </div></Link>
            {/* </StyledImgWrapper>                */}

            <Sort placeHolder="Select..."  /> 
        
        </StyledPostsHeader>

    )
}



// ------ COMPONENT ------  //
const Posts = ({ posts }) => {
    return (

        <Fragment>
            
            <Header full />

            <StyledPostsWrapper>

                <PostsHeader />

                {
                    posts.map(e => (
                        <Post key={e.id} image={e.image} title={e.title} text={e.text} userId={e.userId} userName={e.userName} place={e.place} date={e.date} id={e.id}  />
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