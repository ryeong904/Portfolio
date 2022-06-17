import './App.css';
import { HeaderTag } from './components/Header';
import { Home } from './components/Home';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <HeaderTag></HeaderTag>
      <Home></Home>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr;
`;

export default App;
