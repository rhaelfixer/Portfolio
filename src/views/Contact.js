import React, { useState, useEffect, useMemo } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


// Context
import { useDate } from "../components/DateContext";


// CSS
import "./styles/Contact.css";


import * as Characters from "../components/ContactAssets";


// // // // // // // Default // // // // // // //
const {
  Kokkoro: { Dear_Idle: Ranger_Kokkoro_Dear_Idle, Greet: Ranger_Kokkoro_Greet },
  Kyaru: { Dear_Idle: Student_Kyaru_Dear_Idle, Greet: Student_Kyaru_Greet },
  Mifuyu: { Dear_Idle: Work_Mifuyu_Dear_Idle, Greet: Work_Mifuyu_Greet },
  Ruka: { Dear_Idle: Sarasalia_Ruka_Dear_Idle, Greet: Sarasalia_Ruka_Greet },
  Saren: { Dear_Idle: Sarasalia_Saren_Dear_Idle, Greet: Sarasalia_Saren_Greet },
  Suzuna: { Dear_Idle: Student_Suzuna_Dear_Idle, Greet: Student_Suzuna_Greet },
  Yukari: { Dear_Idle: Camp_Yukari_Dear_Idle, Greet: Camp_Yukari_Greet },
} = Characters;

// // // // // // // New Year // // // // // // //
const New_Year_Ruka_Dear_Idle = Characters.New_Year_Ruka.Dear_Idle;
const New_Year_Ruka_Greet = Characters.New_Year_Ruka.Greet;

// // // // // // // Summer // // // // // // //
const {
  Summer_Kokkoro: {
    Dear_Idle: Summer_Kokkoro_Dear_Idle,
    Greet: Summer_Kokkoro_Greet,
  },
  Summer_Kyaru: {
    Dear_Idle: Summer_Kyaru_Dear_Idle,
    Greet: Summer_Kyaru_Greet,
  },
  Summer_Mifuyu: {
    Dear_Idle: Summer_Mifuyu_Dear_Idle,
    Greet: Summer_Mifuyu_Greet,
  },
  Summer_Ruka: { Dear_Idle: Summer_Ruka_Dear_Idle, Greet: Summer_Ruka_Greet },
  Summer_Saren: {
    Dear_Idle: Summer_Saren_Dear_Idle,
    Greet: Summer_Saren_Greet,
  },
  Summer_Suzuna: {
    Dear_Idle: Summer_Suzuna_Dear_Idle,
    Greet: Summer_Suzuna_Greet,
  },
  Summer_Yukari: {
    Dear_Idle: Summer_Yukari_Dear_Idle,
    Greet: Summer_Yukari_Greet,
  },
} = Characters;

// // // // // // // Halloween // // // // // // //
const Halloween_Rei_Dear_Idle = Characters.Halloween_Rei.Dear_Idle;
const Halloween_Rei_Greet = Characters.Halloween_Rei.Greet;

// // // // // // // Christmas // // // // // // //
const Christmas_Saren_Dear_Idle = Characters.Christmas_Saren.Dear_Idle;
const Christmas_Saren_Greet = Characters.Christmas_Saren.Greet;


function Contact() {
  const { isNewYear, isSummer, isHalloween, isChristmas } = useDate();

  const dearIdleDefault = useMemo(
    () => [
      Ranger_Kokkoro_Dear_Idle,
      Student_Kyaru_Dear_Idle,
      Work_Mifuyu_Dear_Idle,
      Sarasalia_Ruka_Dear_Idle,
      Sarasalia_Saren_Dear_Idle,
      Student_Suzuna_Dear_Idle,
      Camp_Yukari_Dear_Idle,
    ],
    []
  );

  const greetDefault = useMemo(
    () => [
      Ranger_Kokkoro_Greet,
      Student_Kyaru_Greet,
      Work_Mifuyu_Greet,
      Sarasalia_Ruka_Greet,
      Sarasalia_Saren_Greet,
      Student_Suzuna_Greet,
      Camp_Yukari_Greet,
    ],
    []
  );

  const dearIdleSummer = useMemo(
    () => [
      Summer_Kokkoro_Dear_Idle,
      Summer_Kyaru_Dear_Idle,
      Summer_Mifuyu_Dear_Idle,
      Summer_Ruka_Dear_Idle,
      Summer_Saren_Dear_Idle,
      Summer_Suzuna_Dear_Idle,
      Summer_Yukari_Dear_Idle,
    ],
    []
  );

  const greetSummer = useMemo(
    () => [
      Summer_Kokkoro_Greet,
      Summer_Kyaru_Greet,
      Summer_Mifuyu_Greet,
      Summer_Ruka_Greet,
      Summer_Saren_Greet,
      Summer_Suzuna_Greet,
      Summer_Yukari_Greet,
    ],
    []
  );

  const [isIdle, setIsIdle] = useState(true);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);


  useEffect(() => {
    // Generate a random index for the initial character
    const initialCharacterIndex = Math.floor(
      Math.random() * dearIdleDefault.length
    );
    setCurrentCharacterIndex(initialCharacterIndex);

    const updateGif = () => {
      setIsIdle((prevMode) => {
        setCurrentCharacterIndex((prevIndex) => {
          const dearIdleArray = isSummer ? dearIdleSummer : dearIdleDefault;
          const greetArray = isSummer ? greetSummer : greetDefault;

          // Use the array directly based on the isSummer condition
          const currentArray = isSummer ? dearIdleArray : greetArray;

          // Use modulo to handle array index overflow
          return prevIndex % currentArray.length;
        });

        // Toggle isIdle between true and false
        return !prevMode;
      });
    };

    let delay = 5000;

    const alternateDelay = () => {
      updateGif();
      delay = delay === 5000 ? 2500 : 5000;
      timeInterval = setTimeout(alternateDelay, delay);
    };

    let timeInterval = setTimeout(alternateDelay, delay);

    // Clear timeout on component unmount
    return () => clearTimeout(timeInterval);
  }, [dearIdleDefault, dearIdleSummer, greetDefault, greetSummer, isSummer]);


  let currentCharacter;
  if (isNewYear) {
    currentCharacter = isIdle ? New_Year_Ruka_Dear_Idle : New_Year_Ruka_Greet;
  } else if (isSummer) {
    currentCharacter = isIdle
      ? dearIdleSummer[currentCharacterIndex]
      : greetSummer[currentCharacterIndex];
  } else if (isHalloween) {
    currentCharacter = isIdle ? Halloween_Rei_Dear_Idle : Halloween_Rei_Greet;
  } else if (isChristmas) {
    currentCharacter = isIdle
      ? Christmas_Saren_Dear_Idle
      : Christmas_Saren_Greet;
  } else {
    // Default condition if not in any specific season
    currentCharacter = isIdle
      ? dearIdleDefault[currentCharacterIndex]
      : greetDefault[currentCharacterIndex];
  }


  return (
    <section className="contact-CSS" id="contact">
      <Card className="contact-outer-card-CSS">
        <h1 className="contact-h1-CSS">Contact</h1>
        <Card className="contact-inner-card-CSS">
          <Card.Body>
            <Row>
              <Col>
                <img
                  className="contact-gif-CSS"
                  src={currentCharacter}
                  alt="Contact Gif"
                />
              </Col>
              <Col>
                <Card.Title>
                  <h2 className="contact-h2-CSS">Get in Touch</h2>
                </Card.Title>
                <Card.Subtitle className="contact-intro-CSS">
                  Feel free to contact me via:
                </Card.Subtitle>
                <Row>
                  <Col>
                    <h3>
                      <a
                        href="https://github.com/rhaelfixer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="contact-icon-CSS" />
                      </a>
                    </h3>
                  </Col>
                  <Col>
                    <h3>
                      <a
                        href="https://www.linkedin.com/in/rhaelfixer/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="contact-icon-CSS" />
                      </a>
                    </h3>
                  </Col>
                </Row>
              </Col>
              <Col className="contact-hide-CSS">
                <img
                  className="contact-gif-CSS reverse"
                  src={currentCharacter}
                  alt="Contact Gif"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Card>
    </section>
  );
}

export default Contact;
