import styled from 'styled-components';
import { useState } from 'react';
import { Modal } from './Modal';
import projectList from '../data/projectList.json';
import { useEffect } from 'react';
import { Title } from './Title';

export function Project() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(projectList[number]);

  useEffect(() => {
    setData(projectList[number]);
  }, [number]);

  const clickHandler = (num) => {
    setNumber(num);
    document.getElementById('modal').style.opacity = 1;
    document.getElementById('modal').style.transform = 'scale(1)';
    document.getElementById('modal').style.zIndex = 2;
  };
  return (
    <Main>
      <Title title={'Projects'}></Title>
      <Container>
        <Content
          onClick={() => {
            clickHandler(4);
          }}
        >
          <img src="image/togefit.PNG" alt="togefit-logo-image"></img>
        </Content>
        <Content
          style={{ backgroundColor: '#333333' }}
          onClick={() => {
            clickHandler(0);
          }}
        >
          <img src="image/logo.png" alt="shoppingmall-logo-image"></img>
        </Content>
        <Content
          onClick={() => {
            clickHandler(1);
          }}
        >
          <img src="image/diary.PNG" alt="diary-main-image"></img>
        </Content>
        <Content
          onClick={() => {
            clickHandler(2);
          }}
        >
          <img src="image/portfolio-s.PNG" alt="portfolio-main-image"></img>
        </Content>
        <Content
          onClick={() => {
            clickHandler(3);
          }}
        >
          <img src="image/dashboard.png" alt="dashboard-main-image"></img>
        </Content>
      </Container>
      <Modal props={data}></Modal>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s;
  animation: background 0.5s;

  @keyframes background {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  width: 800px;
  height: 60%;
  background-color: rgb(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 20px;
  justify-items: center;
  padding: 30px;
  overflow: auto;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  height: 240px;
  cursor: pointer;
  background-color: white;
  transition: all 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    transform: scale(1.03);
  }
  img {
    width: 100%;
  }
  p {
    font-size: 39px;
    border: 1px solid black;
    padding: 6px 18px;
  }
`;
