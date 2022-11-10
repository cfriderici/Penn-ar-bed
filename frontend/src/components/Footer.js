import Header from "./Header";
import Impressum from "./Impressum";


// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



// ------ COMPONENT ------  //

const Footer = () => {
    return (

        <StyledStickyFooter>
            <StyledFooterWrapper>

                <StyledLink to="/impressum"><div>Impressum</div></StyledLink>
                <p>Copyright etc.</p> 

            </StyledFooterWrapper>
        </StyledStickyFooter>

    )
}

export default Footer;



// ------ STYLED COMPONENTS ------  //
const StyledStickyFooter = styled.div`
    background: white;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 8px ;
`

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