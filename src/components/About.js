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
              Database 설계하는 것을 좋아하며, REST API를 제작하는 것에 관심이
              많습니다.
            </p>
            <p>
              주로 Node.js를 사용해 서버 개발을 했으며, 앞으로는 Java Spring을
              공부할 예정입니다.
            </p>
            <p>현재는 Docker와 Kubernetes를 공부하고 있습니다.</p>
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
    height: 50%;
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
