// External Components 
import { FaPen } from "react-icons/fa";
import styled from "styled-components";
import StyledImgWrapper from "../styled/StyledImgWrapper";

// REF-HOOK in der jeweiligen Komponente importieren 
// import { useRef } from "react";


// ------ COMPONENT ------  //

const Input = ( /*{ addTodo } */ ) => {
    // const todoNameRef = useRef();

    // const newTodoItem = () => {
    //     if (todoNameRef.current.value !== "") {            
    //         addTodo(todoNameRef.current.value);
    //         todoNameRef.current.value = "";
    //     }
    //   }

    // const handleAddClick = () => {
    //     newTodoItem();
    // }

    // const handleAddKeyPress = e => {
    //     if (e.keyCode === 13) {
    //         newTodoItem();
    //     }
    // }
    
    
    return (
        <StyledInputWrapper>

            <StyledInput placeholder="" /*ref={todoNameRef} onKeyDown={handleAddKeyPress} */ ></StyledInput>
            
            <StyledImgWrapper> 
                <FaPen  /* onClick={handleAddClick} */  /> 
            </StyledImgWrapper>

        </StyledInputWrapper>
    );
}

export default Input;



// ------ STYLED COMPONENTS ------  //

const StyledInputWrapper = styled.div`
    background-color: white;
    background-color: rgba(0, 250, 0, 0.4);
    /* width: 80%; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    background-color: rgba(0, 250, 0, 0.2);
    width: 100%;
    border: none;
    outline: none;
`