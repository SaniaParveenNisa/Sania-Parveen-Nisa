import React from 'react'
import styled from 'styled-components'

const Knowledgebar = () => {
  return (
    <KnowledgeContainer>
      
    </KnowledgeContainer>
  )
}

export default Knowledgebar

const KnowledgeContainer = styled.section`
margin-top: 30px;
width:100%;
height:80px;
display:flex;
align-items:center;
gap:50px;
`
const KnowledgeContent = styled.div`
  padding-left:80px;
  font-size:25px;
  font-weight:200 ;
  
`
 const KnowledgeLogos = styled.div`
 

 ul{
  display: flex;
  gap: 25px;
 }

 ul li{
  width: 70px;
  height: 70px;
  background-color:white ;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
 }
 ul li img{
  width: 45px;
  object-fit:cover;
  object-position: center ;
  
  

 }
  
 `