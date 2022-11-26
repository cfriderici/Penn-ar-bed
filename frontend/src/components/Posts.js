// My components 
import Header from "./Header";
import Post from "./sub/Post";
import Sort from "./sub/Sort";
// import StyledImgWrapper from "./styled/StyledImgWrapper";
import StyledLink from "./styled/StyledLink";



// External Components 
import styled from "styled-components";
import { Fragment } from "react";
import { FaWineBottle } from "react-icons/fa";
// import { Link } from 'react-router-dom';

     

// ------ INSIDE COMPONENTS ------  //

// HEADER
const PostsHeader = ()  => {
    return  (
        <StyledPostsHeader>
            <h1>Meine Flaschen-Posts</h1>
                <StyledLink to="/create-bottle-posts">
                    <div> Neuer Flaschen-Post <FaWineBottle /> </div>
                </StyledLink>
            <Sort placeHolder="Select..."  />         
        </StyledPostsHeader>
    )
}

// CONTENT
const PostsContent = ({ posts, setPosts }) => {
    return (
        <StyledPostsContent>
            {/* Code vom Sort Module */}
            {/* <div className="App"> */}
                {/* <select onChange={sortPlayers}>
                    <option value="a-z">A - Z</option>
                    <option value="z-a">Z - A</option>
                </select>
                {players.map((player, index) => (
                    <p key={index}>{player}</p>
                ))}
                {players.map((player, index) => {
                    const playerNum = `${player}${index}`;
                    return (
                    <p key={index}>
                        {player}
                        {playerNum}
                    </p>
                    );
                })} */}
            {/* </div> */}
            {           
                posts.map(e => (
                    <Post key={e.id} image={e.image} title={e.title} text={e.text} userId={e.userId} userName={e.userName} place={e.place} date={e.date} postId={e.id} edited={e.edited} editingDate={e.editingDate} star={e.star} posts={posts} setPosts={setPosts} />
                ))
            }
        </StyledPostsContent>        
    )
}



// ------ COMPONENT ------  //
const Posts = ({ posts, setPosts, players, setPlayers }) => {

    // Code vom Sort Module
    // const sortPlayers = (selectEvent) => {
    //     const options = {
    //       "a-z": [...players].sort((a, b) => (a < b ? -1 : 1)),
    //       "z-a": [...players].sort((a, b) => (a < b ? 1 : -1))
    //     };
    
    //     setPlayers(options[selectEvent.target.value]);
    //   };

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

const StyledPostsContent = styled.div`
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