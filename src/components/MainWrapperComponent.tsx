
import React from "react";
import styled from "styled-components";
import NavBarComponent from "./NavBarComponent";
import IntroSection from "./IntroSection";
import WischesSection from "./WischesSection";
import MessageSection from "../assets/MessageSection";

const MainWrapperComponent: React.FC = () => {
    const bg = require("../assets/rotatingEarth.gif")
    return(
        <MainWrapper>
            {/*<NavBarComponent/>*/}
            <IntroSection/>
            <MessageSection title="Une nouvelle année"
            description={["Nous n'en sommes souvent pas conscients, mais réalises-tu que tu as déjà parcouru une bonne partie de l'univers !.😌 Tu as fait 23 fois le tour du soleil ?\n" +
            "                Le temps passe si vite !", "Te voilà à nouveau en train de faire un vingt-quatrième tour !"]} emojis={["🚀", "🌏"]}/>
            <WischesSection/>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
  display: grid;
  grid-gap: 0;
`
export default MainWrapperComponent