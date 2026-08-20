import { span } from "motion/react-m";
import { CgArrowsExpandRight } from "react-icons/cg";

import React from "react";
import styled from "styled-components";

const ProjectBox = ({ img, Heading, text, href, techs }) => {
  return (
    <Box>
      <div className="imgBox">
        <img src={img} alt="" />
        <a href={href}>{<button><CgArrowsExpandRight size={14}/>Live</button>}</a>
      </div>

      <div className="content">
        <h2>{Heading}</h2>
        <p>{text}</p>
        <div className="tech_stack">
          {techs?.map((tech) => (
            <span className="techs" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ProjectBox;

const Box = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  max-height: 365px;
  background-color: #191818bc;
  border-radius: 25px;
  overflow: hidden;

  .imgBox {
    position: relative;
  }

  .imgBox button {
    position: absolute;
    top: 15px;
    right: 3%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;


    padding: 6px 10px;
    background-color: #1f1e1edf;
    border: 1px solid;
    border-color: gray;
    border-radius: 25px;
    font-size: 10px;
    cursor: pointer;
  }

  img {
    width: 400px;
    height: 200px;

    border-radius: 15px;
  }

  .content {
    margin-top: 10px;
    button {
      padding: 10px 20px;
      background-color: #363434e0;
      border: 1px solid;
      border-color: gray;
      border-radius: 25px;
    }

    h2 {
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 6px;
    }

    p {
      font-size: 14px;
      font-weight: 200;
      line-height: 21px;
      color: #e3e1e1;
      padding-bottom: 5px;
    }
    .tech_stack {
      display: flex;
      flex-direction: row;
      gap: 10px;
      padding-top: 8px;
      flex-wrap: wrap;
    }
    .techs {
      background-color: #363434e0;
      border: 1px solid;
      border-color: gray;
      border-radius: 25px;
      padding: 0px 10px;
      font-weight: 200;
      font-size: 14px;

      align-items: center;
    }
  }
  .content:hover {
    background-color: #5a595993;
  }

   @media (max-width: 480px) {
    max-width: 100%;
    padding: 8px;

    img {
      height: 180px;
    }

    .content {
      h2 {
        font-size: 18px;
      }

      p {
        font-size: 13px;
        line-height: 19px;
      }

      .techs {
        font-size: 12px;
        padding: 4px 9px;
      }
    }
  }

  @media (max-width: 350px) {

 

    img {
      height: 160px;
    }

    .content {
      h2 {
        font-size: 17px;
      }

      p {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;
