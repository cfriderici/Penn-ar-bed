// My Components

 // My Styled Components
 import StyledLink from "../styled/StyledLink";
 import StyledButton from "../styled/StyledButton";
 import StyledH1, { StyledH2, StyledH3} from "../styled/StyledHeadlines";
 import StyledWrapper from "../styled/StyledWrapper";

// My Context
import { useSocialAppContext } from "../../providers/SocialAppContext";

// External Components 
import { useRef } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaLifeRing, FaRegCompass, FaDharmachakra, FaFish, FaSwimmer, FaUmbrellaBeach, FaCalendarAlt, FaComment, FaRegComment, FaCommentDots, FaComments, FaRegHeart, FaRegShareSquare, FaRegStar, FaStar, FaUserCircle, FaRegPlusSquare, FaWineBottle, FaRegEdit, FaEdit, FaPencilAlt, FaTrashAlt, FaRegTrashAlt } from "react-icons/fa";




// ------ INSIDE COMPONENTS ------  //

// HEADER
const PostHeader = ({ place, date, postImageLink })  => {

    const {user, setUser, token, setToken, logoutUser, userData, setUserData } = useSocialAppContext();

    return  (
        <StyledWrapper>
            <div className="imageWrapper">
                <img className="post-img" src={ postImageLink ? postImageLink : require('../../img/flaschen-post.jpg') } alt=""/>
                <img className="profile-img" src={userData.avatarImageLink ? userData.avatarImageLink : 'https://upload.wikimedia.org/wikipedia/commons/6/62/E_pulcherrima_ies.jpg'} alt="Avatar"/>
            </div>

            <div className="wrapper">
                <div>{place}</div>
                <div>{date.toLocaleString()}</div> 
            </div>
        </StyledWrapper>
    )
}

// CONTENT
const PostContent = ({ title, text, postId })  => {
    return  (
        <StyledWrapper>
            <StyledH3>{title}</StyledH3>
            <div>{text}</div>
            <div>{postId}</div>
        </StyledWrapper>
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
                <Link to={"/edit-bottle-post/"+postId}>
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
const Post = ({ place, date, title, text, id, userId, userName, postId, edited, editingDate, star, postImageLink, posts, setPosts } ) => {

    const {user, setUser, token, setToken, logoutUser, userData, setUserData } = useSocialAppContext();


    return (        
        <StyledPostWrapper>
            <PostHeader place={place} date={date} postImageLink={postImageLink}/>
            <PostContent title={title} text={text} postId={postId} />
            <PostActions postId={postId} edited={edited} editingDate={editingDate} star={star} posts={posts} setPosts={setPosts}/>
        </StyledPostWrapper>
    )
}

export default Post;


// ------ STYLED COMPONENTS ------  //
const StyledPostWrapper = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
    margin-bottom: 20px;
`

const StyledPostHeader = styled.div`
    /* background-color: rgba(0, 250, 0, 0.6); */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: small;

    .imageWrapper {
        position: relative;

        .post-img {
            width: 100vw;
            max-height: 100vw;
            object-fit: cover;
        }
        
        .profile-img {
            position: absolute;
            top: 5%;
            right: 5%;
            width: 25vw;
            height: 25vw;
            object-fit: cover;
            border-radius: 50%;
            border: 3px solid white;
        }
    }

    .textWrapper {
        background-color: rgba(250, 0, 0, 0.2);
    }
`

const StyledPostContent = styled.div`
    background-color: rgba(0, 250, 0, 0.8);

`

const StyledPostActions = styled.div`
    /* background-color: rgba(250, 50, 0, 0.2); */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
    padding: 0 20px;
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