import './App.css';
import { HeaderTag } from './components/Header';
import { Home } from './components/Home';
import { DownButton } from './components/DownButton';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <HeaderTag></HeaderTag>
      <Home></Home>
      <DownButton />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 40px;
`;

export default App;
