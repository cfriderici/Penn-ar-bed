// External Components 
import styled from "styled-components";


//Input
export const StyledInputWrapper = styled.div`
    background-color: white;
    background-color: rgba(0, 250, 0, 0.2);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 4px;
    box-shadow: inset 1px 1px 4px gray;
    padding: 6px;
    margin-bottom: 30px;

    @media only screen and (min-width: 992px) {
        width: 50%;
    }
`

const StyledInput = styled.input`
    background-color: transparent;
    background-color: rgba(0, 250, 0, 0.4);
    width: 100%;
    border: none;
    outline: none;
`


//textarea

export const StyledTextarea = styled.textarea`
    background-color: transparent;
    background-color: rgba(0, 0, 250, 0.1);
    width: 100%;
    border: none;
    outline: none;
`

export default StyledInput;