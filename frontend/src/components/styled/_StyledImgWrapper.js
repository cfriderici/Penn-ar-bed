// External Components 
import styled from "styled-components";


// ------ STYLED COMPONENTS ------  //
const StyledImgWrapper  = styled.div`
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

    .avatarButton {
        /* background-color: transparent; */
        background-color: rgba(0, 200, 0, 0.2);
        border: none;
        width: 100%;
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

        .avatarInput {
            /* display: none; */
        }

        .post-img {
            width: 100%;
            max-height: calc(100vw - 16px);
            object-fit: cover;
        }

        .profile-img {
            position: absolute;
            top: 5%;
            right: 5%;
            width: 25vw;
            height: 25vw;
            object-fit: cover;
            border-radius: 50%;
            border: 3px solid white;
        }
    }

`

export default StyledImgWrapper;