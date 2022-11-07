import styled from "styled-components";



// ------ COMPONENT ------  //

const Footer = () => {
    return (
        <StyledFooterWrapper>
            <p>Copyright etc.</p>            
        </StyledFooterWrapper>
    )
}

export default Footer;



// ------ STYLED COMPONENTS ------  //

const StyledFooterWrapper = styled.div`
    background-color: rgba(250, 0, 250, 0.2);  
    font-size: smaller;
    text-align: center;
`