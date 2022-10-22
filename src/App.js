import './App.css';
import styled from 'styled-components';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Project } from './components/Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<AboutMe></AboutMe>}></Route>
      </Routes>
      <Routes>
        <Route path="/projects" element={<Project></Project>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
