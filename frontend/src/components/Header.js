// My components 
import styled from "styled-components";


// External Components 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



// ------ COMPONENT ------  //

const Header = () => {
    return (
        <StyledHeaderWrapper>
            <BrowserRouter>

                <div>LOGIN</div>
                <div>BLIB</div>

                <Link to="/">START</Link>

            </BrowserRouter>            
        </StyledHeaderWrapper>
    )
}

export default Header;



// ------ STYLED COMPONENTS ------  //

const StyledHeaderWrapper = styled.div`
    background-color: rgba(250, 0, 250, 0.2);
    color: red;
    display: flex;
    justify-content: flex-end;
    text-align: center;

    > div {
        background-color: rgba(250, 0, 250, 0.2);
        width: 50px;
        height: 50px;
        margin: 10px;
    }    
`