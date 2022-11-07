import styled from "styled-components";



// ------ COMPONENT ------  //

const Text = () => {
    return (
        <StyledTextWrapper>

            <h2>Überall dieselbe alte Leier!</h2>
            <p>
            Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden.
            </p>            
        </StyledTextWrapper>
    )
}

export default Text;



// ------ STYLED COMPONENTS ------  //

const StyledTextWrapper = styled.div`
    background-color: rgba(0, 250, 250, 0.2);  
`