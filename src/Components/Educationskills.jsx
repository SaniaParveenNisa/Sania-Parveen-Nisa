import React from "react";
import styled from "styled-components";
import { easeOut, motion } from "motion/react";
import GrayBox from "./GrayBox";

const Educationskills = () => {


  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftToMiddle = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        easeOut,
      },
    },
  };

  const rightToMiddle = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        easeOut,
      },
    },
  };

  return (
    <EducationskillsSection
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Approach variants={leftToMiddle} initial="hidden" whileInView="visible">
        <h3>Approach</h3>
        <p>
          I build responsive and user-friendly web applications with a focus on
          clean code, performance optimization, and intuitive interfaces.
          Through my projects, I aim to create solutions that solve real-world
          problems while continuously improving my skills as a developer.
        </p>
      </Approach>

      <Skills variants={rightToMiddle} initial="hidden" whileInView="visible">
        <Boxes>
          <GrayBox img="/Images/html.png" />
          <GrayBox img="/Images/css.png" />
          <GrayBox img="/Images/js.png" />
          <GrayBox img="/Images/react.png" />
          <GrayBox img="/Images/nodejs.png" />
          <GrayBox img="/Images/mongodb.png" />
        </Boxes>
      </Skills>

      <Education variants={leftToMiddle} initial="hidden" whileInView="visible">
        <h3>Education</h3>
        <ul>
          <li>BCA - Bachelor of Computer Applications</li>
          <li>Techno India University</li>
          <li>2023 - 2027 (Expected)</li>
          <li>CGPA: 8.38 (till 5th semester)</li>
        </ul>

        <ul>
          <li>Higher Secondary (Class XII)</li>
          <li>Madhyamgram Girls' High School</li>
          <li>WBCHSE - 2023</li>
          <li>80%</li>
        </ul>
      </Education>
    </EducationskillsSection>
  );
};

export default Educationskills;

const EducationskillsSection = styled(motion.section)`
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 12px;
  margin-bottom: 120px;


  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const Approach = styled(motion.div)`
  background-color: #10101064;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 15px;
  height: 230px;
  width: 100%;

  h3 {
    font-size: 28px;
    padding-bottom: 20px;
  }

  p {
    font-size: 17px;
    color: #9ba7b5;
  }

  @media (max-width: 1024px) {
    margin: auto;
    height: 230px;
    width: 90%;
  }

  @media (max-width: 480px) {
    margin: auto;
    height: 350px;
    width: 90%;
  }
`;

const Skills = styled(motion.section)`
  background-color: #10101064;
  border: 1px solid gray;
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  grid-row: span 2;

  @media (max-width: 1024px) {
    margin: auto;
    height: 450px;
    width: 90%;
  }

  @media (max-width: 480px) {
    margin: auto;
    height: 330px;
    width: 90%;
    padding: 10px;
    padding-top: 30px;
  }
`;

const Education = styled(motion.div)`
  padding: 30px;
  padding-bottom: 12px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 15px;
  background-color: #10101064;
  h3 {
    font-size: 28px;
    padding-bottom: 20px;
  }
  ul {
    margin-bottom: 20px;
  }

  ul li {
    font-size: 16px;
    color: #9ba7b5;
  }

  @media (max-width: 1024px) {
    margin: auto;
    height: 335px;
    width: 90%;
  }
`;

const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;
