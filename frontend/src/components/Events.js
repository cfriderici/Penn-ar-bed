// My components 
import Header from "./Header";


// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Events = () => {
    return (
        <StyledEventsWrapper>
            <Header full />

            <h1>Meine Events</h1>
            <div>tolle Events</div>
            <div>Text ...</div>
            
        </StyledEventsWrapper>
    )
}

export default Events;



// ------ STYLED COMPONENTS ------  //
const StyledEventsWrapper = styled.div`
    background-color: rgba(0, 0, 250, 0.2);
`