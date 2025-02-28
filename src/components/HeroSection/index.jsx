import React from 'react';
import styled from 'styled-components';
import HeroBgAnimation from '../HeroBgAnimation'; // Adjust path if needed
// import Slider from 'react-slick'; // Removed Slider import as Navbar/Footer section removed

// --- Define Theme Colors based on BLACK & ORANGE LOGO ---
const theme = {
    primaryOrange: '#FF7F50',         // Vibrant Orange - Primary Brand Color (Coral shade - you can adjust)
    primaryHoverOrange: '#FF6347',    // Darker Orange for Hover (Tomato shade - adjust if needed)
    secondaryOrange: '#FFA07A',       // Lighter Orange - Accent Color (Light Salmon)
    backgroundDark: '#121212',       // Dark Background - Near Black
    backgroundLight: '#1E1E1E',      // Slightly Lighter Dark Background - Dark Gray
    cardBackground: '#2C2C2C',       // Darker Card Background - Very Dark Gray
    cardBorder: '#3E3E3E',           // Border color for cards - Darker Gray
    cardShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slightly stronger card shadow for dark theme
    textPrimaryLight: '#FFFFFF',      // White Primary Text (for dark backgrounds)
    textSecondaryLight: '#D3D3D3',    // Light Gray Secondary Text
    textOrangeAccent: '#FFC080',      // Light Orange - Text Accent (Light Salmon - adjust)
    scrollbarThumb: '#555555',        // Dark Scrollbar Thumb
    scrollbarThumbHover: '#777777',    // Lighter Scrollbar Thumb Hover
};


// ========================= HERO SECTION =========================

const HeroContainer = styled.div`
    background: linear-gradient(135deg, ${theme.primaryOrange} 0%, ${theme.secondaryOrange} 100%); // ORANGE Gradient
    display: flex;
    justify-content: center;
    position: relative;
    padding: 120px 30px 100px; /* Increased top padding slightly for hero section */
    flex-direction: column;
    align-items: center;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

    @media (max-width: 960px) {
        padding: 100px 20px 80px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 85% 97%, 0 100%);
    }
    @media (max-width: 640px) {
        padding: 80px 15px 60px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 98%, 0 100%);
    }
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    transform: translate(-50%, -50%);
    overflow: hidden;
    padding: 0 30px;

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0;
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
    padding: 0 24px;
`;

const HeroTitle = styled.h1`
    font-weight: 800;
    font-size: 3rem; /* Slightly increased title font size */
    color: ${theme.textLight}; // White text for title
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 2.6rem;
    }
    @media (max-width: 480px) {
        font-size: 2.2rem;
    }
`;

const HeroSubtitle = styled.p`
    font-size: 1.2rem;
    color: ${theme.textLight}; // White text for subtitle
    margin-bottom: 30px;
    line-height: 1.7;
    max-width: 700px;

    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 25px;
    }
    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const HeroButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const HeroButton = styled.a`
    padding: 14px 32px;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${theme.textLight};
    background-color: ${theme.primaryOrange}; // Primary Orange Button Background
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${theme.primaryHoverOrange}; // Darker Orange Hover
    }

    @media (max-width: 480px) {
        padding: 12px 28px;
        font-size: 1rem;
    }
`;

// --- New: Hero Video Container Style ---
const HeroVideoContainer = styled.div`
    width: 100%;
    max-width: 800px; /* Adjust max video width as needed */
    margin: 30px auto; /* Center video and add spacing above and below */
    border-radius: 10px;
    overflow: hidden; /* Ensure video corners are rounded */
    box-shadow: ${theme.cardShadow}; /* Optional shadow */
`;

const HeroVideoIframe = styled.iframe`
    display: block; /* important to remove space below iframe */
    width: 100%;
    aspect-ratio: 16 / 9; /* Maintain 16:9 aspect ratio for YouTube videos */
    border: none;
`;


const HeroStatsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px; /* Reduced gap for cards */
    margin-top: 40px;
    flex-wrap: wrap;
    padding-bottom: 20px; /* Added padding at the bottom of hero stats */
`;

// --- New: HeroStatCard Styles ---
const HeroStatCard = styled.div`
    background-color: ${theme.cardBackground};
    border-radius: 10px;
    padding: 20px 15px; /* Adjusted padding for card */
    box-shadow: ${theme.cardShadow};
    text-align: center;
    width: 200px; /* Fixed width for cards - adjust as needed */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Vertically center content */

    @media (max-width: 768px) {
        width: 160px;
        padding: 15px 10px;
    }
    @media (max-width: 480px) {
        width: 100%; /* Full width on smaller screens */
        max-width: 200px; /* Still limit max width */
        padding: 15px;
    }
`;

const StatIcon = styled.div`
    font-size: 2.5rem; /* Icon size */
    color: ${theme.primaryOrange}; // Primary Orange Icon Color
    margin-bottom: 10px;
`;

const StatNumber = styled.h3`
    font-size: 1.8rem; /* Slightly smaller number */
    font-weight: 700;
    color: ${theme.textPrimaryLight}; /* White text for number */
    margin-bottom: 5px;

    @media (max-width: 480px) {
        font-size: 1.6rem;
    }
`;

const StatLabel = styled.span`
    font-size: 0.9rem; /* Slightly smaller label */
    color: ${theme.textSecondaryLight}; /* Light Gray text color for label */
`;


// ========================= WHY CHOOSE US SECTION =========================

const WhyChooseUsContainer = styled.div`
    background-color: ${theme.backgroundDark}; // Dark background for this section
    padding: 80px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WhyChooseUsHeading = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
    color: ${theme.textPrimaryLight}; // White heading text
`;

const WhyChooseUsCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Slightly wider cards */
    gap: 35px; /* Increased gap */
    max-width: 1200px; /* Limit width of the grid */
    padding-bottom: 30px; /* Add padding below the cards */

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Adjust card width on smaller screens */
        gap: 30px;
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* Stack cards on smaller screens */
        gap: 25px;
    }
`;

const WhyChooseUsCard = styled.div`
    background-color: ${theme.cardBackground};
    border: 1px solid ${theme.cardBorder}; /* Added border to cards */
    padding: 35px; /* Increased padding inside cards */
    border-radius: 12px;
    box-shadow: ${theme.cardShadow};
    text-align: center;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-8px); /* Increased hover lift */
    }

    @media (max-width: 768px) {
        padding: 30px;
    }
    @media (max-width: 480px) {
        padding: 25px;
    }
`;

const WhyChooseUsCardIcon = styled.div`
    font-size: 3.5rem; /* Increased Icon size */
    color: ${theme.primaryOrange}; // Primary Orange Icon Color
    margin-bottom: 25px; /* Increased margin */
`;

const WhyChooseUsCardTitle = styled.h3`
    font-size: 1.7rem; /* Increased title font size */
    font-weight: 700;
    color: ${theme.textPrimaryLight}; // White title text
    margin-bottom: 20px; /* Increased margin */

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const WhyChooseUsCardDesc = styled.p`
    font-size: 1.1rem; /* Increased description font size */
    color: ${theme.textSecondaryLight}; // Light Gray description text
    line-height: 1.7; /* Increased line height */
`;


// ========================= EVERYTHING YOU NEED TO MASTER CODING SECTION =========================

const MasterCodingContainer = styled.div`
    background-color: ${theme.backgroundDark}; // Dark background for this section
    padding: 80px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MasterCodingHeading = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px; /* Reduced margin-bottom for heading */
    color: ${theme.textPrimaryLight}; // White heading text
`;

const MasterCodingSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${theme.textSecondaryLight}; // Light gray subtitle text
    text-align: center;
    margin-bottom: 40px; /* Margin for subtitle */
    max-width: 800px; /* Limit subtitle width */
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 30px;
    }
`;


const MasterCodingCardGrid = styled.div`
    display: grid;
    grid-template-template-columns: repeat(3, 1fr); /* Explicitly 3 columns */
    grid-template-rows: repeat(2, auto); /* Explicitly 2 rows, auto height */
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); /* Increased min-width for master coding cards */
    gap: 35px; /* Increased gap */
    max-width: 1200px;
    justify-content: center; /* Center the grid items horizontally if space allows */
    padding-bottom: 30px; /* Added padding at the bottom of master coding cards */

    @media (max-width: 1024px) { /* Adjust breakpoint as needed for smaller desktops/laptops */
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Slightly smaller min-width */
        gap: 30px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Even smaller for tablets */
        gap: 25px;
    }
    @media (max-width: 600px) { /* Further adjust for smaller tablets/larger mobiles */
        grid-template-columns: 1fr; /* Stack on very small screens */
        max-width: 400px; /* Limit max width when stacked */
        gap: 25px; /* Slightly larger gap when stacked */
    }
    @media (max-width: 480px) {
        max-width: 350px; /* Even smaller max width on mobiles */
        gap: 20px;
    }
`;


const MasterCodingCard = styled.div`
    background-color: ${theme.cardBackground};
    border: 1px solid ${theme.cardBorder}; /* Added border to cards */
    border-radius: 12px;
    box-shadow: ${theme.cardShadow};
    padding: 30px; /* Increased padding */
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-8px);
    }

    @media (max-width: 768px) {
        padding: 25px;
    }
`;

const MasterCodingCardTitle = styled.h3`
    font-size: 1.5rem; /* Increased title font size */
    font-weight: 700;
    color: ${theme.textPrimaryLight}; // White title text
    margin-bottom: 12px; /* Adjusted margin */
`;

const MasterCodingCardDescription = styled.p`
    font-size: 1.05rem; /* Slightly increased description font size */
    color: ${theme.textSecondaryLight}; // Light gray description text
    line-height: 1.6;
    margin-bottom: 18px; /* Adjusted margin */
`;

const MasterCodingCardKeywords = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 18px; /* Adjusted margin */
`;

const MasterCodingKeyword = styled.span`
    background-color: ${theme.secondaryOrange}; // Secondary Orange Keyword Background
    color: ${theme.backgroundDark}; // Dark text for keywords to contrast orange
    font-size: 0.9rem; /* Slightly increased keyword font size */
    padding: 5px 12px; /* Adjusted keyword padding */
    border-radius: 6px; /* Adjusted keyword border radius */
`;

const MasterCodingCardButton = styled.a`
    display: inline-block;
    padding: 12px 24px; /* Adjusted button padding */
    font-size: 1.1rem; /* Increased button font size */
    font-weight: 600;
    color: ${theme.textPrimaryLight}; // White button text
    background-color: ${theme.primaryOrange}; // Primary Orange Button Background
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    text-align: center; /* Ensure text is centered in button */

    &:hover {
        background-color: ${theme.primaryHoverOrange}; // Darker Orange Hover
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 10px 20px;
    }
`;


// ========================= EXPERT MENTORSHIP SECTION =========================

const ExpertMentorshipContainer = styled.div`
    background-color: ${theme.backgroundDark}; // Dark background for this section
    padding: 80px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExpertMentorshipHeading = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
    color: ${theme.textPrimaryLight}; // White heading text
`;

const ExpertMentorshipSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${theme.textSecondaryLight}; // Light gray subtitle text
    text-align: center;
    margin-bottom: 40px; /* Margin for subtitle */
    max-width: 800px; /* Limit subtitle width */
    line-height: 1.6;
    margin-bottom: 50px; /* Increased margin bottom to separate from mentor cards */
`;


const ExpertMentorshipCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); /* Slightly wider mentor cards */
    gap: 40px; /* Increased gap */
    max-width: 1200px;
    justify-content: center; /* Center cards horizontally */
    padding-bottom: 40px; /* Added padding at the bottom of mentor cards */

    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); /* Adjust for smaller laptops */
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Stack on tablets */
        max-width: 450px; /* Limit max width when stacked */
    }
`;

const ExpertMentorshipCard = styled.div`
    background-color: ${theme.cardBackground};
    border: 1px solid ${theme.cardBorder}; /* Added border to cards */
    border-radius: 12px;
    box-shadow: ${theme.cardShadow};
    padding: 35px; /* Increased padding */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content inside card */
    text-align: center; /* Center text within the card */

    @media (max-width: 768px) {
        padding: 30px;
    }
`;

const MentorImage = styled.div`
    /* Placeholder for Mentor Image (replace with actual image component) */
    width: 120px; /* Increased image size */
    height: 120px; /* Increased image size */
    border-radius: 50%;
    background-color: ${theme.secondaryOrange}; /* Placeholder background */
    margin-bottom: 25px; /* Increased margin */
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.backgroundDark}; // Dark icon color to contrast orange
    font-size: 2.5rem; /* Increased icon size */
    overflow: hidden; /* Clip image to circle */

    &::before { /* Use a placeholder icon if no image */
        content: '🧑‍🏫'; /* Teacher/Mentor icon - adjust as needed */
        display: block;
    }
`;


const MentorName = styled.h4`
    font-size: 1.5rem; /* Increased name font size */
    font-weight: 700;
    color: ${theme.textPrimaryLight}; // White name text
    margin-bottom: 10px; /* Adjusted margin */
`;

const MentorTitle = styled.p`
    font-size: 1.1rem;
    color: ${theme.textSecondaryLight}; // Light gray title text
    margin-bottom: 18px; /* Adjusted margin */
`;

const MentorRating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; /* Center rating content */
    margin-bottom: 18px; /* Adjusted margin */
`;

const RatingStar = styled.span`
    color: #FFC107; /* Gold color for star - you can adjust */
    margin-right: 5px;
`;

const RatingNumber = styled.span`
    font-weight: 600;
    color: ${theme.textPrimaryLight}; // White rating number text
    margin-right: 5px;
`;

const ReviewCount = styled.span`
    color: ${theme.textSecondaryLight}; // Light gray review count text
`;

const MentorExperience = styled.div`
    margin-bottom: 18px; /* Adjusted margin */
`;

const ExperienceLabel = styled.span`
    font-weight: 600;
    color: ${theme.textPrimaryLight}; // White experience label text
    margin-right: 5px;
`;

const ExperienceDetails = styled.span`
    color: ${theme.textSecondaryLight}; // Light gray experience details text
`;


const MentorSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center skills */
    gap: 8px;
    margin-bottom: 25px; /* Increased margin */
`;

const MentorSkill = styled.span`
    background-color: ${theme.secondaryOrange}; // Secondary Orange Skill Background
    color: ${theme.backgroundDark}; // Dark text for skills to contrast orange
    font-size: 0.9rem;
    padding: 5px 12px;
    border-radius: 6px;
    margin-bottom: 5px; /* Add some bottom margin for wrapping skills */
`;

const MentorCompanyEducation = styled.p`
    font-size: 1rem;
    color: ${theme.textSecondaryLight}; // Light gray company education text
    line-height: 1.6;
`;


// ========================= NEW OUR MISSION SECTION =========================

const NewOurMissionContainer = styled.div`
    background-color: ${theme.backgroundDark}; // Dark background for this section
    padding: 80px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewOurMissionHeading = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
    color: ${theme.textPrimaryLight}; // White heading text
`;

const NewOurMissionCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); /* Even wider mission cards */
    gap: 40px; /* Increased gap */
    max-width: 1200px;
    justify-content: center; /* Center cards horizontally */
    padding-bottom: 50px; /* Increased padding at the bottom of new mission section */

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Stack on tablets */
        max-width: 500px; /* Increased max width when stacked */
    }
`;

const NewOurMissionCard = styled.div`
    background-color: ${theme.cardBackground};
    border: 1px solid ${theme.cardBorder}; /* Added border to cards */
    border-radius: 12px;
    box-shadow: ${theme.cardShadow};
    padding: 40px; /* Increased padding significantly */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content inside card */
    text-align: center; /* Center text within the card */
`;


const NewOurMissionCardTitle = styled.h3`
    font-size: 1.8rem; /* Increased title font size */
    font-weight: 700;
    color: ${theme.textPrimaryLight}; // White title text
    margin-bottom: 20px; /* Increased margin */

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const NewOurMissionCardDesc = styled.p`
    font-size: 1.15rem; /* Increased description font size */
    color: ${theme.textSecondaryLight}; // Light gray description text
    line-height: 1.8; /* Increased line height for better readability */
`;


// ========================= FAQs SECTION =========================

const FAQsContainer = styled.div`
    background-color: ${theme.backgroundDark}; // Dark background for FAQs
    padding: 80px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FAQsHeading = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
    color: ${theme.textPrimaryLight}; // White heading text
`;

const FAQList = styled.ul`
    list-style: none;
    padding: 0;
    max-width: 900px;
    width: 100%;
`;

const FAQItem = styled.li`
    border-bottom: 1px solid ${theme.cardBorder}; /* Darker border for dark theme */
    margin-bottom: 25px; /* Increased margin */
    padding-bottom: 25px; /* Increased padding */
    padding-left: 15px; /* Increased left padding for FAQ items */
    padding-right: 15px; /* Increased right padding for FAQ items */
`;

const FAQQuestion = styled.h4`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${theme.textPrimaryLight}; // White question text
    margin-bottom: 12px; /* Adjusted margin */
    cursor: pointer; // Indicate clickable question
    padding: 12px 15px; /* Increased padding to question for better click area */
    border-radius: 8px; /* Added border radius to question */
    transition: background-color 0.2s ease; /* Smooth background transition */

    &:hover {
        color: ${theme.primaryOrange}; // Primary Orange on hover for interaction cue
        background-color: ${theme.backgroundLight}; /* Slightly lighter dark background on hover */
    }
`;

const FAQAnswer = styled.div`
    font-size: 1.05rem; /* Slightly increased answer font size */
    line-height: 1.7; /* Increased line height */
    color: ${theme.textSecondaryLight}; // Light gray answer text
    overflow: hidden; // For animation effect
    transition: max-height 0.3s ease-out, padding-top 0.3s ease-out; /* Added padding-top transition */
    max-height: ${(props) => (props.isOpen ? '500px' : '0')}; // Adjust max height as needed
    padding-top: ${(props) => (props.isOpen ? '18px' : '0')}; /* Increased padding when open */
    padding-left: 15px; /* Increased left padding for answer text */
    padding-right: 15px; /* Increased right padding for answer text */
`;


// ========================= DATA =========================

// --- FAQ Data (Placeholder - Replace with your actual data) ---
const faqs = [
    {
        question: "What is the validity of the course?",
        answer: "The course provides lifetime access, allowing you to revisit the content whenever you need."
    },
    {
        question: "Will I receive a certificate?",
        answer: "Yes, upon successful completion of the course, you will receive a certificate of completion."
    },
    {
        question: "Is this course beginner-friendly?",
        answer: "Absolutely! Our courses are designed to be beginner-friendly, starting from the fundamentals and gradually progressing to advanced topics."
    },
    {
        question: "What if I have questions during the course?",
        answer: "We offer dedicated support through our community forums and Q&A sessions. Our instructors and mentors are there to help you."
    },
    {
        question: "Are there any prerequisites for the courses?",
        answer: "While some basic computer literacy is helpful, most of our courses are designed for beginners and do not require prior coding experience. Any specific prerequisites will be mentioned in the course description."
    },
    {
        question: "Can I access the course content on mobile?",
        answer: "Yes, our platform is mobile-responsive, and you can access the course content on any device, including smartphones and tablets."
    },
    {
        question: "Do you offer any placement assistance?",
        answer: "While we don't guarantee placements, we provide comprehensive interview preparation, portfolio building guidance, and connect you with potential employers through our network. Our focus is on making you job-ready."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept a variety of payment methods including major credit cards, debit cards, online wallets, and UPI."
    },
    {
        question: "Is there a refund policy if I'm not satisfied?",
        answer: "Yes, we have a 7-day refund policy. If you are not satisfied with the course within the first 7 days of enrollment, you can request a full refund. Please see our Terms of Service for details."
    },
    {
        question: "How often is the course content updated?",
        answer: "We are committed to keeping our course content current and relevant. We regularly update modules to reflect the latest industry trends and technologies. You will be notified of any significant updates to courses you are enrolled in."
    },
    // ... more FAQs - feel free to add more relevant questions
];

// --- Renamed old mission data ---
const oldOurMissionCardsData = [
    {
        icon: "🇮🇳", // India Flag Icon
        title: "Join India's Tech Revolution",
        description: "We're on a mission to empower every Indian who dreams of a career in tech. No one should miss out on learning because of high course fees."
    },
    {
        icon: "🏅", // Medal Icon
        title: "Quality for All",
        description: "World-class tech education shouldn't be a luxury. We're making sure every Indian can learn from the best, at a price they can afford."
    },
    {
        icon: "🌟", // Star Icon
        title: "Dreams Without Limits",
        description: "Your potential shouldn't be limited by your wallet. We believe in you, and we're here to help you achieve your tech dreams."
    },
    {
        icon: "🧑‍🤝‍🧑", // People Holding Hands Icon
        title: "Growing Together",
        description: "Join thousands of students who've transformed their lives through our courses. Your success adds to India's tech story."
    },
    {
        icon: "🚀", // Rocket Icon
        title: "Impact First",
        description: "Every student who succeeds through our platform brings India closer to becoming a global tech leader. We're in this together. Your success story starts here. Let's build something amazing together."
    },
];

const masterCodingCardsData = [
    {
        title: "Real-World Projects",
        description: "Build production-ready applications with modern tech stacks. From chat apps to e-commerce platforms.",
        keywords: ["MERN Stack", "Next.js", "AI Integration"],
        buttonText: "Explore Projects",
        buttonLink: "#explore-projects-section" // Replace with actual link
    },
    {
        title: "Interview Success",
        description: "Comprehensive interview preparation with real questions from top tech companies. DSA, System Design, and more.",
        keywords: ["DSA", "JavaScript", "React"],
        buttonText: "Start Preparing",
        buttonLink: "#interview-prep-section" // Replace with actual link
    },
    {
        title: "Interactive Learning",
        description: "Learn by doing with interactive code examples, quizzes, and AI-powered assistance. Master concepts faster.",
        keywords: ["Live Code", "AI Help", "Quizzes"],
        buttonText: "Try Now",
        buttonLink: "#interactive-learning-section" // Replace with actual link
    },
    {
        title: "Code Examples",
        description: "Ready-to-use code snippets and patterns for common programming challenges. Copy, paste, and learn.",
        keywords: ["Frontend", "Backend", "Testing"],
        buttonText: "View Examples",
        buttonLink: "#code-examples-section" // Replace with actual link
    },
    {
        title: "DSA Mastery",
        description: "Master Data Structures & Algorithms with structured learning paths. Practice problems from basic to advanced levels.",
        keywords: ["Arrays", "Trees", "Graphs"],
        buttonText: "Start Learning DSA",
        buttonLink: "#dsa-mastery-section" // Replace with actual link
    },
    {
        title: "Learning Roadmaps",
        description: "Follow curated learning paths for different tech stacks. Clear progression from beginner to advanced levels.",
        keywords: ["Frontend", "Backend", "DevOps"],
        buttonText: "View Roadmaps",
        buttonLink: "#learning-roadmaps-section" // Replace with actual link
    },
    // ... more Master Coding cards if needed (currently 6 as per requirement)
];

const mentorCardsData = [
    {
        name: "Aryan Singh",
        title: "Software Engineer @ Google",
        rating: "4.9",
        reviewCount: "120 reviews",
        mentoredCount: "200+",
        experienceYears: "5+",
        skills: ["Algorithms", "Full-Stack Development", "Data Structures"],
        companyEducation: "Ex-Arrow Electronics, UMass Amherst"
    },
    {
        name: "Deepanshu Udhwani",
        title: "Software Engineer @ MakeMyTrip",
        rating: "4.8",
        reviewCount: "85 reviews",
        mentoredCount: "150+",
        experienceYears: "12+",
        skills: ["Django", "Algorithms", "Full-Stack Development"],
        companyEducation: "Ex-Alibaba Cloud, Thapar Institute"
    },
    {
        name: "Ashok Sharma",
        title: "Senior Data Analyst & Scientist",
        rating: "4.9",
        reviewCount: "95 reviews",
        mentoredCount: "180+",
        experienceYears: "3+",
        skills: ["Data Science", "Machine Learning", "Statistical Analysis", "MySQL", "MongoDB"],
        companyEducation: "PhD Minnesota, Ex-Takeda"
    },
    // ... more mentor cards if needed (currently 3 as per requirement)
];

const newOurMissionCardsData = [
    {
        title: "For Every Dreamer",
        description: "We've seen too many bright minds held back by expensive courses. That's why we made our education accessible to everyone who dreams of a better future.",
    },
    {
        title: "Building India's Future",
        description: "Together, we can make India the world's tech powerhouse. Your success is our success, and we're investing in you to make this dream a reality.",
    },
    {
        title: "From the Heart",
        description: "This isn't just business for us - it's personal. We measure our success by your growth, not our profits. Your journey is our mission. When you succeed, India succeeds. We're here to make that happen.",
    },
    {
        title: "From the Heart",
        description: "This isn't just business for us - it's personal. We measure our success by your growth, not our profits. Your journey is our mission. When you succeed, India succeeds. We're here to make that happen.",
    },
];


// ========================= HOME PAGE COMPONENT =========================
const HomePage = () => {

    const [faqOpenIndex, setFaqOpenIndex] = React.useState(null); // State for FAQ accordion

    const toggleFAQ = (index) => {
        setFaqOpenIndex(faqOpenIndex === index ? null : index); // Toggle FAQ open/close
    };

    return (
        <div style={{ backgroundColor: theme.backgroundDark }}> {/* Set dark background for the whole page */}
            {/* --- Existing Navbar Component Here (Outside of HomePage.jsx) --- */}
            <HeroSectionComponent />
            <WhyChooseUsSectionComponent /> {/* Renamed and kept old mission section */}
            <MasterCodingSectionComponent />
            <ExpertMentorshipSectionComponent />
            <NewOurMissionSectionComponent /> {/* Added New Our Mission Section here */}
            <FAQsSectionComponent faqOpenIndex={faqOpenIndex} toggleFAQ={toggleFAQ} />
            {/* --- Existing Footer Component Here (Outside of HomePage.jsx) --- */}
        </div>
    );
};


// ========================= SECTION COMPONENTS (moved inside HomePage) =========================


// --- Hero Section Component ---
const HeroSectionComponent = () => {
    return (
        <HeroContainer id="hero">
            <HeroBg>
                <HeroBgAnimation />
            </HeroBg>
            <HeroInnerContainer>
                <HeroTitle>EDUTOU Skill Academy</HeroTitle>
                <HeroSubtitle>
                    EDUTOU Skill Academy is a next-gen learning hub designed to equip individuals with real-world, high-demand skills. We focus on AI-driven adaptive learning, immersive virtual experiences, and hands-on training for practical mastery. Our goal is to empower learners for career growth and financial independence.
                </HeroSubtitle>
                <HeroButtonContainer>
                    <HeroButton href="#start-learning">Start Learning</HeroButton>
                    <HeroButton href="#explore-projects">Explore Projects</HeroButton>
                </HeroButtonContainer>

                {/* --- YouTube Video Embed with Updated URL --- */}
                <HeroVideoContainer>
                    <HeroVideoIframe
                        src="https://www.youtube.com/embed/uaEYLgUPgUI" // **Updated YouTube Video URL**
                        title="EDUTOU Skill Academy Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </HeroVideoContainer>

                <HeroStatsContainer>
                    {/* --- Hero Stat Cards with Icons --- */}
                    <HeroStatCard>
                        <StatIcon>🧑‍🎓</StatIcon> {/* Learner Icon */}
                        <StatNumber>25,000+</StatNumber>
                        <StatLabel>Active Learners</StatLabel>
                    </HeroStatCard>
                    <HeroStatCard>
                        <StatIcon>⭐</StatIcon> {/* Rating Icon */}
                        <StatNumber>4.9/5</StatNumber>
                        <StatLabel>Student Rating</StatLabel>
                    </HeroStatCard>
                    <HeroStatCard>
                        <StatIcon>📚</StatIcon> {/* Courses Icon */}
                        <StatNumber>15+</StatNumber>
                        <StatLabel>Pro Courses</StatLabel>
                    </HeroStatCard>
                    <HeroStatCard>
                        <StatIcon>💼</StatIcon> {/* Projects Icon */}
                        <StatLabel>Industry-Ready Projects</StatLabel>
                    </HeroStatCard>
                    <HeroStatCard>
                        <StatIcon>🗣️</StatIcon> {/* Interview Icon */}
                        <StatLabel>Interview Preparation</StatLabel>
                    </HeroStatCard>
                    <HeroStatCard>
                        <StatIcon>♾️</StatIcon> {/* Lifetime Icon */}
                        <StatLabel>Lifetime Access</StatLabel>
                    </HeroStatCard>
                </HeroStatsContainer>
            </HeroInnerContainer>
        </HeroContainer>
    );
};


// --- Why Choose Us Section Component (Renamed from OurMissionSectionComponent) ---
const WhyChooseUsSectionComponent = () => {
    return (
        <WhyChooseUsContainer id="why-choose-us"> {/* Renamed container */}
            <WhyChooseUsHeading>Why Choose Us</WhyChooseUsHeading> {/* Renamed heading */}
            <WhyChooseUsCardGrid> {/* Renamed grid */}
                {oldOurMissionCardsData.map((card, index) => (  // Updated data array name
                    <WhyChooseUsCard key={index}> {/* Renamed card */}
                        <WhyChooseUsCardIcon>{card.icon}</WhyChooseUsCardIcon> {/* Renamed icon */}
                        <WhyChooseUsCardTitle>{card.title}</WhyChooseUsCardTitle> {/* Renamed title */}
                        <WhyChooseUsCardDesc>{card.description}</WhyChooseUsCardDesc> {/* Renamed desc */}
                    </WhyChooseUsCard>
                ))}
            </WhyChooseUsCardGrid>
        </WhyChooseUsContainer>
    );
};

// --- Master Coding Section Component ---
const MasterCodingSectionComponent = () => {
    return (
        <MasterCodingContainer id="master-coding">
            <MasterCodingHeading>Everything You Need to Master Coding</MasterCodingHeading>
            <MasterCodingSubtitle>From hands-on projects to interview prep, we've got you covered with our comprehensive learning ecosystem.</MasterCodingSubtitle>
            <MasterCodingCardGrid>
                {masterCodingCardsData.map((card, index) => (
                    <MasterCodingCard key={index}>
                        <MasterCodingCardTitle>{card.title}</MasterCodingCardTitle>
                        <MasterCodingCardDescription>{card.description}</MasterCodingCardDescription>
                        <MasterCodingCardKeywords>
                            {card.keywords.map((keyword, keywordIndex) => (
                                <MasterCodingKeyword key={keywordIndex}>{keyword}</MasterCodingKeyword>
                            ))}
                        </MasterCodingCardKeywords>
                        <MasterCodingCardButton href={card.buttonLink}>{card.buttonText}</MasterCodingCardButton>
                    </MasterCodingCard>
                ))}
            </MasterCodingCardGrid>
        </MasterCodingContainer>
    );
};

// --- Expert Mentorship Section Component ---
const ExpertMentorshipSectionComponent = () => {
    return (
        <ExpertMentorshipContainer id="expert-mentorship">
            <ExpertMentorshipHeading>Expert Mentorship</ExpertMentorshipHeading>
            <ExpertMentorshipSubtitle>Mentors and Instructors. Get personalized guidance from senior developers who have been where you want to go.</ExpertMentorshipSubtitle>
            <ExpertMentorshipCardGrid>
                {mentorCardsData.map((mentor, index) => (
                    <ExpertMentorshipCard key={index}>
                        <MentorImage>
                            {/* You can replace this with actual Mentor Image component, passing mentor.imageSrc as prop */}
                        </MentorImage>
                        <MentorName>{mentor.name}</MentorName>
                        <MentorTitle>{mentor.title}</MentorTitle>
                        <MentorRating>
                            <RatingStar>⭐</RatingStar>
                            <RatingNumber>{mentor.rating}</RatingNumber>
                            <ReviewCount>({mentor.reviewCount})</ReviewCount>
                        </MentorRating>
                        <MentorExperience>
                            <ExperienceLabel>Experience:</ExperienceLabel>
                            <ExperienceDetails>{mentor.experienceYears} years</ExperienceDetails>
                            <ExperienceLabel>Mentored:</ExperienceLabel>
                            <ExperienceDetails>{mentor.mentoredCount}</ExperienceDetails>
                        </MentorExperience>
                        <MentorSkills>
                            {mentor.skills.map((skill, skillIndex) => (
                                <MentorSkill key={skillIndex}>{skill}</MentorSkill>
                            ))}
                        </MentorSkills>
                        <MentorCompanyEducation>{mentor.companyEducation}</MentorCompanyEducation>
                    </ExpertMentorshipCard>
                ))}
            </ExpertMentorshipCardGrid>
        </ExpertMentorshipContainer>
    );
};


// --- New Our Mission Section Component ---
const NewOurMissionSectionComponent = () => {
    return (
        <NewOurMissionContainer id="our-mission"> {/* Updated ID to "our-mission" to be more semantic */}
            <NewOurMissionHeading>Our Mission</NewOurMissionHeading> {/* Corrected Heading */}
            <NewOurMissionCardGrid>
                {newOurMissionCardsData.map((card, index) => (
                    <NewOurMissionCard key={index}>
                        <NewOurMissionCardTitle>{card.title}</NewOurMissionCardTitle>
                        <NewOurMissionCardDesc>{card.description}</NewOurMissionCardDesc>
                    </NewOurMissionCard>
                ))}
            </NewOurMissionCardGrid>
        </NewOurMissionContainer>
    );
};


// --- FAQs Section Component ---
const FAQsSectionComponent = ({ faqOpenIndex, toggleFAQ }) => {
    return (
        <FAQsContainer id="faqs">
            <FAQsHeading>Frequently Asked Questions</FAQsHeading>
            <FAQList>
                {faqs.map((faq, index) => (
                    <FAQItem key={index}>
                        <FAQQuestion onClick={() => toggleFAQ(index)}>
                            {faq.question}
                        </FAQQuestion>
                        <FAQAnswer isOpen={faqOpenIndex === index}>
                            {faq.answer}
                        </FAQAnswer>
                    </FAQItem>
                ))}
            </FAQList>
        </FAQsContainer>
    );
};


export default HomePage;