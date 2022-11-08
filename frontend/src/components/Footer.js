import Header from "./Header";
import Impressum from "./Impressum";


// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



// ------ COMPONENT ------  //

const Footer = () => {
    return (
        <StyledFooterWrapper>


            <StyledLink to="/impressum"><div>Impressum</div></StyledLink>

            <p>Copyright etc.</p> 


        </StyledFooterWrapper>
    )
}

export default Footer;



// ------ STYLED COMPONENTS ------  //

const StyledFooterWrapper = styled.div`
    background-color: rgba(250, 0, 250, 0.2);  
    display: flex;
    justify-content: space-between;
    font-size: smaller;
    text-align: center;

`
const StyledLink  = styled(Link)`
    background-color: rgba(250, 0, 250, 0.2);
    /* width: 50px; */
    /* height: 50px; */
    font-size: smaller;
    text-transform: uppercase;
`