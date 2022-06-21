import styled from 'styled-components';
export function Skills() {
  return (
    <Main id="skills">
      <h1>SKILLS</h1>
      <section>
        <Content>
          <h2>Frontend</h2>
          <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </Content>
        <Content>
          <h2>Backend</h2>
          <div>
            <p>Node.js</p>
            <p>Python</p>
            <p>Express.js</p>
            <p>PHP</p>
          </div>
        </Content>
        <Content>
          <h2>DB</h2>
          <div></div>
        </Content>
        <Content>
          <h2>Mobile</h2>
          <div></div>
        </Content>
        <Content>
          <h2>Version Control</h2>
          <div></div>
        </Content>
      </section>
    </Main>
  );
}

const Content = styled.div`
  div {
    width: 140px;
    height: 400px;
    // border: 1px solid #333333;
    background-color: white;
    text-align: center;
  }

  div p {
    font-size: 1.1rem;
    font-weight: 300;
  }

  div p:first-of-type {
    padding-top: 20px;
  }

  h2 {
    text-align: center;
    font-weight: 200;
    font-size: 1.3rem;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  animation: fadeInUp 1s;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 20%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  svg {
    width: 40px;
  }
  section {
    width: 1000px;
    height: 650px;
    // border: 1px solid black;
    background-color: #ededed;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
