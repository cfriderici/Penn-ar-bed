// My Components
import StyledLink from "./styled/StyledLink";


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
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 8px ;
    display: none;
`

const StyledFooterWrapper = styled.div`
    background-color: rgba(250, 0, 250, 0.2);  
    display: flex;
    justify-content: space-between;
    font-size: smaller;
    text-align: center;

`
