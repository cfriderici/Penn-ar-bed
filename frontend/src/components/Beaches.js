// My components 
import Header from "./Header";


// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Beaches = () => {
    return (
        <StyledBeachesWrapper>
            <Header full />

            <h1>Mein Lieblingsstrand</h1>
            <div>VIDEO</div>
            <div>Pors Theolen</div>
            <div>Tide etc ...</div>

            
        </StyledBeachesWrapper>
    )
}

export default Beaches;



// ------ STYLED COMPONENTS ------  //
const StyledBeachesWrapper = styled.div`
    background-color: rgba(250, 250, 0, 0.2);
`