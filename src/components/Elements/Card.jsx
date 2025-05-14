import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Info, Mail, MessageSquare } from 'lucide-react';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <Link to="/Aboutus" className="glass" style={{ '--r': -15 }} onClick={() => scrollTo(0, 0)}>
          <Info size={64} />
          <span className="label">About</span>
        </Link>
        <Link to="/EnquiryForm" className="glass" style={{ '--r': 5 }} onClick={() => scrollTo(0, 0)}>
          <MessageSquare size={64} />
          <span className="label">Enquiry</span>
        </Link>
        <Link to="/Contact" className="glass" style={{ '--r': 25 }} onClick={() => scrollTo(0, 0)}>
          <Mail size={64} />
          <span className="label">Contact</span>
        </Link>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  margin: 0;
  padding: 0;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  .container .glass {
    position: relative;
    width: 240px; /* Increased width */
    height: 280px; /* Increased height */
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s;
    border-radius: 15px; /* Slightly larger border radius */
    margin: 0 -60px; /* Adjusted margin to maintain spacing */
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
    text-decoration: none;
    color: inherit;
    
    @media (max-width: 768px) {
      width: 180px;
      height: 60px;
      margin: 0;
      transform: rotate(0deg);
      flex-direction: row;
      padding: 10px;
      background: #003044;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background 0.3s, transform 0.3s;
      
      &:hover {
        background: #F1592D;
        transform: translateY(-3px);
      }
      
      & svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        color: white;
      }
    }
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 20px; /* Adjusted margin on hover */
    
    @media (max-width: 768px) {
      margin: 0;
    }
  }
  
  .container .glass .label {
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 50px; /* Increased height for the text area */
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1.2em; /* Increased font size for the text */
    
    @media (max-width: 768px) {
      position: relative;
      bottom: 0;
      height: auto;
      background: transparent;
      color: white;
      font-size: 1em;
      width: auto;
    }
  }
`;

export default Card;