// External Components 
import styled from "styled-components";
import { FaRegTimesCircle, FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";




// ------ STYLED COMPONENTS ------  //

const StyledUploadImageWrapper  = styled.div`
    background-color: rgba(0, 200, 0, 0.2);
    /* width: 50vw; */
    /* height: 50vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-bottom: 30px;
    /* border: 1px solid black; */
    /* border-radius: 50%; */

    .uploadImagerButton {
        /* background-color: transparent; */
        border: none;
        /* border: dashed 1px black; */
        /* width: 50vw; */
        /* height: 50vw; */
        padding: 0;

        .avatarImage {
            width: 50vw;
            height: 50vw;
            object-fit: cover;
            border: 5px solid white;
            border-radius: 50%;
        }

        .postImage {
            width: 100%;
        }

        .uploadImagerInput {
            /* display: none; */
        }
    }

`

export default StyledUploadImageWrapper;