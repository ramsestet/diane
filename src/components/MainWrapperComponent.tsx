
import React from "react";
import styled from "styled-components";
import NavBarComponent from "./NavBarComponent";
import IntroSection from "./IntroSection";
import WischesSection from "./WischesSection";
import EarthSection from "../assets/EarthSection";

const MainWrapperComponent: React.FC = () => {
    return(
        <MainWrapper>
            {/*<NavBarComponent/>*/}
            <IntroSection/>
            <EarthSection/>
            <WischesSection/>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
  display: grid;
  grid-gap: 0;
`
export default MainWrapperComponent