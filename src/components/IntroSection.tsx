

import React from "react";
import styled from "styled-components";

const IntroSection: React.FC = () => {
    const bg = require("../assets/section1.jpg")
    const text1 = require("../assets/text1.png")
    const text2 = require("../assets/text2.png")
    const text3= require("../assets/text3.png")
    const fallingOjects = require("../assets/fallingObjects.gif")
    return(
        <IntroWrapper>
            <img src={bg}/>
            <img src={text1}/>
            <img src={text2}/>
            <img src={text3}/>
            <img src={fallingOjects}/>
        </IntroWrapper>
    )
}

const IntroWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  border: 2px solid black;
  
  & img:nth-child(1){
    height: inherit;
    width: inherit;
    object-fit: cover;
  }
  & img:nth-child(2){
    height: 90px;
    aspect-ratio: inherit;
    object-fit: cover;
    
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);   
  }

  & img:nth-child(3){
    height: 70px;
    object-fit: cover;

    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
  } 
  & img:nth-child(4){
    height: 70px;
    object-fit: cover;

    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
  }

  & img:nth-child(5){
    height: 75vh;
    width: 100vw;
    aspect-ratio: inherit;
    object-fit: cover;

    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%);
  }
  
 
  
  @media screen and (max-width: 900px){
    & img:nth-child(2) {
      height: 55px;
    }
    & img:nth-child(3) {
      height: 50px;
    } 
    & img:nth-child(4) {
      height: 50px;
    }
  }
`

export default IntroSection