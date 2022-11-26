// My Components
import { StyledH3 } from "../styled/StyledHeadlines";


// External Components 
import { useRef } from "react";
import styled from "styled-components";
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
            <div>{place}place</div>
            <div>{date}date</div> 
        </StyledPostHeader>
    )
}

// CONMTENT
const PostContent = ({ title, text, id })  => {
    return  (
        <StyledPostContent>
            <StyledH3>{title}title</StyledH3>
            <div>{text}text</div>
            <div>{id}id</div>
        </StyledPostContent>
    )
}

// ACTIONS
const PostActions = ({ postId, star, edited, editingDate, posts, setPosts })  => {

    // Funktion star toggeln
    const togglestar = () => {
        setPosts(
            posts.map( e => {
                if (e.id === postId)
                e.star = !e.star;
                return e
            })
        );
        console.log("Bookmar getoggled")
    }

    // Funktion: Post bearbeiten
    const changePost = () => {

        const heute = new Date();

        setPosts(
            posts.map( e => {
                    if (e.id === postId) 
                    e.edited = !e.edited; 
                    e.editingDate = heute.toLocaleDateString();
                return e 
                })
        );        
        console.log("geändert" + heute.toLocaleDateString())
    }

    //Funktion: Post löschen
    const deletePost = (id) => {
        let text = "Der Flaschen-Post dümpelt vergnügt vor dir hin und her.\nWillst du ihn wirklich aus dem Wasser fischen?";

        if (window.confirm(text) === true) {
            setPosts(posts.filter(e => e.id !== postId ))
        }                     
    }

   
    //useRefs definieren
    const AddTogglestarRef = useRef();
    const AddPostEditRef = useRef(); 

    return  (
        <StyledPostActions edited={edited} star={star}>
            <div>
                <FaRegShareSquare className="share" />
                <FaRegComment className="comment" />
                <FaRegHeart className="heart" />
                <FaRegStar className="star" ref={AddTogglestarRef} onClick={togglestar} />
            </div>
            <div>
                <FaRegEdit className="edit" ref={AddPostEditRef} onClick={changePost} />
                <FaRegTrashAlt className="trash" onClick={deletePost} />
            </div>
            <div> geändert am: {editingDate} </div>  
        </StyledPostActions>
    )
}




// ------ COMPONENT ------  //
const Post = ({ place, date, title, text, id, userId, userName, postId, edited, editingDate, star, posts, setPosts } ) => {
    return (        
        <StyledPostWrapper>
            <PostHeader place={place} date={date}/>
            <PostContent title={title} text={text} id={id} />
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
    background-color: rgba(0, 250, 0, 0.2);
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
    background-color: rgba(0, 250, 0, 0.2);
`

const StyledPostActions = styled.div`
    background-color: rgba(250, 50, 0, 0.2);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
    font-size: large;

        .star {
            color: ${props => props.star ? "black" : "red"};

        }

    > div:last-of-type {
        background-color: rgba(250, 0, 250, 0.6);
        width: 100%;
        font-size: small;
        text-align: right;
        display: ${props => props.edited ? "inline" : "none"};
    }

    > div svg {
        margin-right: 10px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`