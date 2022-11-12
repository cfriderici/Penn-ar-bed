import styled from "styled-components";
import Carousel from "./Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";


// ------ COMPONENT ------  //

const Slider = () => {
    return (
        <StyledSliderWrapper>

            <Carousel />
            
        </StyledSliderWrapper>
    )
}

export default Slider;



// ------ STYLED COMPONENTS ------  //

const StyledSliderWrapper = styled.div`
    background-color: rgba(0, 0, 250, 0.2);
    display: flex;    
    flex-direction: column;
    justify-content: flex-end;

    > p {
        background-color: rgba(250, 0, 250, 0.2);
        font-size: smaller;
        text-align: right;
    }    
`