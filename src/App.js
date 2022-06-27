import './App.css';
import { HeaderTag } from './components/Header';
import { Home } from './components/Home';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import styled from 'styled-components';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderTag></HeaderTag>
      <Routes>
        <Route
          path="/"
          element={
            <HomeContainer>
              <Home></Home>
            </HomeContainer>
          }
        ></Route>
        <Route
          path="/skills"
          element={
            <HomeContainer>
              <Skills></Skills>
            </HomeContainer>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <HomeContainer>
              <Project></Project>
            </HomeContainer>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

const HomeContainer = styled.div`
  height: 100vh;
  background-image: url('image/background.jpg');
  background-size: cover;
`;

export default App;
