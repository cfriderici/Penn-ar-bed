import styled from "styled-components";


const StyledWrapper = styled.div`
    background-color: rgba(250, 100, 0, 0.2);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid black;

    .wrapper {
        background-color: rgba(250, 100, 0, 0.2);
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
`


export default StyledWrapper;