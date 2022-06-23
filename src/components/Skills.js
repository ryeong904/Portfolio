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
            <p>jQuery</p>
            <p>React</p>
          </div>
        </Content>
        <Content>
          <h2>Backend</h2>
          <div>
            <p>Node.js</p>
            <p>Python</p>
            <p>Express.js</p>
            <p>PHP</p>
            <p>FastAPI</p>
          </div>
        </Content>
        <Content>
          <h2>DB</h2>
          <div>
            <p>MySQL</p>
            <p>MongoDB</p>
          </div>
        </Content>
        <Content>
          <h2>Mobile</h2>
          <div>
            <p>Java</p>
            <p>Android</p>
          </div>
        </Content>
        <Content>
          <h2>Version Control</h2>
          <div>
            <p>Git</p>
            <p>GitLab</p>
          </div>
        </Content>
      </section>
    </Main>
  );
}

const Content = styled.div`
  border-bottom: 1px solid #333333;
  display: flex;
  width: 75%;
  flex-direction: column;

  &:last-of-type {
    border-bottom: none;
  }
  div {
    width: 75%;
    min-width: 75px;
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  div p {
    font-size: 1.3rem;
    font-weight: 300;
    background-color: #ededed;
    margin: 0px 10px 10px 0px;

    padding: 5px;
    border-radius: 10%;
  }

  h2 {
    // text-align: center;
    font-weight: 500;
    font-size: 1.6rem;
    margin: 10px 0;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
  background-color: white;
  margin: 0 auto;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 10px;
    // color: #333333;
  }
  svg {
    width: 40px;
  }
  section {
    width: 55%;
    // border-radius: 2%;
    // height: 500px;
    // border: 1px solid #d6d6d6;
    // border: 1px solid #333333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;
