// My components 
import Header from "./Header";

// My Styled Components
import StyledWrapper from "./styled/StyledWrapper";
import StyledH1, { StyledH2, StyledH3 } from "./styled/StyledHeadlines";
import StyledLink from "./styled/StyledLink";

// External Components 
import styled from "styled-components";
import { Fragment } from "react";
     



// ------ SUB COMPONENTS ------  //

const DashboardHeader = ()  => {
    return  (
        <StyledWrapper>
            <StyledH1>Dashboard</StyledH1>
            <StyledH2>Hallo (NAME)! <br /> Schön das du da bist!</StyledH2>
        </StyledWrapper>
    )
}   

const DashboardContent = ()  => {
    return  (
        <Fragment>
            <StyledWrapper>
                <StyledH3>Mein letzter Post</StyledH3>
                <p>Hier wird der letzte eigene Post gelistet</p>
            </StyledWrapper>

            <StyledWrapper>
                <StyledH3>Mein Lieblingsstrand</StyledH3>
                <p>Hier wird der eigene Lieblingsstand gelistet</p>
            </StyledWrapper>

            <StyledWrapper>
                <StyledH3>Akteuelles von den Freunden</StyledH3>
                <p>Hier wird der letzte Post eines Freundse gelistet</p>
            </StyledWrapper>

            <StyledWrapper>
                <StyledH3>Neues aus der Community</StyledH3>
                <p>Hier wird der letzte öffnetliche Post gelistet</p>
            </StyledWrapper>
        </Fragment>
    )
}

const DashboardActions = ()  => {
    return  (
        <StyledWrapper>                
            <StyledLink to="/login">Irgendeine Aktion</StyledLink>  
        </StyledWrapper>
    )
}


// ------ COMPONENT ------  //
const Dashboard = () => {
    return (
        <Fragment>

            <Header full />

            <StyledDashboardWrapper>
                <DashboardHeader />
                <DashboardContent />
                <DashboardActions /> 
            </StyledDashboardWrapper>
        </Fragment>
    )
}

export default Dashboard;



// ------ STYLED COMPONENTS ------  //
const StyledDashboardWrapper = styled.div`
    background-color: rgba(0, 0, 250, 0.2);
    /* display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%; */
`

