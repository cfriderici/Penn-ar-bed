// My components 
import Header from "./Header";

// import Post from "./Post";
// import Friendpost from "./Friendpost";
// import Beach from "./Beach";



// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Dashboard = () => {
    return (
        <StyledDashboardWrapper>

            <Header full />

            <h1>Mein Dashboard</h1>
            <div>Mein letzter Post</div>
            <div>mein letzter Freundes-Post</div>
            <div>Mein Lieblingsstrand</div>

        </StyledDashboardWrapper>
    )
}

export default Dashboard;



// ------ STYLED COMPONENTS ------  //
const StyledDashboardWrapper = styled.div`
    background-color: rgba(250, 250, 250, 0.2);
`