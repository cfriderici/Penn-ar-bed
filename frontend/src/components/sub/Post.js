// My Components
import { StyledH3 } from "../styled/StyledHeadlines";
import StyledButton from "../styled/StyledButton";


// My Context
import { useSocialAppContext } from "../../providers/SocialAppContext";

// External Components 
import { useRef } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaLifeRing, FaRegCompass, FaDharmachakra, FaFish, FaSwimmer, FaUmbrellaBeach, FaCalendarAlt, FaComment, FaRegComment, FaCommentDots, FaComments, FaRegHeart, FaRegShareSquare, FaRegStar, FaStar, FaUserCircle, FaRegPlusSquare, FaWineBottle, FaRegEdit, FaEdit, FaPencilAlt, FaTrashAlt, FaRegTrashAlt } from "react-icons/fa";




// ------ INSIDE COMPONENTS ------  //

// HEADER
const PostHeader = ({ place, date })  => {
    return  (
        <StyledPostHeader>
            <div className="header_img">
                <img className="post-img" src={ require('../../img/FullSizeRender.JPG') } alt=""/>
                <img className="profile-img" src={ require('../../img/IMG_3115.jpg') } alt=""/>
            </div>
            <div>{place}</div>
            <div>{date.toLocaleString()}</div> 
        </StyledPostHeader>
    )
}

// CONTENT
const PostContent = ({ title, text, postId })  => {
    return  (
        <StyledPostContent>
            <StyledH3>{title}</StyledH3>
            <div>{text}</div>
            <div>{postId}</div>
        </StyledPostContent>
    )
}

// ACTIONS
const PostActions = ({ postId, star, edited, editingDate })  => {    
    
    const { posts, setPosts, addPost, toggleStar, editPost, deletePost } = useSocialAppContext();




    // Funktionen aufrufen
    const handleToggleClick = () => {        
        toggleStar(postId);
    }

    // const handleEditClick = () => {        
    //     editPost(postId);
    // }

    const handleDeleteClick = () => {        
        deletePost(postId);
    }


    
   
    //useRefs definieren
    const AddTogglestarRef = useRef();
    // const AddPostEditRef = useRef(); 

    return  (
        <StyledPostActions edited={edited} star={star}>
            <div>
                <FaRegShareSquare className="share" />
                <FaRegComment className="comment" />
                <FaRegHeart className="heart" />
                <FaRegStar className="star" ref={AddTogglestarRef} onClick={handleToggleClick} />
            </div>
            <div>
                <Link to="/edit-bottle-posts">
                    {/* <FaRegEdit className="edit" ref={AddPostEditRef} onClick={handleEditClick} /> */}
                    <FaRegEdit className="edit" />
                </Link>
                <FaRegTrashAlt className="trash" onClick={handleDeleteClick} />
            </div>
            { edited ? <div className="edited"> geändert am: {edited.toLocaleString()} </div> : null }
        </StyledPostActions>
    )
}




// ------ COMPONENT ------  //
const Post = ({ place, date, title, text, id, userId, userName, postId, edited, editingDate, star, posts, setPosts } ) => {
    return (        
        <StyledPostWrapper>
            <PostHeader place={place} date={date}/>
            <PostContent title={title} text={text} postId={postId} />
            <PostActions postId={postId} edited={edited} editingDate={editingDate} star={star} posts={posts} setPosts={setPosts}/>
        </StyledPostWrapper>
    )
}

export default Post;


// ------ STYLED COMPONENTS ------  //
const StyledPostWrapper = styled.div`
    /* background-color: rgba(0, 250, 0, 0.2); */
    margin-bottom: 20px;
`

const StyledPostHeader = styled.div`
    /* background-color: rgba(0, 250, 0, 0.2); */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: small;

    .header_img {
        position: relative;

        .post-img {
            width: 100%;
        }
        .profile-img {
            position: absolute;
            top: 5%;
            right: 5%;
            width: 25%;
            border-radius: 50%;
            border: 3px solid white;
        }
    }
`

const StyledPostContent = styled.div`
    /* background-color: rgba(0, 250, 0, 0.2); */
`

const StyledPostActions = styled.div`
    /* background-color: rgba(250, 50, 0, 0.2); */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
    font-size: large;

        .star {
            color: ${props => props.star ? "red" : "black"};

        }

    .edited {
        background-color: rgba(250, 0, 250, 0.6);
        width: 100%;
        font-size: small;
        text-align: right;
    }

    > div :link {
        /* background-color: rgba(0, 250, 250, 1); */
        margin-right: 10px;
    }

    > div svg {
        margin-right: 10px;

        &:last-of-type {
            /* background-color: rgba(250, 50, 0, 0.5); */
            margin-right: 0;
        }
    }
`