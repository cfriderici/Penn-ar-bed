// My components 
import Header from "./Header";

// My Styled Components
import StyledWrapper from "./styled/StyledWrapper";
import StyledH1, { StyledH2, StyledH3 } from "./styled/StyledHeadlines";
import StyledLink from "./styled/StyledLink";

// External Components 
import styled from "styled-components";
import { Fragment } from "react";
     



// ------ SUB COMPONENTS ------  //

const BeachHeader = ()  => {
    return  (
        <StyledWrapper>
            <StyledH1>Lieblingsstrand</StyledH1>
            <StyledH2>(Name Strand)</StyledH2>
        </StyledWrapper>
    )
}   

const BeachContent = ()  => {
    return  (
        <Fragment>
            <StyledWrapper>
                <StyledH3>Video</StyledH3>
                <p>Hier wird ein Video oder Bild des Strands gezeigt</p>
            </StyledWrapper>

                <StyledWrapper>
                    <StyledH3>Lieblingsstrand</StyledH3>
                    <p>Hier kann ich meinen Lieblingsstrand wählen</p>

                </StyledWrapper>

            <StyledWrapper>
                <StyledH3>Wetterdate</StyledH3>
                <p>Hier werden die Wetterdaten des Lieblingsstands gelistet</p>
            </StyledWrapper>
        </Fragment>
    )
}

const BeachActions = ()  => {
    return  (
        <StyledWrapper>                
            <StyledLink to="/login">Irgendeine Aktion</StyledLink>  
        </StyledWrapper>
    )
}




// ------ COMPONENT ------  //
const Beaches = () => {
    return (
        <Fragment>

            <Header full />

            <StyledBeachesWrapper>
                <BeachHeader />
                <BeachContent />
                <BeachActions />                
            </StyledBeachesWrapper>
        </Fragment>
    )
}

export default Beaches;



// ------ STYLED COMPONENTS ------  //
const StyledBeachesWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;
`