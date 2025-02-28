import React, { useState } from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled, { useTheme } from "styled-components"
import { DiCssdeck } from 'react-icons/di'; // We can remove this import as we are not using DiCssdeck anymore
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import EdutouLogo from '../../images/EDUTOU-2.png'; // Import the image here

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    font-size: 1.5rem; /* Increased logo font size for better visual presence */
    @media screen and (max-width: 640px) {
        padding: 0 0px;
        font-size: 1.2rem; /* Adjusted logo font size for smaller screens */
    }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem; /* Slightly increased mobile icon size for better tap target */
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;
const NavItems = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: center;
    gap: 32px;

    @media screen and (max-width: 768px) {
        overflow-x: auto; /* Keep overflow-x for horizontal scroll if needed */
        white-space: nowrap;
        display: flex; /* Ensure it's still flex for mobile */
        padding: 10px 0px; /* Reduced horizontal padding for mobile nav items */
        gap: 20px; /* Adjusted gap for mobile nav items */
    }
`;

const NavLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    padding: 8px 12px; /* Added padding to nav links for better spacing and touch area */
    border-radius: 4px; /* Optional: Add slight border-radius for visual touch feedback */
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    @media screen and (max-width: 768px) {
        padding: 6px 10px; /* Slightly reduced padding for mobile nav links */
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    width: 80%;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const FollowButton = styled.a` /* Changed component name to FollowButton */
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: 1.8px solid ${({ theme }) => theme.button};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 768px) { /* Added media query for tablet size as well for button */
        font-size: 0.9rem;
        padding: 0 15px; /* Slightly reduced padding for button on tablet */
    }
    @media screen and (max-width: 640px){
        font-size: 0.8rem;
        padding: 0 10px; /* Further reduced padding for button on mobile */
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 20px; /* Slightly increased Span font size for logo prominence */
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light}; /* Removed + 99 for full opacity mobile menu background */
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3); /* Increased shadow for mobile menu for better separation */
    opacity: ${({ open }) => (open ? '1' : '0')}; /* Changed opacity to '1' and '0' for clarity */
    z-index: ${({ open }) => (open ? '1000' : '-1000')};
`

export const MobileLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 10px 15px; /* Added padding for mobile links for better touch area */
    border-radius: 4px; /* Optional: Add slight border-radius for visual consistency with desktop links */
    &:hover {
        color: ${({ theme }) => theme.primary};
    }

    &:active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const MobileNavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem; /* Consistent logo font size for mobile and desktop */
    @media (max-width: 640px) {
        padding: 0 0px;
        font-size: 1.2rem; /* Adjusted mobile logo font size for smaller screens, consistent with desktop */
    }
`;

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const instagramURL = "https://www.instagram.com/diffuseai";

    return <Nav>
        <NavContainer>
            <NavLogo to="/">
                <div style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
                    <img src={EdutouLogo} alt="EDUTOU Logo" style={{ height: '2.5rem', marginRight: '10px' }} /> {/* Replaced DiCssdeck with Image */}
                    <Span>EDUTOu ACADEMEY</Span>
                </div>
            </NavLogo>
            <MobileIcon>
                <FaBars onClick={() => {
                    setOpen(!open)
                }} />
            </MobileIcon>
            <NavItems>
                <NavLink to="/">Home</NavLink>
                <NavLink to='/skills'>Course</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </NavItems>
            <ButtonContainer>
                <FollowButton href={instagramURL} target='_blank'>Follow</FollowButton>
            </ButtonContainer>
        </NavContainer>
        {open && <MobileMenu open={open}>
            <MobileLink to="/" onClick={() => {
                setOpen(!open)
            }}>Home</MobileLink>
            <MobileLink to='/skills' onClick={() => {
                setOpen(!open)
            }}>Skills</MobileLink>
            <MobileLink to='/projects' onClick={() => {
                setOpen(!open)
            }}>Projects</MobileLink>
            <MobileLink to='/contact' onClick={() => {
                setOpen(!open)
            }}>Contact</MobileLink>
            <FollowButton style={{ padding: '10px 16px', width: 'max-content', fontWeight: "bold", margin: '0 auto' }} href={instagramURL} target="_blank"> Follow</FollowButton> {/* Changed to FollowButton and updated text and href, centered button */}
        </MobileMenu>}
    </Nav>
}

export default Navbar;