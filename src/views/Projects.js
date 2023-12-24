import React, {useState, useEffect, useMemo} from "react";
import {Tabs, Tab, Card, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {FaGithub, FaLink} from "react-icons/fa";
import {renderSimpleIcon} from "react-icon-cloud";
import * as icons from "simple-icons";


// Context
import {useDate} from "../components/DateContext";
import {useScrollTo} from "../components/ScrollContext";


// CSS
import "./styles/Projects.css";


import * as Characters from "../components/IFrameAssets";

import tictactoe from "../assets/projects/react-tic-tac-toe.png";
import chess from "../assets/projects/react-chess-ai.png";
import mern from "../assets/projects/mern-society-cms.png";


// // // // // // // Default // // // // // // //
const {
  Chloe: {
    Idle_Weapon: School_Festival_Chloe_Idle_Weapon,
    Damage: School_Festival_Chloe_Damage,
    Standby: School_Festival_Chloe_Standby,
    Jump: School_Festival_Chloe_Jump
  },
  Ninon: {
    Idle_Weapon: Oedo_Ninon_Idle_Weapon,
    Damage: Oedo_Ninon_Damage,
    Standby: Oedo_Ninon_Standby,
    Jump: Oedo_Ninon_Jump
  },
  Tamaki: {
    Idle_Weapon: Cafe_Tamaki_Idle_Weapon,
    Damage: Cafe_Tamaki_Damage,
    Standby: Cafe_Tamaki_Standby,
    Jump: Cafe_Tamaki_Jump
  },
} = Characters;

// // // // // // // New Year // // // // // // //
const New_Year_Muimi_Idle_Weapon = Characters.New_Year_Muimi.Idle_Weapon;
const New_Year_Muimi_Damage = Characters.New_Year_Muimi.Damage;
const New_Year_Muimi_Standby = Characters.New_Year_Muimi.Standby;
const New_Year_Muimi_Jump = Characters.New_Year_Muimi.Jump;

// // // // // // // Summer // // // // // // //
const {
  Summer_Misogi: {
    Idle_Weapon: Summer_Misogi_Idle_Weapon,
    Damage: Summer_Misogi_Damage,
    Standby: Summer_Misogi_Standby,
    Jump: Summer_Misogi_Jump
  },
  Summer_Tamaki: {
    Idle_Weapon: Summer_Tamaki_Idle_Weapon,
    Damage: Summer_Tamaki_Damage,
    Standby: Summer_Tamaki_Standby,
    Jump: Summer_Tamaki_Jump
  },
  Summer_Tsumugi: {
    Idle_Weapon: Summer_Tsumugi_Idle_Weapon,
    Damage: Summer_Tsumugi_Damage,
    Standby: Summer_Tsumugi_Standby,
    Jump: Summer_Tsumugi_Jump
  },
} = Characters;

// // // // // // // Halloween // // // // // // //
const Halloween_Tsumugi_Idle_Weapon = Characters.Halloween_Tsumugi.Idle_Weapon;
const Halloween_Tsumugi_Damage = Characters.Halloween_Tsumugi.Damage;
const Halloween_Tsumugi_Standby = Characters.Halloween_Tsumugi.Standby;
const Halloween_Tsumugi_Jump = Characters.Halloween_Tsumugi.Jump;

// // // // // // // Christmas // // // // // // //
const Christmas_Miyako_Idle_Weapon = Characters.Christmas_Miyako.Idle_Weapon;
const Christmas_Miyako_Damage = Characters.Christmas_Miyako.Damage;
const Christmas_Miyako_Standby = Characters.Christmas_Miyako.Standby;
const Christmas_Miyako_Jump = Characters.Christmas_Miyako.Jump;


const Projects = () => {
  const {isNewYear, isSummer, isHalloween, isChristmas} = useDate();

  const idleWeaponDefault = useMemo(
    () => [
      School_Festival_Chloe_Idle_Weapon,
      Oedo_Ninon_Idle_Weapon,
      Cafe_Tamaki_Idle_Weapon,
    ],
    []
  );

  const damageDefault = useMemo(
    () => [
      School_Festival_Chloe_Damage,
      Oedo_Ninon_Damage,
      Cafe_Tamaki_Damage,
    ],
    []
  );

  const standbyDefault = useMemo(
    () => [
      School_Festival_Chloe_Standby,
      Oedo_Ninon_Standby,
      Cafe_Tamaki_Standby,
    ],
    []
  );

  const jumpDefault = useMemo(
    () => [
      School_Festival_Chloe_Jump,
      Oedo_Ninon_Jump,
      Cafe_Tamaki_Jump,
    ],
    []
  );

  const idleWeaponSummer = useMemo(
    () => [
      Summer_Misogi_Idle_Weapon,
      Summer_Tamaki_Idle_Weapon,
      Summer_Tsumugi_Idle_Weapon,
    ],
    []
  );

  const damageSummer = useMemo(
    () => [
      Summer_Misogi_Damage,
      Summer_Tamaki_Damage,
      Summer_Tsumugi_Damage,
    ],
    []
  );

  const standbySummer = useMemo(
    () => [
      Summer_Misogi_Standby,
      Summer_Tamaki_Standby,
      Summer_Tsumugi_Standby,
    ],
    []
  );

  const jumpSummer = useMemo(
    () => [
      Summer_Misogi_Jump,
      Summer_Tamaki_Jump,
      Summer_Tsumugi_Jump,
    ],
    []
  );


  const randomDefaultIdleWeapon = () => {
    const randomIndex = Math.floor(Math.random() * idleWeaponDefault.length);
    return idleWeaponDefault[randomIndex];
  };

  const randomSummerIdleWeapon = () => {
    const randomIndex = Math.floor(Math.random() * idleWeaponSummer.length);
    return idleWeaponSummer[randomIndex];
  };

  const [displayedGif, setDisplayedGif] = useState(
    isNewYear ? New_Year_Muimi_Idle_Weapon :
      isSummer ? randomSummerIdleWeapon :
        isHalloween ? Halloween_Tsumugi_Idle_Weapon :
          isChristmas ? Christmas_Miyako_Idle_Weapon :
            randomDefaultIdleWeapon
  );
  const [lastIdleGif, setLastIdleGif] = useState(displayedGif);
  const scrollTo = useScrollTo();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    if (scrollTo) {
      setIsHovered(true);
      // Determine the festive season and set the appropriate animation
      if (isNewYear) {
        setDisplayedGif(New_Year_Muimi_Idle_Weapon);
      } else if (isSummer) {
        setDisplayedGif(randomSummerIdleWeapon);
      } else if (isHalloween) {
        setDisplayedGif(Halloween_Tsumugi_Idle_Weapon);
      } else if (isChristmas) {
        setDisplayedGif(Christmas_Miyako_Idle_Weapon);
      } else {
        setDisplayedGif(randomDefaultIdleWeapon);
      }
    }
  };

  // Update lastIdleGif whenever displayedGif changes
  useEffect(() => {
    setLastIdleGif(displayedGif);
  }, [displayedGif]);

  useEffect(() => {
    let periodTimeout;

    // After 1 second, change to the second animation
    if (isNewYear && displayedGif === New_Year_Muimi_Idle_Weapon) {
      periodTimeout = setTimeout(() => {
        setDisplayedGif(New_Year_Muimi_Standby);
      }, 1000);
    } else if (isSummer && standbySummer[idleWeaponSummer.indexOf(lastIdleGif)]) {
      periodTimeout = setTimeout(() => {
        setDisplayedGif(standbySummer[idleWeaponSummer.indexOf(lastIdleGif)]);
      }, 1000);
    } else if (isHalloween && displayedGif === Halloween_Tsumugi_Idle_Weapon) {
      periodTimeout = setTimeout(() => {
        setDisplayedGif(Halloween_Tsumugi_Standby);
      }, 1000);
    } else if (isChristmas && displayedGif === Christmas_Miyako_Idle_Weapon) {
      periodTimeout = setTimeout(() => {
        setDisplayedGif(Christmas_Miyako_Standby);
      }, 1000);
    } else if (standbyDefault[idleWeaponDefault.indexOf(lastIdleGif)]) {
      periodTimeout = setTimeout(() => {
        setDisplayedGif(standbyDefault[idleWeaponDefault.indexOf(lastIdleGif)]);
      }, 1000);
    }

    return () => {
      clearTimeout(periodTimeout);
    };
  }, [isNewYear, isSummer, isHalloween, isChristmas, displayedGif, idleWeaponDefault, idleWeaponSummer, lastIdleGif, standbyDefault, standbySummer]);


  const handleMouseLeave = () => {
    setIsHovered(true);

    if (isNewYear) {
      if (displayedGif === New_Year_Muimi_Idle_Weapon) {
        setDisplayedGif(New_Year_Muimi_Damage);
      } else {
        setDisplayedGif(New_Year_Muimi_Jump);
      }
      setTimeout(() => {
        setDisplayedGif(null);
      }, 500);
    } else if (isSummer) {
      if (idleWeaponSummer.indexOf(lastIdleGif) >= 0) {
        setDisplayedGif(damageSummer[idleWeaponSummer.indexOf(lastIdleGif)]);
      } else {
        setDisplayedGif(jumpSummer[standbySummer.indexOf(lastIdleGif)]);
      }
      setTimeout(() => {
        setDisplayedGif(null);
      }, 500);
    } else if (isHalloween) {
      if (displayedGif === Halloween_Tsumugi_Idle_Weapon) {
        setDisplayedGif(Halloween_Tsumugi_Damage);
      } else {
        setDisplayedGif(Halloween_Tsumugi_Jump);
      }
      setTimeout(() => {
        setDisplayedGif(null);
      }, 500);
    } else if (isChristmas) {
      if (displayedGif === Christmas_Miyako_Idle_Weapon) {
        setDisplayedGif(Christmas_Miyako_Damage);
      } else {
        setDisplayedGif(Christmas_Miyako_Jump);
      }
      setTimeout(() => {
        setDisplayedGif(null);
      }, 500);
    } else {
      if (standbyDefault.indexOf(lastIdleGif) >= 0) {
        setDisplayedGif(jumpDefault[standbyDefault.indexOf(lastIdleGif)]);
      } else {
        setDisplayedGif(damageDefault[idleWeaponDefault.indexOf(lastIdleGif)]);
      }
      setTimeout(() => {
        setDisplayedGif(null);
      }, 500);
    };
  }

  const iconSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1499) {
      return 30;
    } else {
      return 50;
    }
  };

  const renderIcon = (slug) => {
    const icon = icons[`si${ slug.charAt(0).toUpperCase() + slug.slice(1) }`];

    if (icon) {
      return renderSimpleIcon({
        icon,
        size: iconSize(),
        aProps: {
          style: {cursor: "default"},
        },
      });
    }

    return null;
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <section className="projects-CSS" id="projects">
        <Card className="projects-card-CSS" bg="dark" text="white">
          <h1 className="projects-h1-CSS">Projects</h1>
          <Tabs
            defaultActiveKey="1"
            className="projects-tab-CSS"
            justify
          >
            <Tab eventKey="1" title="React Tic Tac Toe">
              <Card.Body>
                {screenWidth <= 1499 ? (
                  <Card.Img
                    className="react-tic-tac-toe-CSS"
                    variant="top"
                    src={tictactoe}
                  />
                ) : (
                  <Row>
                    <Col
                      md={{
                        span: screenWidth >= 1500 && screenWidth <= 1910 ? 8 : 6,
                        offset: screenWidth >= 1500 && screenWidth <= 1910 ? 2 : 3
                      }}
                    >
                      <iframe
                        className="iframe-size-CSS"
                        src="https://rhaelfixer-react-tic-tac-toe.vercel.app/"
                        title="React Tic Tac Toe"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                      </iframe>
                    </Col>
                    <Col>
                      {
                        displayedGif && (
                          <img
                            className={`
                              ${ screenWidth >= 1121 && screenWidth <= 1300
                                ? "hover-gif-CSS hide-CSS"
                                : "hover-gif-CSS"
                              } ${ isHovered ? "show-CSS" : "hide-CSS" }`}
                            src={displayedGif}
                            alt="Project Gif"
                          />
                        )
                      }
                    </Col>
                  </Row>
                )}
                <Card.Text>
                  React Tic Tac Toe project, where players can participate in matches.
                </Card.Text>
                <Card.Text>
                  Tech:{" "}
                  {renderIcon("html5")}
                  {renderIcon("javascript")}
                  {renderIcon("css3")}
                  {renderIcon("bootstrap")}
                  {renderIcon("react")}
                  {renderIcon("vercel")}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://github.com/rhaelfixer/React-Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="projects-icon-CSS" />
                </Card.Link>
                <Card.Link href="https://rhaelfixer-react-tic-tac-toe.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaLink className="projects-icon-CSS" />
                </Card.Link>
              </Card.Footer>
            </Tab>
            <Tab eventKey="2" title="React Chess AI">
              <Card.Body>
                {screenWidth <= 1499 ? (
                  <Card.Img
                    className="react-chess-ai-CSS"
                    variant="top"
                    src={chess}
                  />
                ) : (
                  <Row>
                    <Col
                      md={{
                        span: screenWidth >= 1500 && screenWidth <= 1910 ? 8 : 6,
                        offset: screenWidth >= 1500 && screenWidth <= 1910 ? 2 : 3
                      }}
                    >
                      <iframe
                        className="iframe-size-CSS"
                        src="https://rhaelfixer-react-chess-ai.vercel.app/"
                        title="React Chess AI"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                      </iframe>
                    </Col>
                    <Col>
                      {
                        displayedGif && (
                          <img
                            className={`
                              ${ screenWidth >= 1121 && screenWidth <= 1300
                                ? "hover-gif-CSS hide-CSS"
                                : "hover-gif-CSS"
                              } ${ isHovered ? "show-CSS" : "hide-CSS" }`}
                            src={displayedGif}
                            alt="Project Gif"
                          />
                        )
                      }
                    </Col>
                  </Row>
                )}
                <Card.Text>
                  React Chess project, where player can play with AI MiniMax algorithm.
                </Card.Text>
                <Card.Text>
                  Tech:{" "}
                  {renderIcon("html5")}
                  {renderIcon("javascript")}
                  {renderIcon("css3")}
                  {renderIcon("bootstrap")}
                  {renderIcon("react")}
                  {renderIcon("vercel")}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://github.com/rhaelfixer/React-Chess-AI" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="projects-icon-CSS" />
                </Card.Link>
                <Card.Link href="https://rhaelfixer-react-chess-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaLink className="projects-icon-CSS" />
                </Card.Link>
              </Card.Footer>
            </Tab>
            <Tab eventKey="3" title="MERN Society CMS">
              <Card.Body>
                {screenWidth <= 1499 ? (
                  <Card.Img
                    className="mern-society-cms-CSS"
                    variant="top"
                    src={mern}
                  />
                ) : (
                  <Row>
                    <Col
                      md={{
                        span: screenWidth >= 1500 && screenWidth <= 1910 ? 9 : 6,
                        offset: screenWidth >= 1500 && screenWidth <= 1910 ? 0 : 3
                      }}
                    >
                      <Card.Img
                        className="mern-society-cms-CSS"
                        variant="top"
                        src={mern}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                    </Col>
                    <Col>
                      {
                        displayedGif && (
                          <img
                            className={`
                              ${ screenWidth >= 1121 && screenWidth <= 1300
                                ? "hover-mern-gif-CSS hide-CSS"
                                : "hover-mern-gif-CSS"
                              } ${ isHovered ? "show-CSS" : "hide-CSS" }`}
                            src={displayedGif}
                            alt="Project Gif"
                          />
                        )
                      }
                    </Col>
                  </Row>
                )}
                <Card.Text>
                  My personal MERN stack project: a website empowering admins to effortlessly manage events, news, and affiliates through seamless CRUD operations. Registered users receive Mailchimp notifications, ensuring engagement with updates.
                </Card.Text>
                <Card.Text>
                  Tech:{" "}
                  {renderIcon("html5")}
                  {renderIcon("javascript")}
                  {renderIcon("css3")}
                  {renderIcon("bootstrap")}
                  {renderIcon("react")}
                  {renderIcon("reacthookform")}
                  {renderIcon("reactrouter")}
                  {renderIcon("axios")}
                  {renderIcon("express")}
                  {renderIcon("mongoose")}
                  {renderIcon("nodedotjs")}
                  {renderIcon("mongodb")}
                  {renderIcon("cloudinary")}
                  {renderIcon("mailchimp")}
                  {renderIcon("vercel")}
                  {renderIcon("render")}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://github.com/rhaelfixer/MERN-Society-CMS" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="projects-icon-CSS" />
                </Card.Link>
                <Card.Link href="https://mern-society-cms.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaLink className="projects-icon-CSS" />
                </Card.Link>
              </Card.Footer>
            </Tab>
          </Tabs>
        </Card>
      </section>
    </>
  );
};

export default Projects;
