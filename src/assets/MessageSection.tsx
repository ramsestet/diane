
import React from "react";
import styled from "styled-components";


type Input = {
    background?: string
    title: string
    description: string[]
    emojis: string[]
}

const MessageSection: React.FC<Input> = (input: Input) => {
    return(
        <EarthWrapper>
            <img src={input.background}/>
            <Title>
                <div>{">>"}</div>
                {input.title}
            </Title>
            <Description>
                {input.description?.map(item => <div>{item}</div>)}
                {input.emojis?.map(emoji => emoji)}
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
    top: 116%;
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
    top: 150%;
    left: 13%;
    width: 65vw;
  }
`

export default MessageSection