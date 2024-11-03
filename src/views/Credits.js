import React, { useState, useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


// Context
import { useDate } from "../components/DateContext";


// CSS
import "./styles/Credits.css";


import * as Characters from "../components/CreditsAssets";


// // // // // // // Default // // // // // // //
const {
  Chloe_Tamaki: {
    Dear_Idle: School_Festival_Chloe_Cafe_Tamaki_Dear_Idle,
    Dear_Smile: School_Festival_Chloe_Cafe_Tamaki_Dear_Smile,
    Friend_HighTouch: School_Festival_Chloe_Cafe_Tamaki_Friend_HighTouch,
  },
  Kaori_Kasumi: {
    Dear_Idle: Default_Kaori_Kasumi_Dear_Idle,
    Dear_Smile: Default_Kaori_Kasumi_Dear_Smile,
    Friend_HighTouch: Default_Kaori_Kasumi_Friend_HighTouch,
  },
  Ninon_Kokkoro: {
    Dear_Idle: Oedo_Ninon_Ranger_Kokkoro_Dear_Idle,
    Dear_Smile: Oedo_Ninon_Ranger_Kokkoro_Dear_Smile,
    Friend_HighTouch: Oedo_Ninon_Ranger_Kokkoro_Friend_HighTouch,
  },
  Ruka_Saren: {
    Dear_Idle: Sarasalia_Ruka_Saren_Dear_Idle,
    Dear_Smile: Sarasalia_Ruka_Saren_Dear_Smile,
    Friend_HighTouch: Sarasalia_Ruka_Saren_Friend_HighTouch,
  },
  Suzuna_Kyaru: {
    Dear_Idle: Student_Suzuna_Kyaru_Dear_Idle,
    Dear_Smile: Student_Suzuna_Kyaru_Dear_Smile,
    Friend_HighTouch: Student_Suzuna_Kyaru_Friend_HighTouch,
  },
} = Characters;

// // // // // // // New Year // // // // // // //
const New_Year_Hiyori_Rei_Dear_Idle = Characters.New_Year_Hiyori_Rei.Dear_Idle;
const New_Year_Hiyori_Rei_Dear_Smile =
  Characters.New_Year_Hiyori_Rei.Dear_Smile;
const New_Year_Hiyori_Rei_Friend_HighTouch =
  Characters.New_Year_Hiyori_Rei.Friend_HighTouch;

// // // // // // // Summer // // // // // // //
const {
  Summer_Akino_Saren: {
    Dear_Idle: Summer_Akino_Saren_Dear_Idle,
    Dear_Smile: Summer_Akino_Saren_Dear_Smile,
    Friend_HighTouch: Summer_Akino_Saren_Friend_HighTouch,
  },
  Summer_Kaori_Kasumi: {
    Dear_Idle: Summer_Kaori_Kasumi_Dear_Idle,
    Dear_Smile: Summer_Kaori_Kasumi_Dear_Smile,
    Friend_HighTouch: Summer_Kaori_Kasumi_Friend_HighTouch,
  },
  Summer_Nozomi_Suzuna: {
    Dear_Idle: Summer_Nozomi_Suzuna_Dear_Idle,
    Dear_Smile: Summer_Nozomi_Suzuna_Dear_Smile,
    Friend_HighTouch: Summer_Nozomi_Suzuna_Friend_HighTouch,
  },
  Summer_Ruka_Rei: {
    Dear_Idle: Summer_Ruka_Rei_Dear_Idle,
    Dear_Smile: Summer_Ruka_Rei_Dear_Smile,
    Friend_HighTouch: Summer_Ruka_Rei_Friend_HighTouch,
  },
  Summer_Tsumugi_Tamaki: {
    Dear_Idle: Summer_Tsumugi_Tamaki_Dear_Idle,
    Dear_Smile: Summer_Tsumugi_Tamaki_Dear_Smile,
    Friend_HighTouch: Summer_Tsumugi_Tamaki_Friend_HighTouch,
  },
} = Characters;

// // // // // // // Halloween // // // // // // //
const Halloween_Ninon_Suzuna_Dear_Idle =
  Characters.Halloween_Ninon_Suzuna.Dear_Idle;
const Halloween_Ninon_Suzuna_Dear_Smile =
  Characters.Halloween_Ninon_Suzuna.Dear_Smile;
const Halloween_Ninon_Suzuna_Friend_HighTouch =
  Characters.Halloween_Ninon_Suzuna.Friend_HighTouch;

// // // // // // // Christmas // // // // // // //
const Christmas_Akari_Yori_Dear_Idle =
  Characters.Christmas_Akari_Yori.Dear_Idle;
const Christmas_Akari_Yori_Dear_Smile =
  Characters.Christmas_Akari_Yori.Dear_Smile;
const Christmas_Akari_Yori_Friend_HighTouch =
  Characters.Christmas_Akari_Yori.Friend_HighTouch;


function Credits() {
  const { isNewYear, isSummer, isHalloween, isChristmas } = useDate();

  const dearIdleDefault = useMemo(
    () => [
      School_Festival_Chloe_Cafe_Tamaki_Dear_Idle,
      Default_Kaori_Kasumi_Dear_Idle,
      Oedo_Ninon_Ranger_Kokkoro_Dear_Idle,
      Sarasalia_Ruka_Saren_Dear_Idle,
      Student_Suzuna_Kyaru_Dear_Idle,
    ],
    []
  );

  const dearSmileDefault = useMemo(
    () => [
      School_Festival_Chloe_Cafe_Tamaki_Dear_Smile,
      Default_Kaori_Kasumi_Dear_Smile,
      Oedo_Ninon_Ranger_Kokkoro_Dear_Smile,
      Sarasalia_Ruka_Saren_Dear_Smile,
      Student_Suzuna_Kyaru_Dear_Smile,
    ],
    []
  );

  const friendHighTouchDefault = useMemo(
    () => [
      School_Festival_Chloe_Cafe_Tamaki_Friend_HighTouch,
      Default_Kaori_Kasumi_Friend_HighTouch,
      Oedo_Ninon_Ranger_Kokkoro_Friend_HighTouch,
      Sarasalia_Ruka_Saren_Friend_HighTouch,
      Student_Suzuna_Kyaru_Friend_HighTouch,
    ],
    []
  );

  const dearIdleSummer = useMemo(
    () => [
      Summer_Akino_Saren_Dear_Idle,
      Summer_Kaori_Kasumi_Dear_Idle,
      Summer_Nozomi_Suzuna_Dear_Idle,
      Summer_Ruka_Rei_Dear_Idle,
      Summer_Tsumugi_Tamaki_Dear_Idle,
    ],
    []
  );

  const dearSmileSummer = useMemo(
    () => [
      Summer_Akino_Saren_Dear_Smile,
      Summer_Kaori_Kasumi_Dear_Smile,
      Summer_Nozomi_Suzuna_Dear_Smile,
      Summer_Ruka_Rei_Dear_Smile,
      Summer_Tsumugi_Tamaki_Dear_Smile,
    ],
    []
  );

  const friendHighTouchSummer = useMemo(
    () => [
      Summer_Akino_Saren_Friend_HighTouch,
      Summer_Kaori_Kasumi_Friend_HighTouch,
      Summer_Nozomi_Suzuna_Friend_HighTouch,
      Summer_Ruka_Rei_Friend_HighTouch,
      Summer_Tsumugi_Tamaki_Friend_HighTouch,
    ],
    []
  );

  const [isIdle, setIsIdle] = useState(true);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);


  useEffect(() => {
    // Generate a random index for the initial character
    const initialCharacterIndex = Math.floor(
      Math.random() *
        (isSummer ? dearIdleSummer.length : dearIdleDefault.length)
    );
    setCurrentCharacterIndex(initialCharacterIndex);

    const updateGif = () => {
      setIsIdle((prevMode) => {
        setCurrentCharacterIndex((prevIndex) => {
          const dearIdlerray = isSummer ? dearIdleSummer : dearIdleDefault;
          const dearSmileArray = isSummer ? dearSmileSummer : dearSmileDefault;
          const friendHighTouchArray = isSummer
            ? friendHighTouchSummer
            : friendHighTouchDefault;
          if (prevMode === true) {
            return prevIndex % dearIdlerray.length;
          } else if (prevMode === false) {
            return prevIndex % dearSmileArray.length;
          } else {
            return prevIndex % friendHighTouchArray.length;
          }
        });

        // Toggle isIdle between true, false and null
        return prevMode === true ? false : prevMode === false ? null : true;
      });
    };

    // Initial update
    updateGif();

    // Set interval to update
    const interval = setInterval(updateGif, 1500);

    // Clear timeout on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [
    isSummer,
    dearIdleDefault,
    dearSmileDefault,
    friendHighTouchDefault,
    dearIdleSummer,
    dearSmileSummer,
    friendHighTouchSummer,
  ]);


  let currentCharacter;
  if (isNewYear) {
    currentCharacter =
      isIdle === false
        ? New_Year_Hiyori_Rei_Friend_HighTouch
        : isIdle === true
        ? New_Year_Hiyori_Rei_Dear_Smile
        : New_Year_Hiyori_Rei_Dear_Idle;
  } else if (isSummer) {
    currentCharacter =
      isIdle === false
        ? friendHighTouchSummer[currentCharacterIndex]
        : isIdle === true
        ? dearSmileSummer[currentCharacterIndex]
        : dearIdleSummer[currentCharacterIndex];
  } else if (isHalloween) {
    currentCharacter =
      isIdle === false
        ? Halloween_Ninon_Suzuna_Friend_HighTouch
        : isIdle === true
        ? Halloween_Ninon_Suzuna_Dear_Smile
        : Halloween_Ninon_Suzuna_Dear_Idle;
  } else if (isChristmas) {
    currentCharacter =
      isIdle === false
        ? Christmas_Akari_Yori_Friend_HighTouch
        : isIdle === true
        ? Christmas_Akari_Yori_Dear_Smile
        : Christmas_Akari_Yori_Dear_Idle;
  } else {
    // Default condition if not in any specific season
    currentCharacter =
      isIdle === false
        ? friendHighTouchDefault[currentCharacterIndex]
        : isIdle === true
        ? dearSmileDefault[currentCharacterIndex]
        : dearIdleDefault[currentCharacterIndex];
  }


  return (
    <section className="credits-CSS">
      <Container fluid>
        <img
          className="credits-gif-CSS"
          src={currentCharacter}
          alt="Credits Gif"
        />
      </Container>
    </section>
  );
}

export default Credits;
