import React from 'react';
import styled from 'styled-components';
import HeroBgAnimation from '../HeroBgAnimation';

// Hero Section Styles
const HeroContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    transform: translate(-50%, -50%);
    overflow: hidden;
    padding: 110px 30px;
    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    text-align: center;
    flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: hsl(0, 0%, 83%);
  margin-bottom: 20px;
`;

// Vision & Mission Section Styles
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 50px;
  background-color: hsl(240, 15%, 9%);
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 19rem;
  background-image: radial-gradient(
      at 88% 40%, hsl(240, 15%, 9%) 0px, transparent 85%
    ),
    radial-gradient(at 49% 30%, hsl(240, 15%, 9%) 0px, transparent 85%),
    radial-gradient(at 14% 26%, hsl(240, 15%, 9%) 0px, transparent 85%),
    radial-gradient(at 0% 64%, hsl(263, 93%, 56%) 0px, transparent 85%),
    radial-gradient(at 41% 94%, hsl(284, 100%, 84%) 0px, transparent 85%),
    radial-gradient(at 100% 99%, hsl(306, 100%, 57%) 0px, transparent 85%);
  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  text-align: center;
  color: white;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

// Mission & Vision Component
const MissionVisionSection = () => {
  return (
    <SectionContainer>
      <CardContainer>
        <Title>Mission</Title>
        <SubTitle>
          We empower individuals with fluid, evolving skills that stay relevant in an ever-changing world. Our focus is on real-world execution, AI-driven learning paths, and industry-aligned mentorship to create unstoppable innovators.
        </SubTitle>
      </CardContainer>
      <CardContainer>
        <Title>Vision</Title>
        <SubTitle>
          We envision a world where education is limitless, decentralized by offering AI-personalized learning and rapid skill acquisition. Our goal is to create a generation of agile thinkers, problem solvers, and self-sustaining professionals who lead the future.
        </SubTitle>
      </CardContainer>
    </SectionContainer>
  );
};

// Hero Component with Mission & Vision Section
const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <Title>EDUTOU Skill Academy</Title>
                    <SubTitle>
                        EDUTOU Skill Academy is a next-gen learning hub designed to equip individuals with real-world, high-demand skills. We focus on AI-driven adaptive learning, immersive virtual experiences, and hands-on training for practical mastery. Our goal is to empower learners for career growth and financial independence.
                    </SubTitle>
                </HeroInnerContainer>
            </HeroContainer>
            
            {/* Added Vision & Mission Section Below Hero */}
            <MissionVisionSection />
        </div>
    );
};

export default Hero;
