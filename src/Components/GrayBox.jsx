import React from 'react'
import styled from 'styled-components'
const GrayBox = (props) => {
  return (
    <TheBox>
      <img src={props.img} alt="" />
    </TheBox>
  )
}

export default GrayBox

const TheBox = styled.div`
    
    width: 130px;
    height: 170px;
    background-color:#10101082 ;
    border: 1px solid;
    border-color: #23232363;
    border-radius: 10px;
    display: flex;
    flex-direction:row ;
    justify-content:center;
    padding-top: 12px;

    img{
      width: 100px;
      height: 100px;
    }

    @media (max-width: 480px) {
      height: 130px;
      width: 95px;
      border: none; 
      

      img{
      width: 80px;
      height: 80px;
      }
    }
`