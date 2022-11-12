// My components 
import Header from "./Header";
import Slider from "./sub/Slider";
import Text from "./Text";
import StyledH1 from "./styled/StyledHeadlines";


// External Components 
import styled from "styled-components";
import { Fragment } from "react";



// ------ SUB COMPONENTS ------  //
const StartHeader = ()  => {
    return  (
        <StyledH1>Penn-ar-bed</StyledH1>
    )
}  
const StartContent = ()  => {
    return  (
        <Fragment>  

            <Slider />
            <Text />

        </Fragment>
    )
}

// ------ COMPONENT ------  //
const Start = () => {
    return (

        <Fragment>

            <Header />

            <StyledStartWrapper>
                <StartHeader />
                <StartContent />

            </StyledStartWrapper>

        </Fragment>
    )
}

export default Start;



// ------ STYLED COMPONENTS ------  //
const StyledStartWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
`