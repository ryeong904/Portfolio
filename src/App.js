import './App.css';
import { HeaderTag } from './components/Header';
import { Home } from './components/Home';
import { DownButton } from './components/DownButton';
import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
function App() {
  return (
    <FullPage>
      <Slide>
        <Container>
          <HeaderTag></HeaderTag>
          <Home></Home>
          <DownButton />
        </Container>
      </Slide>
      <Slide>
        <Container>
          <HeaderTag></HeaderTag>
          <Home></Home>
          <DownButton />
        </Container>
      </Slide>
    </FullPage>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 40px;
`;

export default App;
