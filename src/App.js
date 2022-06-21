import './App.css';
import { HeaderTag } from './components/Header';
import { Home } from './components/Home';
import { DownButton } from './components/DownButton';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';

function App() {
  return (
    <div>
      <HeaderTag></HeaderTag>
      <HomeContainer>
        <Home></Home>
        <DownButton />
      </HomeContainer>
      <Container>
        <Skills></Skills>
      </Container>
      <Container>
        <Project></Project>
      </Container>
      <Footer></Footer>
    </div>
  );
}

const HomeContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 80px;
  // background-color: #202024;
  // color: white;
  // scroll-behavior: smooth;
`;

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

export default App;
