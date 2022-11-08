// My components 
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";


// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Checkin = () => {
    return (
        <StyledCheckinWrapper>
            <Header  />

            <Login />
            <Register />
        </StyledCheckinWrapper>
    )
}

export default Checkin;



// ------ STYLED COMPONENTS ------  //
const StyledCheckinWrapper = styled.div`
    background-color: rgba(250, 250, 0, 0.2);
`