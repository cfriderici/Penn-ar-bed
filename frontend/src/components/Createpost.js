// My Components
import Header from "./Header";
import Input from "./sub/Input";
import StyledButton from "./styled/StyledButton";

// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



// ------ COMPONENT ------  //
const Createpost = () => {
    return (
        <StyledCreatepostWrapper>
            <Header full />

            <h1>Neuer Post</h1>
            
            <div>Bild hochladen</div>
            <Input />

            <div>Titel eingeben</div>
            <Input />

            <div>Text eingeben</div>
            <Input />

            <StyledButton><Link to="/bottle-posts">ins Meer schmeißen</Link></StyledButton>

            
        </StyledCreatepostWrapper>
    )
}

export default Createpost;


// ------ STYLED COMPONENTS ------  //
const StyledCreatepostWrapper = styled.div`
    background-color: rgba(250, 250, 0, 0.2);
`