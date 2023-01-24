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
        font-size: small;
        padding: 0 20px;
    }

    .imageWrapper {
        background-color: rgba(250, 100, 0, 0.2);
        position: relative;

        .post-img {
            width: 100vw;
            max-height: 100vw;
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





    .iconWrapper {
        background-color: rgba(250, 100, 0, 0.2);
        /* width: 100%; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px 0;
        font-size: large;

        &.left {
            /* justify-content: start;
            background-color: rgba(200, 150, 0, 0.6);
            color: blue; */
        }

        .star {
            color: ${props => props.star ? "red" : "black"};
        }

        .edit {
            background-color: rgba(250, 0, 250, 0.6);
            width: 100%;
            /* font-size: small; */
            text-align: right;
        }

        > :link {
            background-color: rgba(0, 250, 250, 1);
            margin-right: 10px;
        }

        > svg {
            margin-right: 10px;

            &:last-of-type {
                background-color: rgba(250, 50, 0, 0.5);
                margin-right: 0;
            }
        }
    }

`


export default StyledWrapper;