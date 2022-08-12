import styled from 'styled-components';
import { Title } from './Title';

export function About() {
  return (
    <Main>
      <Title title={'About'}></Title>
      <Container>
        <Content>
          <img src="image/profile.png"></img>
          <Intro>
            <h2>웹 백엔드 개발자 김혜령입니다.</h2>
            <p>
              node.js를 활용한 서버 개발에 능숙하며, JavaScript와 TypeScript를
              주로 사용하였습니다.
            </p>
            <p>배운 것은 블로그와 노션에 기록하며 공부하고 있습니다.</p>
            <p>
              사용자의 작은 불편함이라도 해결할 수 있는 개발자가 되고싶습니다.
            </p>
          </Intro>
        </Content>
      </Container>
    </Main>
  );
}

const Intro = styled.div`
  text-align: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  animation: background 0.5s;

  @keyframes background {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  p {
    font-size: 1.1rem;
  }
  @media all and (max-width: 850px) {
    p {
      font-size: 1rem;
    }
    h2 {
      font-size: 1.4rem;
    }
  }

  @media all and (max-width: 500px) {
    p {
      font-size: 0.9rem;
      font-weight: 400;
      padding: 0 10px;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  width: 800px;
  height: 70%;
  background-color: rgb(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 220px;
    height: 220px;
    margin: 20px auto;
    border-radius: 50%;
    background: #bababa;
    border: 2px solid gray;
    box-shadow: rgba(14, 30, 37, 0.4) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  @media all and (max-width: 850px) {
    width: 600px;
    height: 60%;
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media all and (max-width: 500px) {
    width: 300px;
    img {
      width: 170px;
      height: 170px;
    }
    height: 60%;
  }
`;

const Content = styled.div`
  display: grid;
  flex-direction: row;
`;
