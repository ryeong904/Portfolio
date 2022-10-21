import './App.css';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MainContainer>
      <Header></Header>
      <SelfContainer>
        <div>자기소개</div>
        <div>기술 스택 What I do</div>
      </SelfContainer>
    </MainContainer>
  );
}

// Header 배경색 : #749F82

// 전체 컨테이너
const MainContainer = styled.div`
  // 섹션 나누는 코드
  // display: grid;
  // height: 100vh;
`;

// 우측 자기소개 & 기술 스택 컨테이너
const SelfContainer = styled.div`
  // temp
  border: 10px solid red;
  display: grid;
  grid-template-rows: 0.7fr 1fr;
  margin-left: 300px;
`;

export default App;
