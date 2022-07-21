

import React from "react";
import styled from "styled-components";


type Input = {
    background?: string
    title: string
    description: string[]
    emojis: string[]
    heightSkip?: string
}

const WischesSection: React.FC<Input> = (input: Input) => {
    return(
        <WischesWrapper>
            <img src={input.background}/>
            <Title heightSkip={input.heightSkip}>
                <div>{">>"}</div>
                {input.title}
            </Title>
            <Description heightSkip={input.heightSkip}>
                {input.description?.map(item => <div>{item}</div>)}
                {input.emojis?.map(emoji => emoji === "❤" ? <span style={{"color": "red"}}>{emoji}</span>: emoji)}
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

const Title = styled.div<{heightSkip?: string}>`
  font-size: calc(1.5 * var(--font-extra-large));
  text-transform: capitalize;
  color: white;
  font-weight: bold;

  position: absolute;
  top: calc(130% + ${props => props.heightSkip});
  left: 10%;
  transform: translate(-10%);
  
  @media screen and (max-width: 900px){
    top: calc(105% + ${props => props.heightSkip});
    left: 15%;
  }
`

const Description = styled.div<{heightSkip?: string}>`
  font-size: var(--font-large);
  color: white;
  width: 40vw;

  position: absolute;
  top: calc(150% + ${props => props.heightSkip});
  left: 11%;
  transform: translate(-10%);

  @media screen and (max-width: 900px){
    top: calc(140% + ${props => props.heightSkip});
    left: 13%;
    width: 50vw;
  }
`

export default WischesSection