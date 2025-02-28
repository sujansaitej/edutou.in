import React, { useState } from 'react'
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../Card/ProjectCard.jsx'

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    padding: 20px 0; /* Added padding to the top and bottom of the container */
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 30px 20px 120px 20px; /* Adjusted padding for better spacing */
    gap: 20px; /* Increased gap for better spacing */
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 20px; /* Adjusted padding for medium screens */
        padding-bottom: 100px; /* Keep bottom padding consistent */
    }
`;

export const Title = styled.div`
    font-size: 48px; /* Increased font size for title */
    text-align: center;
    font-weight: 700; /* Increased font weight for title */
    margin-top: 30px; /* Increased margin top for title */
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 960px) {
        font-size: 42px; /* Adjusted font size for medium screens */
        margin-top: 20px; /* Adjusted margin top for medium screens */
    }
    @media (max-width: 768px) {
        font-size: 36px; /* Adjusted font size for tablet screens */
        margin-top: 15px; /* Adjusted margin top for tablet screens */
    }
    @media (max-width: 640px) {
        margin-top: 10px; /* Adjusted margin top for mobile screens */
        font-size: 32px; /* Adjusted font size for mobile screens */
    }
`;

export const Desc = styled.div`
    font-size: 20px; /* Increased font size for description */
    text-align: center;
    max-width: 700px; /* Increased max-width for description */
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 20px; /* Increased margin top for description */
    line-height: 1.6; /* Added line height for better readability */
    @media (max-width: 960px) {
        font-size: 19px; /* Adjusted font size for medium screens */
        margin-top: 15px; /* Adjusted margin top for medium screens */
        max-width: 600px; /* Adjusted max-width for medium screens */
    }
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 18px; /* Adjusted font size for tablet screens */
    }
    @media (max-width: 640px) {
        margin-top: 10px;
        font-size: 16px; /* Adjusted font size for mobile screens */
        max-width: 90%; /* Make description width responsive */
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 18px; /* Increased font size for toggle buttons */
    border-radius: 12px;
    font-weight: 500;
    margin: 30px 0px; /* Increased margin for toggle button group */
    @media (max-width: 960px) {
        font-size: 17px; /* Adjusted font size for medium screens */
        margin: 25px 0px; /* Adjusted margin for medium screens */
    }
    @media (max-width: 768px) {
        font-size: 16px; /* Adjusted font size for tablet screens */
        margin: 20px 0px; /* Adjusted margin for tablet screens */
    }
    @media (max-width: 640px) {
        font-size: 14px; /* Adjusted font size for mobile screens */
        margin: 15px 0px; /* Adjusted margin for mobile screens */
        flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
        justify-content: center; /* Center buttons on smaller screens */
    }
`

export const ToggleButton = styled.div`
    padding: 10px 20px; /* Increased padding for toggle buttons */
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active==="true" && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 8px 15px; /* Adjusted padding for tablet screens */
    }
    @media (max-width: 640px) {
        padding: 8px 12px; /* Adjusted padding for mobile screens */
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: grid; /* Changed to grid layout */
    grid-template-columns: repeat(3, 1fr); /* 3 columns by default */
    grid-gap: 35px; /* Increased grid gap for better spacing */
    @media (max-width: 1280px) { /* Adjusted media query breakpoint for larger tablets/smaller desktops */
        grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
        grid-gap: 30px; /* Adjusted grid gap for medium screens */
    }
    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr); /* Still 2 columns on smaller tablets */
        grid-gap: 25px; /* Adjusted grid gap for smaller tablets */
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr); /* 1 column on mobile screens */
        grid-gap: 20px; /* Adjusted grid gap for mobile screens */
    }
    @media (max-width: 640px) {
        grid-gap: 15px; /* Further reduced grid gap for smaller mobile screens */
    }
`;

const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup >
                    {toggle === 'all' ?
                        <ToggleButton active="true" value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                        :
                        <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'web app' ?
                        <ToggleButton active="true" value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
                        :
                        <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'android app' ?
                        <ToggleButton active="true" value="android app" onClick={() => setToggle('android app')}>ANDROID APPS</ToggleButton>
                        :
                        <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APPS</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'machine learning' ?
                        <ToggleButton active="true" value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING MODELS</ToggleButton>
                        :
                        <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING MODELS</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'games' ?
                        <ToggleButton active="true" value="games" onClick={() => setToggle('games')}>GAMES</ToggleButton>
                        :
                        <ToggleButton value="games" onClick={() => setToggle('games')}>GAMES</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'selenium' ?
                        <ToggleButton active="true" value="selenium" onClick={() => setToggle('selenium')}>SELENIUM PROJECTS</ToggleButton>
                        :
                        <ToggleButton value="selenium" onClick={() => setToggle('selenium')}>SELENIUM PROJECTS</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'blockchain' ?
                        <ToggleButton active="true" value="blockchain" onClick={() => setToggle('blockchain')}>WEB3/BLOCKCHAIN APPS</ToggleButton>
                        :
                        <ToggleButton value="blockchain" onClick={() => setToggle('blockchain')}>WEB3/BLOCKCHAIN APPS</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'chrome extension' ?
                        <ToggleButton active="true" value="chrome extension" onClick={() => setToggle('chrome extension')}>CHROME EXTENSIONS</ToggleButton>
                        :
                        <ToggleButton value="chrome extension" onClick={() => setToggle('chrome extension')}>CHROME EXTENSIONS</ToggleButton>
                    }
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' && projects
                        .map((project, index) => (
                            <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                    {projects
                        .filter((item) => item.category == toggle)
                        .map((project, index) => (
                            <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects