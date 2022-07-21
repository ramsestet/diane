
import React from "react";
import styled from "styled-components";
import NavBarComponent from "./NavBarComponent";
import IntroSection from "./IntroSection";
import WischesSection from "./WischesSection";
import MessageSection from "../assets/MessageSection";

const MainWrapperComponent: React.FC = () => {
    const bg = require("../assets/rotatingEarth.gif")
    const bg2 = require("../assets/bg1Section2.jpg")
    const bg3 = require("../assets/24thAnniv.jpg")
    return(
        <MainWrapper>
            {/*<NavBarComponent/>*/}
            <IntroSection/>
            <MessageSection title="Une nouvelle année"
            description={["Nous n'en sommes souvent pas conscients, mais réalises-tu que tu as déjà parcouru une bonne partie de l'univers !.😌 Tu as fait 23 fois le tour du soleil ?" +
            "                Le temps passe si vite !", "Te voilà à nouveau en train de faire un vingt-quatrième tour !", "Courage pour ce nouveau parcours.", "#Greatness #Love #prosperity"]} emojis={["🚀", "🌏"]}/>
            <WischesSection background={bg2} title="mes meilleurs vœux" description={[
                "Félicitations didi. Je te souhaite le meilleur, la santé, la prospérité et le succès dans toutes tes entreprises. " +
                "Puisses-tu atteindre tous les objectifs que tu t'es fixés pour cette année.", "#Happy 24'th year", "RT. :-)"
            ]} emojis={["❤", "💪"]} heightSkip="100vh"/>
            <WischesSection background={bg3} title="all the best 💥 🔥" description={[]} emojis={[]} heightSkip="200vh"/>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
  display: grid;
  grid-gap: 0;
`
export default MainWrapperComponent