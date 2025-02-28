import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0; /* Added vertical padding to the container section */
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px; /* Increased max-width for larger screens */
    gap: 20px; /* Increased gap for better spacing */
    padding: 0 20px; /* Added horizontal padding to the wrapper */
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 0 15px; /* Adjusted horizontal padding for medium screens */
        gap: 15px; /* Adjusted gap for medium screens */
    }
`;

export const Title = styled.div`
    font-size: 48px; /* Increased font size for title */
    text-align: center;
    font-weight: 700; /* Increased font weight for title */
    margin-top: 30px; /* Increased margin top for title */
    color: ${ ({ theme }) => theme.text_primary };
    @media (max-width: 960px) {
        font-size: 42px; /* Adjusted font size for medium screens */
        margin-top: 25px; /* Adjusted margin top for medium screens */
    }
    @media (max-width: 768px) {
    margin-top: 20px; /* Adjusted margin top for tablet screens */
        font-size: 36px; /* Adjusted font size for tablet screens */
    }
    @media (max-width: 640px) {
        margin-top: 15px; /* Adjusted margin top for mobile screens */
        font-size: 32px; /* Adjusted font size for mobile screens */
    }
`;

export const Desc = styled.div`
    font-size: 20px; /* Increased font size for description */
    text-align: center;
    max-width: 700px; /* Increased max-width for description */
    color: ${ ({ theme }) => theme.text_secondary };
    margin-top: 20px; /* Increased margin top for description */
    line-height: 1.6; /* Improved line height for readability */
    @media (max-width: 960px) {
        font-size: 19px; /* Adjusted font size for medium screens */
        margin-top: 15px; /* Adjusted margin top for medium screens */
        max-width: 650px; /* Adjusted max-width for medium screens */
    }
    @media (max-width: 768px) {
        font-size: 18px; /* Adjusted font size for tablet screens */
        margin-top: 12px; /* Adjusted margin top for tablet screens */
        max-width: 90%; /* Make description width responsive */
    }
    @media (max-width: 640px) {
        font-size: 16px; /* Adjusted font size for mobile screens */
        margin-top: 10px; /* Adjusted margin top for mobile screens */
    }
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px; /* Increased margin top for SkillsContainer */
    gap: 35px; /* Increased gap for better spacing */
    justify-content: center;
    margin-bottom: 60px; /* Increased margin bottom for SkillsContainer */
    @media (max-width: 960px) {
        margin-top: 30px; /* Adjusted margin top for medium screens */
        gap: 30px; /* Adjusted gap for medium screens */
        margin-bottom: 50px; /* Adjusted margin bottom for medium screens */
    }
    @media (max-width: 768px) {
        margin-top: 25px; /* Adjusted margin top for tablet screens */
        gap: 25px; /* Adjusted gap for tablet screens */
        margin-bottom: 40px; /* Adjusted margin bottom for tablet screens */
    }
    @media (max-width: 640px) {
        margin-top: 20px; /* Adjusted margin top for mobile screens */
        gap: 20px; /* Adjusted gap for mobile screens */
        margin-bottom: 30px; /* Adjusted margin bottom for mobile screens */
    }
`;

const Skill = styled.div`
    max-width: 550px; /* Increased max-width for Skill cards */
    background: ${ ({ theme }) => theme.card };
    border: 0.1px solid #854CE6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 25px 40px; /* Increased padding for Skill cards */
    transition: transform 0.3s ease; /* Added transition for hover effect */
    &:hover {
        transform: translateY(-5px); /* Added slight lift on hover */
        box-shadow: rgba(23, 92, 230, 0.25) 0px 8px 30px; /* Enhanced shadow on hover */
    }
    @media (max-width: 960px) {
        max-width: 450px; /* Adjusted max-width for medium screens */
        padding: 20px 35px; /* Adjusted padding for medium screens */
    }
    @media (max-width: 768px) {
        max-width: 400px; /* Adjusted max-width for tablet screens */
        padding: 15px 30px; /* Adjusted padding for tablet screens */
    }
    @media (max-width: 640px) {
        max-width: 100%; /* Make Skill cards full width on mobile */
        padding: 20px; /* Adjusted padding for mobile screens */
    }
`;

const SkillTitle = styled.h2`
    font-size: 32px; /* Increased font size for SkillTitle */
    font-weight: 700; /* Increased font weight for SkillTitle */
    color: ${ ({ theme }) => theme.text_secondary };
    margin-bottom: 25px; /* Increased margin bottom for SkillTitle */
    text-align: center;
    @media (max-width: 768px) {
        font-size: 28px; /* Adjusted font size for tablet screens */
        margin-bottom: 20px; /* Adjusted margin bottom for tablet screens */
    }
    @media (max-width: 640px) {
        font-size: 24px; /* Adjusted font size for mobile screens */
        margin-bottom: 15px; /* Adjusted margin bottom for mobile screens */
    }
`

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px; /* Increased gap for SkillList items */
    margin-bottom: 25px; /* Increased margin bottom for SkillList */
    @media (max-width: 768px) {
        gap: 12px; /* Adjusted gap for tablet screens */
        margin-bottom: 20px; /* Adjusted margin bottom for tablet screens */
    }
    @media (max-width: 640px) {
        gap: 10px; /* Adjusted gap for mobile screens */
        margin-bottom: 15px; /* Adjusted margin bottom for mobile screens */
    }
`

const SkillItem = styled.div`
    font-size: 18px; /* Increased font size for SkillItem */
    font-weight: 400;
    color: ${ ({ theme }) => theme.text_primary + 80 };
    border: 1.5px solid ${ ({ theme }) => theme.text_primary + 80 }; /* Increased border width */
    border-radius: 12px;
    padding: 14px 20px; /* Increased padding for SkillItem */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* Increased gap for SkillItem content */
    transition: background-color 0.3s ease, color 0.3s ease; /* Added transition for hover effect */
    &:hover {
        background-color: ${ ({ theme }) => theme.primary }; /* Changed background on hover */
        color: ${ ({ theme }) => theme.card }; /* Changed text color on hover */
        border-color: ${ ({ theme }) => theme.primary }; /* Changed border color on hover */
    }
    @media (max-width: 960px) {
        font-size: 17px; /* Adjusted font size for medium screens */
        padding: 12px 18px; /* Adjusted padding for medium screens */
    }
    @media (max-width: 768px) {
        font-size: 16px; /* Adjusted font size for tablet screens */
        padding: 10px 15px; /* Adjusted padding for tablet screens */
    }
    @media (max-width: 500px) {
        font-size: 15px; /* Adjusted font size for mobile screens */
        padding: 8px 12px; /* Adjusted padding for mobile screens */
    }
`

const SkillImage = styled.img`
    width: 28px; /* Increased image size */
    height: 28px; /* Increased image size */
    @media (max-width: 768px) {
        width: 26px; /* Adjusted image size for tablet screens */
        height: 26px; /* Adjusted image size for tablet screens */
    }
    @media (max-width: 500px) {
        width: 24px; /* Adjusted image size for mobile screens */
        height: 24px; /* Adjusted image size for mobile screens */
    }
`

const Skills = () => {
    return (
        <Container id='skills'>
            <Wrapper>
                <Title>SkillCOURSE</Title>
                <Desc>These are the technologies I'm proficient with</Desc>
                <SkillsContainer>
                    {skills.map((item, index) => (
                        <Skill key={index}>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {item.skills.map((skill, index) => (
                                    <SkillItem key={index}>
                                        <SkillImage src={skill.image} alt={skill.name} /> 
                                        {skill.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills