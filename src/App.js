import './App.css';
import { HeaderTag } from './components/Header';
import { Home } from './components/Home';
import { DownButton } from './components/DownButton';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderTag></HeaderTag>

      <Routes>
        <Route
          path='/'
          element={
            <HomeContainer>
              <Home></Home>
            </HomeContainer>
          }
        ></Route>
        <Route
          path='/skills'
          element={
            <HomeContainer>
              <Skills></Skills>
            </HomeContainer>
          }
        ></Route>
        <Route
          path='/project'
          element={
            <HomeContainer>
              <Project></Project>
            </HomeContainer>
          }
        ></Route>
      </Routes>
      {/* <Container>
        <Home></Home>
        <DownButton />
      </Container>
      <Container>
        <Skills></Skills>
      </Container>
      <Container>
        <Project></Project>
      </Container>
      <Footer></Footer> */}
    </BrowserRouter>
  );
}

const HomeContainer = styled.div`
  height: 100vh;
  background-image: url('image/background.jpg');
  background-size: cover;
`;

export default App;
