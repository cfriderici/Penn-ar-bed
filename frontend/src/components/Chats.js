// My components 
import Header from "./Header";


// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Chats = () => {
    return (
        <StyledChatsWrapper>
            <Header full />

            <h1>Meine Chats</h1>
            <div>ganz viel Blabla</div>
            <div>Text ...</div>
            
        </StyledChatsWrapper>
    )
}

export default Chats;



// ------ STYLED COMPONENTS ------  //
const StyledChatsWrapper = styled.div`
    background-color: rgba(0, 250, 250, 0.2);
`