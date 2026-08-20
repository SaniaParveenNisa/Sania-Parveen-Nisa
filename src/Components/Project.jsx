import React from "react";
import styled from "styled-components";
import ProjectBox from "./ProjectBox";

const Project = () => {
  return (
    <ProjectSection>
      <HeadingContainer>
        <h1>Things I’ve Built</h1>
        <p>
          A selection of projects showcasing my frontend development skills.
        </p>
      </HeadingContainer>

      <ProjectContainer>
        <ProjectBox
          img="/Images/sugerbloom.png"
          Heading="SugerBloom - Cake Shop "
          text="A modern e-commerce cake shop built with React and Firebase, featuring product browsing, category filtering, cart management, and a responsive, seamless shopping experience. "
          techs={["react", "firebase", "Styled Components"]}
          href="https://sugarblooml.netlify.app/"
        />

        <ProjectBox
          img="/Images/diceGame.png"
          Heading="RollX — Dice Game "
          text="An interactive dice-rolling game built with React, featuring smooth animations, score tracking, and a clean, responsive UI for an engaging play experience."
          techs={["react","Styled Components"]}
          href="https://rollx.netlify.app/"
        />

        
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Project;

const ProjectSection = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 100px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 20px;
    margin-bottom: 70px;
  }

  @media (max-width: 480px) {
    padding: 0 15px;
    margin-bottom: 50px;
  }
`;


const HeadingContainer = styled.div`

  margin-bottom: 40px;
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 20px;
    color: #d8d5d5;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #9aa3b8;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 38px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
      padding: 0 10px;
    }
  }

`;
const ProjectContainer = styled.div`
  display: grid;
  
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

   @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;
