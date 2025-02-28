import './App.css'
import styled, { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from "./components/Navbar/index"
import Hero from "./components/HeroSection/index"
import Skills from "./components/Skills/index"
import Projects from './components/Projects/index.jsx';
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import ProjectDetails from "./components/ProjectDetails/index.jsx";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Body = styled.div`
background-color: ${ ({ theme }) => theme.bg };
width: 100%;
height: 100%;
overflow-x: hidden;
`;

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const PageContainer = styled.div` /* New PageContainer Component */
  padding-bottom: 120px; /* Adjust this value to control the gap */
`;

function App() {
  const [ darkMode, setDarkMode ] = useState(true);
  const [ openModal, setOpenModal ] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/" element={ // Home page route
              <>
                <Hero />
              </>
            } />
            <Route path="/skills" element={
              <PageContainer>
                <Wrapper>
                  <Skills />
                </Wrapper>
              </PageContainer>
            } />
            <Route path="/projects" element={
              <PageContainer>
                <Projects openModal={openModal} setOpenModal={setOpenModal} />
              </PageContainer>
            } />
            <Route path="/contact" element={
              <PageContainer> 
                <Wrapper>
                  <Contact />
                </Wrapper>
              </PageContainer>
            } />
          </Routes>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App;