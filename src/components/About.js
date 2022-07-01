import styled from 'styled-components';
import { Title } from './Title';

export function About() {
  return (
    <Main>
      <Title title={'About'}></Title>
      <Container>
        <Content>
          <img src='image/profile.png'></img>
          <Intro>
            <h2>웹 풀스택 개발자 김혜령입니다.</h2>
            <p>
              대학교에서 <b>웹 프로그래밍 수업</b>을 들으며 웹 개발자가 되기로
              결심했습니다.
            </p>
            <p>프론트엔드, 백엔드 구분하지 않고 개발하는 것을 좋아합니다.</p>
            <p>
              현재는 엘리스 SW 엔지니어 트랙을 통해 웹 개발자에게 필요한
              지식들을 배우고 있습니다.
            </p>
            <p>
              <b>Node.js</b>와 <b>React.js</b>를 이용한 개발에 집중하고
              있습니다.
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

const Interest = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid red;
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
`;

const Container = styled.div`
  width: 800px;
  height: 70%;
  background-color: rgb(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 250px;
    height: 250px;
    margin: 20px auto;
    border-radius: 50%;
    background: gray;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

const Content = styled.div`
  // width: 50%;
  // height: 30%;
  display: grid;
  flex-direction: row;
  // background-color: white;
`;
