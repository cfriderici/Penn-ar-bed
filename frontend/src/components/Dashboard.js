// My components 
// import Post from "./Post";
// import Friendpost from "./Friendpost";
// import Beach from "./Beach";



// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Dashboard = () => {
    return (
        <StyledDashboardWrapper>
            <div>Dein letzter Post</div>
            <div>Dein letzter Freundes-Post</div>
            <div>Dein Lieblingsstrand</div>
        </StyledDashboardWrapper>
    )
}

export default Dashboard;



// ------ STYLED COMPONENTS ------  //
const StyledDashboardWrapper = styled.div`
    background-color: rgba(250, 250, 250, 0.2);
`