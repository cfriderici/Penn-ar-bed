// My components 
import styled from "styled-components";


// External Components 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



// ------ COMPONENT ------  //

const Header = ({ full }) => {

    if(full) {
        return (
            <StyledHeaderWrapper>

                <StyledLink to="/dashboard"><div>Dash board</div></StyledLink>
                <StyledLink to="/my-beach"><div>Beaches</div></StyledLink>
                <StyledLink to="/bottle-posts"><div>Posts</div></StyledLink>
                <StyledLink to="/chats"><div>Chats</div></StyledLink>
                <StyledLink to="/events"><div>Events</div></StyledLink>
                <StyledLink to="/profile"><div>Profile</div></StyledLink>
    
            </StyledHeaderWrapper>
        )

    } else {
        return (
            <StyledHeaderWrapper>
    
                <StyledLink to="/checkin"><div>Checkin</div></StyledLink>
    
            </StyledHeaderWrapper>
        )
    }
}

export default Header;



// ------ STYLED COMPONENTS ------  //

const StyledHeaderWrapper = styled.div`
    background-color: rgba(250, 0, 250, 0.2);
    color: red;
    display: flex;
    justify-content: space-between;
    text-align: center;   
`

const StyledLink  = styled(Link)`
    background-color: rgba(250, 0, 250, 0.2);
    width: 50px;
    height: 50px;
    font-size: smaller;
    text-transform: uppercase;
`
