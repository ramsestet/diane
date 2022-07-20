
import React from "react";
import styled from "styled-components";

const NavBarComponent: React.FC = () => {
    const logo = require("../assets/logo.png")
    return(
        <NavBarWrapper>
            <img src={logo}/>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.div`
  display: grid;
  justify-items: left;
  height: 8vh;
  width: 100%;
  background-color: grey;
  padding: 5px 5px 5px 5px;
  
  & img{
    transform: scale(0.6);
  }
`

export default NavBarComponent