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

                    <StyledHeaderLink to="/dashboard"><div> <FaDharmachakra /> </div></StyledHeaderLink>
                    <StyledHeaderLink to="/my-beach"><div> <FaUmbrellaBeach /> </div></StyledHeaderLink>
                    <StyledHeaderLink to="/bottle-posts"><div> <FaWineBottle /> </div></StyledHeaderLink>
                    <StyledHeaderLink to="/chats"><div> <FaComments /> </div></StyledHeaderLink>
                    <StyledHeaderLink to="/events"><div> <FaCalendarAlt /> </div></StyledHeaderLink>
                    <StyledHeaderLink to="/profile"><div> <FaUserCircle /> </div></StyledHeaderLink>
        
                </StyledHeaderWrapper>
            </StyledStickyHeader>
        )

    } else {
        return (
            <StyledStickyHeader>
                <StyledHeaderWrapper className="header_small">
        
                    <StyledHeaderLink to="/login"><div> <FaUserCircle /> </div></StyledHeaderLink>
        
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
    border-bottom: 1px solid gray;
    z-index: 1000;
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

const StyledHeaderLink  = styled(Link)`
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
