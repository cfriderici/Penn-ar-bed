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

            {/* <StyledStickyHeader> */}
                <Header full />
            {/* </StyledStickyHeader> */}

            <h1>Mein Dashboard</h1>
            <div>Mein letzter Post</div>
            <div>mein letzter Freundes-Post</div>
            <div>Mein Lieblingsstrand</div>
            <p>Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?</p> 
            <p>Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?</p> 

        </StyledDashboardWrapper>
    )
}

export default Dashboard;



// ------ STYLED COMPONENTS ------  //
const StyledDashboardWrapper = styled.div`
    background-color: rgba(20, 20, 20, 0.2);
`

// const StyledStickyHeader = styled.div`
//     background-color: rgba(50, 50, 50, 0.2);
//     background: white;
//     position: sticky;
//     top: 8px;
//     padding-bottom: 8px;
// `