// My components 
// import Header from "./Header";


// External Components 
import styled from "styled-components";
     


// ------ COMPONENT ------  //
const Impressum = () => {
    return (
        <StyledImpressumWrapper>

            <h1>Impressum</h1>
            
            <p>Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?</p> 
            
        </StyledImpressumWrapper>
    )
}

export default Impressum;



// ------ STYLED COMPONENTS ------  //
const StyledImpressumWrapper = styled.div`
    background-color: rgba(50, 50, 50, 0.2);
`