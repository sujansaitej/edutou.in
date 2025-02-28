import styled from 'styled-components';

export const Div = styled.div`
  width: 100%; /* Make it responsive width */
  height: auto; /* Adjust height based on content to maintain aspect ratio */
  max-width: 600px; /* Optional: Limit maximum width on larger screens if needed */
  margin: 0 auto; /* Center the container if you have a max-width */

  /* Ensure SVG takes full width of its container */
  svg {
    display: block; /* Remove extra space below svg */
    width: 100%;
    height: auto; /* Maintain aspect ratio */
  }

  @media (max-width: 768px) {
    /* Adjustments for tablet and smaller screens */
    max-width: 100%; /* Full width on smaller screens */
  }

  /* Add more media queries as needed for different screen sizes */
  @media (max-width: 480px) {
    /* Further adjustments for mobile screens if necessary */
  }
`;