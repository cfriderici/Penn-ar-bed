import styled from "styled-components";



// ------ COMPONENT ------  //

const Slider = () => {
    return (
        <StyledSliderWrapper>

            <img src={ require('../img/IMG_2937.JPG') } className="img" alt="img" />
            <p>Christina / Baie des Trépassés / 02.02.2022</p>
            
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