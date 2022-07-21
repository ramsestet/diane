

import React from "react";
import styled from "styled-components";

const WischesSection: React.FC = () => {
    const bg = require("../assets/bg1Section2.jpg")
    return(
        <WischesWrapper>
            <img src={bg}/>
            <Title>
                <div>{">>"}</div>
                mes meilleurs vœux
            </Title>
            <Description>
                Félicitations didi.
                Je te souhaite le meilleur, la santé, la prospérité et le succès dans toutes tes entreprises.
                Puisses-tu atteindre tous les objectifs que tu t'es fixés pour cette année.
                <div>#Happy New Year</div>
                <div>RT. :-)</div>
                <div><span style={{"color": "red"}}>❤</span> 💪</div>
            </Description>
        </WischesWrapper>
    )
}

const WischesWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;

  & img:nth-child(1){
    height: inherit;
    width: inherit;
    object-fit: cover;
  }
`

const Title = styled.div`
  font-size: calc(1.5 * var(--font-extra-large));
  text-transform: capitalize;
  color: white;
  font-weight: bold;

  position: absolute;
  top: calc(130% + 100vh);
  left: 10%;
  transform: translate(-10%);
  
  @media screen and (max-width: 900px){
    top: calc(105% + 100vh);
    left: 15%;
  }
`

const Description = styled.div`
  font-size: var(--font-large);
  color: white;
  width: 40vw;

  position: absolute;
  top: calc(150% + 100vh);
  left: 11%;
  transform: translate(-10%);

  @media screen and (max-width: 900px){
    top: calc(140% + 100vh);
    left: 13%;
    width: 43vw;
  }
`

export default WischesSection