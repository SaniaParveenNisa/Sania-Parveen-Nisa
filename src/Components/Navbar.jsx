import React, { useState } from "react";
import styled from "styled-components";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isOpen , setisOpen] = useState(false)

  const toggoleHambargour = () => {
    setisOpen ((prev)=> !prev)
  };

  return (
    <NavContainer>
      <div className="text-white py-5 px-4 md:px-10 flex justify-between items-center Navbar">
        <div className=" NavName text-2xl font-heading pl-3 lg:pl-30 mt-5 ">
          | Sania parveen Nisa
        </div>
        <button onClick={toggoleHambargour} className="MenuBtn">
          <LuMenu fontSize="28px" />
        </button>
        <ul className="flex gap-8 pr-20 text-base NavLinks">
          <li><a href="#home">Home</a></li>
          <li> <a href="#about">About</a></li>
          <li> <a href="#portfolio">Portfolio</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
      </div>
      {isOpen &&(
        <div className="hambargour ">
        <ul>
         <li><a href="#home">Home</a></li>
          <li> <a href="#about">About</a></li>
          <li> <a href="#portfolio">Portfolio</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
      </div>
      )}
      
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  width:100%;
  .hambargour {
    display: none;
  }

  .MenuBtn {
    display: none;
  }

  @media (max-width: 1023px) {
    .Navbar {
      width: 100%;
      box-sizing: border-box;
      background-color: #0a0a0a;
      position: relative;
      z-index: 1000;
     
    }

    .NavName {
      padding-left: 12px;
      font-size: 19px ;
    }

    .NavLinks {
      display: none;
    }

    .MenuBtn {
      display: block;
      cursor: pointer;
      margin-top:0px;
    }

    .hambargour {
      
      display: block;
      cursor: pointer;
      position: absolute;
      background-color: #0a0a0a;
      margin: 4px;
      margin-right:10px;
      width: 100%;
      border: none;
      border-radius: 10px;
      padding: 15px;
      /* padding-left: 40px; */
      box-sizing: border-box;
      line-height: 30px;
      z-index: 999;
    }

        .hambargour ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .hambargour li {
      padding: 15px 20px;
    }
  }
`;
