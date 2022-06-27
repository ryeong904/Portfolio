import styled from 'styled-components';
import { useState } from 'react';
import { Modal } from './Modal';
import projectList from '../data/projectList.json';
import { useEffect } from 'react';

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
      <h1>Projects</h1>
      <Container>
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
          <img src="image/diary.png" alt="diary-main-image"></img>
        </Content>
        <Content
          onClick={() => {
            clickHandler(2);
          }}
        >
          <img src="image/portfolio.png" alt="portfolio-main-image"></img>
        </Content>
        <Content
          onClick={() => {
            clickHandler(3);
          }}
        >
          <img src="image/dashboard.PNG"></img>
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

  & h1 {
    font-size: 2.7rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
    text-shadow: 3px 3px 1px black;
  }
`;

const Container = styled.div`
  width: 60%;
  height: 70%;
  background-color: rgb(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  padding: 40px 20px 0px 20px;
  overflow: auto;
  z-index: 1;
`;

const Content = styled.div`
  width: 350px;
  height: 300px;
  cursor: pointer;
  background-color: white;
  transition: all 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

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
