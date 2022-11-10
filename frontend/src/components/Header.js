// My components 
import styled from "styled-components";


// External Components 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaLifeRing, FaRegCompass, FaDharmachakra, FaFish, FaSwimmer, FaUmbrellaBeach, FaCalendarAlt, FaComment, FaCommentDots, FaComments, FaRegHeart, FaRegShareSquare, FaRegStar, FaUserCircle, FaRegPlusSquare, FaWineBottle } from "react-icons/fa";



// ------ COMPONENT ------  //

const Header = ({ full }) => {

    if(full) {
        return (
            <StyledStickyHeader>
                <StyledHeaderWrapper>

                    <StyledLink to="/dashboard"><div> <FaDharmachakra /> </div></StyledLink>
                    <StyledLink to="/my-beach"><div> <FaUmbrellaBeach /> </div></StyledLink>
                    <StyledLink to="/bottle-posts"><div> <FaWineBottle /> </div></StyledLink>
                    <StyledLink to="/chats"><div> <FaComments /> </div></StyledLink>
                    <StyledLink to="/events"><div> <FaCalendarAlt /> </div></StyledLink>
                    <StyledLink to="/profile"><div> <FaUserCircle /> </div></StyledLink>
        
                </StyledHeaderWrapper>
            </StyledStickyHeader>
        )

    } else {
        return (
            <StyledStickyHeader>
                <StyledHeaderWrapper className="header_small">
        
                    <StyledLink to="/checkin"><div> <FaUserCircle /> </div></StyledLink>
        
                </StyledHeaderWrapper>
            </StyledStickyHeader>
        )
    }
}

export default Header;



// ------ STYLED COMPONENTS ------  //

const StyledStickyHeader = styled.div`
    background: white;
    position: sticky;
    top: 0px;
    padding-bottom: 8px;
`

const StyledHeaderWrapper = styled.div`
    /* background-color: rgba(250, 0, 250, 0.2); */
    color: red;
    display: flex;
    justify-content: space-between;

    &.header_small {
        justify-content: flex-end;
    }
`

const StyledLink  = styled(Link)`
    /* background-color: rgba(250, 0, 250, 0.2); */
    font-size: xx-large;
    text-transform: uppercase;
    color: black;

    &:hover, 
    &:active, 
    &:focus {
        color: red;
    };
`
