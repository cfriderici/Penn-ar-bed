// External Components 
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import StyledImgWrapper from "../styled/StyledImgWrapper";


const Sort = () => {        
    return (
        <StyledSortWrapper>

            <StyledSort>SORT</StyledSort>

            <StyledImgWrapper> 
                <MdOutlineKeyboardArrowDown  /> 
            </StyledImgWrapper>

        </StyledSortWrapper>


    );
}

export default Sort;




// ------ STYLED COMPONENTS ------  //

const StyledSortWrapper = styled.div`
    background-color: white;
    background-color: rgba(0, 50, 250, 0.2);
    /* width: 80%; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    /* box-shadow: inset 1px 1px 4px gray; */
    padding: 6px;
    margin-bottom: 30px;
`

const StyledSort = styled.div`
    background-color: transparent;
    background-color: rgba(0, 50, 250, 0.2);
    /* width: 100%; */
    /* border: none; */
    /* outline: none; */
`