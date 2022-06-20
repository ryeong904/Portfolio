import './App.css';
import { HeaderTag } from './components/Header';
import { Home } from './components/Home';
import { DownButton } from './components/DownButton';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
// function App() {
//   return (
//     <FullPage>
//       <HeaderTag></HeaderTag>
//       <Slide>
//         <Container>
//           <Home></Home>
//           <DownButton />
//         </Container>
//       </Slide>
//       <Slide>
//         <Container>
//           <Skills></Skills>
//         </Container>
//       </Slide>
//       <Slide>
//         <Container>
//           <Project></Project>
//         </Container>
//       </Slide>
//       <Slide>
//         <Footer></Footer>
//       </Slide>
//     </FullPage>
//   );
// }
function App() {
  return (
    <div>
      <HeaderTag></HeaderTag>
      <Container>
        <Home></Home>
        <DownButton />
      </Container>
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

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 80px;
  // background-color: #03141e;
  // color: #dff6ff;
`;

export default App;
