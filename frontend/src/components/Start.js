// My components 
import Headline from "./Headline";
import Slider from "./Slider";
import Text from "./Text";


// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Start = () => {
    return (
        <StyledStartWrapper>
            <Headline />
            <Slider />
            <Text />
        </StyledStartWrapper>
    )
}

export default Start;



// ------ STYLED COMPONENTS ------  //
const StyledStartWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
`