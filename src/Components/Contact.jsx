import React from "react";
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <ContactSection>
      <h1>Have a Project in Mind? Let's Talk.</h1>

      <ContactBoxes>
        <div className="box">
          <div className="icon">
            <CiLocationOn size={28} />
          </div>
          <div className="content">
            <h3>Location</h3>
            <p>Kolkata, West Bengal, India</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <IoCallOutline size={29} />
          </div>
          <div className="content">
            <h3>Phone</h3>
            <p>+91 7980838456</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <MdOutlineAlternateEmail size={28} />
          </div>
          <div className="content">
            <h3>Mail</h3>
            <p>saniaparveen861@gmail.com</p>
          </div>
        </div>
      </ContactBoxes>

      <div className="line"></div>

      <div className="copyright">
        <p>copyright @ 2026 - All Right Reserved.</p>
      </div>

    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  h1 {
    display: flex;
    justify-content: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 20px;
    color: #d8d5d5;
    margin-top: 40px;
    margin-bottom: 100px;
  }

    @media (max-width: 768px) {
    padding: 0 20px 60px;

    h1 {
      font-size: 38px;
      margin-bottom: 60px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 15px 50px;

    h1 {
      font-size: 30px;
      line-height: 1.3;
      margin-top: 30px;
      margin-bottom: 45px;
    }
  }


  .line{
    width: 80%;
    height: 3px;
    background-color: #82e5fe;
    border-radius: 80px;
    margin-bottom: 30px;
  }

  .copyright{
    p{
    margin-bottom: 40px;
    font-size: 15px;
    font-weight: 200;

    }
  }
`;

const ContactBoxes = styled.div`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;

  .box {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
}

  h3 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
    color: #998080;
  }


  @media (max-width: 1000px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 35px 50px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;

    .box {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 17px;
    }

    p {
      font-size: 14px;
    }
  }
`;
