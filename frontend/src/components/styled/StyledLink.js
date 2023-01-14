// External Components 
import styled from "styled-components";
import { Link } from 'react-router-dom';


// ------ STYLED COMPONENTS ------  //
const StyledLink  = styled(Link)`
    background-color: rgba(250, 100, 0, 0.4);
    font-size: smaller;
    text-transform: uppercase;
    text-decoration: none!important;
    letter-spacing: 0.01rem;

    /* padding: 10px; */

    /* &:last-of-type {
        margin-left: 10px;
    } */
`

export default StyledLink;