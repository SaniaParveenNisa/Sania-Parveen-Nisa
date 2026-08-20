import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Introduction = () => {
  let languages = [
    "Hello!",
    "नमस्ते!",
    "নমস্কার!",
    "Hola!",
    "Bonjour!",
    "Hallo!",
    "Ciao!",
    "Olá!",
    "مرحبا!",
    "你好!",
    "こんにちは!",
    "안녕하세요!",
    "Привет!",
    "Γεια σου!",
    "สวัสดี!",
    "Xin chào!",
  ];
  const [text, setText] = useState(languages[0]);

  useEffect(() => {

    let lastNumber = null;
    const RandomNumber = () => {
      let Num;

      do {
        Num = Math.floor(Math.random() * languages.length);
      } while (Num === lastNumber);

      lastNumber = Num;

      return Num;
    };

     const interval = setInterval(() => {
        setText(languages[RandomNumber()]);
      },2800);
      return () => clearInterval(interval);

    
  }, []);

  return (
    
    <IntroductionContainer>
      <IntroductionContent>
        <h1 key={text} className="gratings">{text}</h1>
        <h1>I'm Sania </h1>
        <p>
          I help organizations turn ideas into impactful digital products
          through thoughtful design and development.
        </p>

        <ButtonContainer>
            <button><a href="#portfolio">View Project</a></button>
            <a href="/Files/SaniaParveenNisaCV.pdf" download>
            <button>Download CV</button>

            </a>
        </ButtonContainer>

      </IntroductionContent>

       <SelfImage>
        <img src="/Images/selfImage.jpeg" alt="" />
      </SelfImage>

    </IntroductionContainer>
    

   
    
  );
};

export default Introduction;


const IntroductionContainer = styled.section`
  max-width: 1280px;
  display: flex;
  gap:20px ;
  margin: auto;
  margin-top: 70px;

  @media (max-width:1023px){

    display:flex;
    flex-direction:column;
    
  }

`;
const IntroductionContent = styled.div`
.gratings {
  display: inline-block;
  animation: zoomRotateDown 2.8s ease forwards;
  transform-origin: top;
  backface-visibility: hidden;
}

@keyframes zoomRotateDown {


  0% {
    opacity: 0;
    transform: perspective(600px) rotateX(-60deg) scale(0.6);
  }

  15% {
    opacity: 1;
    transform: perspective(600px) rotateX(0deg) scale(1);
  }

  /* stay visible for ~2s */
  85% {
    opacity: 1;
    transform: perspective(600px) rotateX(0deg) scale(1);
  }

  /* rotate down and disappear */
  100% {
    opacity: 0;
    transform: perspective(600px) rotateX(90deg) scale(0.8);
  }
}

  h1 {
    font-size: 72px;
    font-weight: 800;
    line-height: 78px;
  }
  p {
    margin-top: 40px;
    color: lab(65.9269 -0.832707 -8.17473);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    max-width: 600px;
  }


  @media (max-width:1023px){
    padding-left: 25px;
    margin-top: 0 auto ;

    h1{
    font-size: 36px;
    font-weight: 800;
    line-height: 40px;
    }

    p{
      font-size: 18px;
      line-height: 28px;
    }

  }

@media (max-width: 1024px) {

padding-left:25px;

}

`;

const ButtonContainer = styled.div`

display: flex;
margin-top: 35px;
gap: 20px;
 
 button:first-child{
border: 2px solid #82e5fe ;
padding: 9px 26px;
border-radius:30px ;


         
 }

button:last-child{
border: 2px solid #747877 ;
padding: 9px 26px;
border-radius:30px ;
cursor: pointer;
 }
`

const SelfImage = styled.div`

  width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden;
  margin-left:130px ;
 
img{
width: 100%;
  height: 100%;
  object-fit:cover;
  object-position: center 20%;
}

@media (max-width:1023px){
   width: 300px;
  height: 250px;
  border-radius: 60%;
  margin:auto ;
  margin-top: 25px ;

  img{
  width: 100%;
  height: 100%;
  object-fit:cover;
  object-position: center 20%;
  }

}

@media (max-width: 1023px) {
  width: 300px;
  height: 300px;
  border-radius: 50%;

}

`;
