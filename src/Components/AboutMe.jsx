import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <AboutSection>
      <AboutHeading>
        <h1>About Me</h1>
        <p>
          Frontend developer passionate about building responsive and user-friendly web applications.
        </p>
      </AboutHeading>

      <AboutContent>
          
          
      </AboutContent>
    </AboutSection>
  );
};

export default AboutMe;

const AboutSection = styled.section`
  max-width: 1280px;
  margin:auto;
  margin-top: 60px;
  margin-bottom: 50px;

`;

const AboutHeading = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #d8d5d5;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #9AA3B8;
  }

  @media (max-width:1024px) {
      h1 {
    font-size: 38px;
    font-weight: 700;
    color: #d8d5d5;
  }
  p {
    
    font-size: 16px;
    font-weight: 400;
    color: #d8d5d5;
  }
  }
`;

const AboutContent = styled.div`
/* 
  margin-top: 80px;
  border: 0.5px solid;
  border-color: rgb(128, 128, 128) ;
  padding:20px ;

  margin-bottom:20px ;
  padding-bottom: 30px;
  border-radius: 10px;
  background-color: #101011cf; */



`;
