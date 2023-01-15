// My Components 
import Header from "./Header";

// My Styled Components
import StyledWrapper from "./styled/StyledWrapper";
import StyledH1, { StyledH2, StyledH3 } from "./styled/StyledHeadlines";
import StyledLink from "./styled/StyledLink";

// External Components 
import styled from "styled-components";
import { Fragment } from "react";



// ------ INSIDE COMPONENTS ------  //

// HEADER
const ChatHeader = ()  => {
    return  (
        <StyledWrapper>
            <StyledH1>Chats</StyledH1>
        </StyledWrapper>
    )
}  

// CONTENT
const ChatContent = ({ title, text, postId })  => {
    return  (
        <StyledWrapper>
            <StyledH3>Ganz viel Blabla!</StyledH3>
            <div>Hier werden alle Chats gelistet</div>
        </StyledWrapper>
    )
}

// ACTIONS
const ChatActions = ()  => {
    return  (
        <StyledWrapper>                
            <StyledLink to="/login">Irgendeine Aktion</StyledLink>  
        </StyledWrapper>
    )
}




// ------ COMPONENT ------  //

const Chats = () => {
    return (
        <Fragment>

            <Header full />

            <StyledChatsWrapper>
                <ChatHeader />
                <ChatContent />
                <ChatActions /> 
            </StyledChatsWrapper>
        </Fragment>
    )
}

export default Chats;



// ------ STYLED COMPONENTS ------  //
const StyledChatsWrapper = styled.div`
    background-color: rgba(0, 250, 250, 0.2);
`