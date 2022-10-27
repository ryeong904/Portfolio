import './App.css';
import styled from 'styled-components';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Project } from './components/Project';
import { Detail } from './components/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<AboutMe></AboutMe>}></Route>
        <Route
          path="/projects/:projectName"
          element={<Detail></Detail>}
        ></Route>
        <Route path="/projects" element={<Project></Project>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
