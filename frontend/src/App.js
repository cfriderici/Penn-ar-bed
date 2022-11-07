// My components 
import Header from "./components/Header";
import Start from "./components/Start";
import Checkin from "./components/Checkin";
import Footer from "./components/Footer";


// External Components 
import './App.css';
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



// ------ MAIN COMPONENT ------  //
function App() {
  return (


      <StyledAppWrapper>
      
        <Header />

        <BrowserRouter>
          <Routes>

            <Route path="/" element={ <Start /> } />
            <Route path="/checkin" element={ <Checkin /> } />
            <Route path="/test" element={ <div>Test-Route</div> } />

          </Routes>
          <Link to="/"><Footer /></Link>
        </BrowserRouter>

      </StyledAppWrapper>

  );
}

export default App;



// ------ STYLED COMPONENTS ------  //
const StyledAppWrapper = styled.div `
    background-color: rgba(250, 250, 0, 0.2);
`