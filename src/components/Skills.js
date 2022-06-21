import styled from 'styled-components';
export function Skills() {
  return (
    <Main id="skills">
      <div>
        <h1>Skills</h1>
        <section></section>
      </div>
    </Main>
  );
}

// function Content({ title }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <Box></Box>
//     </div>
//   );
// }

// const Box = styled.div`
//   width: 100px;
//   height: 200px;
//   border: 1px solid black;
// `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 4rem;
    margin-bottom: 10px;
  }
  svg {
    width: 40px;
  }
  section {
    width: 1000px;
    height: 500px;
    // border: 1px solid black;
    background-color: #ededed;
  }
`;
