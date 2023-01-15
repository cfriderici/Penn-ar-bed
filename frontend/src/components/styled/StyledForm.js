import styled from "styled-components";


const StyledForm = styled.form`
    background-color: rgba(250, 100, 0, 0.4);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;

    .loginError {
        background-color: rgba(250, 100, 0, 0.4);
        margin: 10px;
        text-align: center;
    }
`

export default StyledForm;