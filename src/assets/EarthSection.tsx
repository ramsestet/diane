
import React from "react";
import styled from "styled-components";

const EarthSection: React.FC = () => {
    const bg = require("../assets/rotatingEarth.gif")
    return(
        <EarthWrapper>
            <img src={bg}/>
            <Title>
                <div>{">>"}</div>
                Une nouvelle année
            </Title>
            <Description>
                Nous n'en sommes souvent pas conscients, mais réalises-tu que tu as déjà parcouru une bonne partie de l'univers !.😌 Tu as fait 23 fois le tour du soleil ?
                Le temps passe si vite !
                <div>Te voilà à nouveau en train de faire un vingt-quatrième tour !</div>
                <div>🚀🌏</div>
            </Description>
        </EarthWrapper>
    )
}
const EarthWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  background-color: black;
  border: 2px solid black;
  
  & img:nth-child(1){
    height: 400px;
    aspect-ratio: inherit;
    object-fit: cover;

    position: absolute;
    top: 105%;
    left: 75%;
    //transform: translate(-100%);
  }
  
  @media screen and (max-width: 900px){
    && img:nth-child(1){
      left: 55%;
      height: 200px;
    }   
  }
`


const Title = styled.div`
  font-size: calc(1.5 * var(--font-extra-large));
  text-transform: capitalize;
  color: white;
  font-weight: bold;

  position: absolute;
  top: 130%;
  left: 10%;
  transform: translate(-10%);
  
  @media screen and (max-width: 900px){
    top: 120%;
    left: 15%;
  }
`

const Description = styled.div`
  font-size: var(--font-large);
  color: white;
  width: 40vw;

  position: absolute;
  top: 150%;
  left: 11%;
  transform: translate(-10%);

  @media screen and (max-width: 900px){
    top: 143%;
    left: 13%;
    width: 65vw;
  }
`

export default EarthSection