// My components 
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
const EventHeader = ()  => {
    return  (
        <StyledWrapper>
            <StyledH1>Events</StyledH1>
            {/* <StyledH2>Ganz schön was los hier!</StyledH2> */}
        </StyledWrapper>
    )
}  

// CONTENT
const EventContent = ({ title, text, postId })  => {
    return  (
        <Fragment>
            <StyledWrapper>
                <StyledH3>Fest Noz</StyledH3>
                <div>Hier werden alle Feste gelistet</div>
            </StyledWrapper>

            <StyledWrapper>
                <StyledH3>Troc & Puces</StyledH3>
                <div>Hier werden alle Trödelmärkte gelistet</div>
            </StyledWrapper>

            <StyledWrapper>
                <StyledH3>Wochenmärkte</StyledH3>
                <div>Hier kann man einkaufen</div>
            </StyledWrapper>
        </Fragment>
    )
}

// ACTIONS
const EventActions = ()  => {
    return  (
        <StyledWrapper>                
            <StyledLink to="/login">Irgendeine Aktion</StyledLink>  
        </StyledWrapper>
    )
}



// ------ COMPONENT ------  //
const Events = () => {
    return (
        <Fragment>

            <Header full />

            <StyledEventsWrapper>
                <EventHeader />
                <EventContent />
                <EventActions /> 
            </StyledEventsWrapper>
        </Fragment>
    )
}

export default Events;



// ------ STYLED COMPONENTS ------  //
const StyledEventsWrapper = styled.div`
    background-color: rgba(100, 150, 150, 0.2);
`