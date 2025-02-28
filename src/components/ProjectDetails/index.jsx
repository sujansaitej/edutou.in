import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed; /* Changed to fixed for better full viewport coverage */
    top: 0;
    left: 0;
    background-color: #000000a7;
    display: flex;
    align-items: center; /* Changed to center to vertically center modal */
    justify-content: center;
    overflow-y: auto; /* Keep scroll for content overflow */
    transition: all 0.5s ease;
    z-index: 1000; /* Ensure modal is on top of everything */
`;

const Wrapper = styled.div`
    max-width: 800px;
    width: 90%; /* Adjusted width to be responsive, using percentage */
    border-radius: 16px;
    margin: 20px; /* Reduced margin for better mobile spacing */
    height: auto; /* Changed to auto to adjust to content */
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_primary};
    padding: 25px; /* Increased padding for better spacing */
    display: flex;
    flex-direction: column;
    position: relative;

    @media only screen and (max-width: 600px) {
        padding: 20px; /* Slightly reduced padding on smaller screens */
        margin: 10px; /* Further reduced margin on smaller screens */
        border-radius: 12px; /* Slightly smaller border-radius on smaller screens */
    }
`;

const Title = styled.div`
    font-size: 32px; /* Increased font size for title */
    font-weight: 700; /* Increased font weight for title */
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px; /* Added margin bottom for spacing */
    @media only screen and (max-width: 768px) {
        font-size: 28px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 24px;
    }
`;

const Date = styled.div`
    font-size: 18px; /* Increased font size for date */
    margin-bottom: 10px; /* Added margin bottom for spacing */
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
    @media only screen and (max-width: 600px){
        font-size: 14px;
    }
`

const Desc = styled.div`
    font-size: 18px; /* Increased font size for description */
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 15px; /* Increased margin bottom for spacing */
    line-height: 1.6; /* Improved line height for readability */
    @media only screen and (max-width: 768px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin-bottom: 10px; /* Reduced margin bottom on smaller screens */
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: contain; /* Changed to contain to fit image within modal */
    max-height: 400px; /* Added max height for image to prevent excessive vertical space */
    border-radius: 12px;
    margin-bottom: 20px; /* Increased margin bottom for spacing */
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5); /* Increased box-shadow for better visual separation */
    @media only screen and (max-width: 768px) {
        max-height: 300px; /* Reduced max height for smaller screens */
        margin-bottom: 15px;
    }
    @media only screen and (max-width: 600px) {
        max-height: 250px; /* Further reduced max height for smaller screens */
        margin-bottom: 10px;
    }
`;

const Label = styled.div`
    font-size: 22px; /* Increased font size for label */
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px; /* Added margin bottom for spacing */
    @media only screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px; /* Increased margin bottom for spacing */
    @media only screen and (max-width: 600px) {
        margin-bottom: 10px;
    }
`;

const Tag = styled.div`
    font-size: 16px; /* Increased font size for tags */
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    margin: 5px; /* Increased margin for better tag spacing */
    padding: 6px 10px; /* Increased padding for tags */
    border-radius: 10px; /* Increased border-radius for tags */
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 4px; /* Slightly reduced margin on smaller screens */
        padding: 4px 8px; /* Slightly reduced padding on smaller screens */
        border-radius: 8px; /* Slightly reduced border-radius on smaller screens */
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; /* Increased gap for member spacing */
    margin-bottom: 20px; /* Increased margin bottom for spacing */
    @media only screen and (max-width: 600px) {
        margin-bottom: 15px; /* Reduced margin bottom on smaller screens */
        gap: 8px; /* Reduced gap on smaller screens */
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 15px; /* Increased gap for spacing between member info */
`;

const MemberImage = styled.img`
    width: 60px; /* Increased member image size */
    height: 60px; /* Increased member image size */
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 0px; /* Removed bottom margin, spacing handled by Members gap */
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.4); /* Increased box-shadow for member images */
    @media only screen and (max-width: 600px) {
        width: 40px; /* Reduced member image size on smaller screens */
        height: 40px; /* Reduced member image size on smaller screens */
    }
`;

const MemberName = styled.div`
    font-size: 18px; /* Increased member name font size */
    font-weight: 500;
    width: 220px; /* Slightly wider member name area */
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 16px; /* Reduced member name font size on smaller screens */
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px; /* Added margin top to separate from members/desc */
    gap: 15px; /* Increased gap for button spacing */
    @media only screen and (max-width: 600px) {
        margin-top: 15px; /* Reduced margin top on smaller screens */
        gap: 10px; /* Reduced gap on smaller screens */
        flex-direction: column; /* Stack buttons on smaller screens */
        align-items: stretch; /* Make buttons full width on smaller screens */
    }
`;

const Button = styled.a`
    width: auto; /* Changed to auto to fit content */
    min-width: 120px; /* Added min-width for buttons to maintain size */
    text-align: center;
    font-size: 18px; /* Increased button font size */
    font-weight: 600;
    color: ${({ theme }) => theme.card}; /* Changed button text color to card background */
    padding: 14px 20px; /* Increased button padding */
    border-radius: 10px; /* Increased button border-radius */
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        min-width: auto; /* Remove min-width on smaller screens for full width buttons */
        width: 100%; /* Make buttons full width on smaller screens */
        padding: 12px 16px; /* Slightly reduced button padding on smaller screens */
    }
`;


const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "15px", /* Adjusted close icon position */
                            right: "25px", /* Adjusted close icon position */
                            cursor: "pointer",
                            fontSize: '2.5rem', /* Increased close icon size */
                            color: ({ theme }) => theme.text_primary,
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member key={member.name}>
                                        <MemberImage src={member.img} alt={member.name} /> {/* Added alt text for accessibility */}
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Added rel="noopener noreferrer" for security */}
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Added rel="noopener noreferrer" for security */}
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        <Button dull href={project?.github} target='_blank' rel="noopener noreferrer">View Code</Button> {/* Added rel="noopener noreferrer" for security */}
                        <Button href={project?.webapp} target='_blank' rel="noopener noreferrer">View Live App</Button> {/* Added rel="noopener noreferrer" for security */}
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default index