// External Components 
import styled from "styled-components";
import { FaRegTimesCircle, FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";




// ------ COMPONENT ------  //

const StyledProfileImage = () => {
    return (
        <StyledProfileImageWrapper>
            <ImageUploader 
                deleteIcon={ <FaRegTimesCircle className="deleteImg"/> } 
                uploadIcon={ <CiFaceSmile className="addImg"/>  }
            />                
        </StyledProfileImageWrapper>
    )
}

export default StyledProfileImage;




// ------ STYLED COMPONENTS ------  //

const StyledProfileImageWrapper  = styled.div`
    /* background-color: rgba(250, 0, 250, 0.2); */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    .uploader__container {
        /* background-color: rgba(250, 250, 0, 0.2); */
        margin: 10px;

        .uploader__placeholder {
        /* background-color: rgba(0, 250, 0, 0.2); */
        background-color: transparent;
        min-height: 200px;
        min-width: 200px;

            .uploader__btn_wrapper {
            /* background-color: rgba(0, 250, 250, 0.2); */

                .uploader__btn {
                /* background-color: rgba(0, 250, 250, 0.4); */

                    .deleteImg {
                        font-size: x-large;
                    }
                }
            }

            .uploader__file_input_label {
                background-color: lightgray;
                width: 100%;
                height: 100%;
                box-shadow: inset 1px 1px 4px gray;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                .addImg {
                    /* background-color: rgba(0, 50, 20, 0.2); */
                    width: 50%;
                    height: 50%;
                }

                .uploader__file_input {

                }
            }
            
            .uploader__file {
                /* background-color: rgba(0, 250, 0, 0.2); */
                border-radius: 50%;
            }
        }       
    }

`
