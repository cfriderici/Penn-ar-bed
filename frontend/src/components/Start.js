// My components 
import Header from "./Header";

import Headline from "./Headline";
// import Slider from "./Slider";
import Carousel from "./Carousel";
import Text from "./Text";


// External Components 
import styled from "styled-components";
// import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';



// ------ COMPONENT ------  //
const Start = () => {
    return (
        <StyledStartWrapper>
            <Header />
            <Headline />
            {/* <Slider /> */}
            <Carousel />
            <Text />
        </StyledStartWrapper>
    )
}

export default Start;



// ------ STYLED COMPONENTS ------  //
const StyledStartWrapper = styled.div`
    background-color: rgba(250, 0, 0, 0.2);
`