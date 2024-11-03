import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


// Context
import { useDate } from "../components/DateContext";
import { useScrolling, useScrollTo } from "../components/ScrollContext";


// CSS
import "./styles/Navigation.css";


import * as Characters from "../components/NavigationAssets";


// // // // // // // Default // // // // // // //
const {
  Akino: {
    Idle: Default_Akino_Idle,
    Run: Default_Akino_Run,
    Run_Super: Default_Akino_Run_Super,
  },
  Hiyori: {
    Idle: Default_Hiyori_Idle,
    Run: Default_Hiyori_Run,
    Run_Super: Default_Hiyori_Run_Super,
  },
  Kaori: {
    Idle: Default_Kaori_Idle,
    Run: Default_Kaori_Run,
    Run_Super: Default_Kaori_Run_Super,
  },
  Kasumi: {
    Idle: Default_Kasumi_Idle,
    Run: Default_Kasumi_Run,
    Run_Super: Default_Kasumi_Run_Super,
  },
  Nozomi: {
    Idle: Default_Nozomi_Idle,
    Run: Default_Nozomi_Run,
    Run_Super: Default_Nozomi_Run_Super,
  },
  Rei: {
    Idle: Default_Rei_Idle,
    Run: Default_Rei_Run,
    Run_Super: Default_Rei_Run_Super,
  },
  Suzuna: {
    Idle: Default_Suzuna_Idle,
    Run: Default_Suzuna_Run,
    Run_Super: Default_Suzuna_Run_Super,
  },
} = Characters;

// // // // // // // New Year // // // // // // //
const New_Year_Hiyori_Idle = Characters.New_Year_Hiyori.Idle;
const New_Year_Hiyori_Run = Characters.New_Year_Hiyori.Run;
const New_Year_Hiyori_Run_Super = Characters.New_Year_Hiyori.Run_Super;

// // // // // // // Summer // // // // // // //
const {
  Summer_Akino: {
    Idle: Summer_Akino_Idle,
    Run: Summer_Akino_Run,
    Run_Super: Summer_Akino_Run_Super,
  },
  Summer_Hiyori: {
    Idle: Summer_Hiyori_Idle,
    Run: Summer_Hiyori_Run,
    Run_Super: Summer_Hiyori_Run_Super,
  },
  Summer_Kaori: {
    Idle: Summer_Kaori_Idle,
    Run: Summer_Kaori_Run,
    Run_Super: Summer_Kaori_Run_Super,
  },
  Summer_Kasumi: {
    Idle: Summer_Kasumi_Idle,
    Run: Summer_Kasumi_Run,
    Run_Super: Summer_Kasumi_Run_Super,
  },
  Summer_Nozomi: {
    Idle: Summer_Nozomi_Idle,
    Run: Summer_Nozomi_Run,
    Run_Super: Summer_Nozomi_Run_Super,
  },
  Summer_Rei: {
    Idle: Summer_Rei_Idle,
    Run: Summer_Rei_Run,
    Run_Super: Summer_Rei_Run_Super,
  },
  Summer_Suzuna: {
    Idle: Summer_Suzuna_Idle,
    Run: Summer_Suzuna_Run,
    Run_Super: Summer_Suzuna_Run_Super,
  },
} = Characters;

// // // // // // // Halloween // // // // // // //
const Halloween_Kaori_Idle = Characters.Halloween_Kaori.Idle;
const Halloween_Kaori_Run = Characters.Halloween_Kaori.Run;
const Halloween_Kaori_Run_Super = Characters.Halloween_Kaori.Run_Super;

// // // // // // // Christmas // // // // // // //
const Christmas_Akino_Idle = Characters.Christmas_Akino.Idle;
const Christmas_Akino_Run = Characters.Christmas_Akino.Run;
const Christmas_Akino_Run_Super = Characters.Christmas_Akino.Run_Super;


const Navigation = () => {
  const { isNewYear, isSummer, isHalloween, isChristmas } = useDate();

  const idleDefault = useMemo(
    () => [
      Default_Akino_Idle,
      Default_Hiyori_Idle,
      Default_Kaori_Idle,
      Default_Kasumi_Idle,
      Default_Nozomi_Idle,
      Default_Rei_Idle,
      Default_Suzuna_Idle,
    ],
    []
  );

  const runDefault = useMemo(
    () => [
      Default_Akino_Run,
      Default_Hiyori_Run,
      Default_Kaori_Run,
      Default_Kasumi_Run,
      Default_Nozomi_Run,
      Default_Rei_Run,
      Default_Suzuna_Run,
    ],
    []
  );

  const runSuperDefault = useMemo(
    () => [
      Default_Akino_Run_Super,
      Default_Hiyori_Run_Super,
      Default_Kaori_Run_Super,
      Default_Kasumi_Run_Super,
      Default_Nozomi_Run_Super,
      Default_Rei_Run_Super,
      Default_Suzuna_Run_Super,
    ],
    []
  );

  const idleSummer = useMemo(
    () => [
      Summer_Akino_Idle,
      Summer_Hiyori_Idle,
      Summer_Kaori_Idle,
      Summer_Kasumi_Idle,
      Summer_Nozomi_Idle,
      Summer_Rei_Idle,
      Summer_Suzuna_Idle,
    ],
    []
  );

  const runSummer = useMemo(
    () => [
      Summer_Akino_Run,
      Summer_Hiyori_Run,
      Summer_Kaori_Run,
      Summer_Kasumi_Run,
      Summer_Nozomi_Run,
      Summer_Rei_Run,
      Summer_Suzuna_Run,
    ],
    []
  );

  const runSuperSummer = useMemo(
    () => [
      Summer_Akino_Run_Super,
      Summer_Hiyori_Run_Super,
      Summer_Kaori_Run_Super,
      Summer_Kasumi_Run_Super,
      Summer_Nozomi_Run_Super,
      Summer_Rei_Run_Super,
      Summer_Suzuna_Run_Super,
    ],
    []
  );

  const randomDefaultIdle = () => {
    const randomIndex = Math.floor(Math.random() * idleDefault.length);
    return idleDefault[randomIndex];
  };

  const randomSummerIdle = () => {
    const randomIndex = Math.floor(Math.random() * idleSummer.length);
    return idleSummer[randomIndex];
  };

  const [displayedGif, setDisplayedGif] = useState(
    isNewYear
      ? New_Year_Hiyori_Idle
      : isSummer
      ? randomSummerIdle
      : isHalloween
      ? Halloween_Kaori_Idle
      : isChristmas
      ? Christmas_Akino_Idle
      : randomDefaultIdle
  );
  const [lastIdleGif] = useState(displayedGif);
  const { scrolling, setScrolling } = useScrolling();
  const { scrollTo, setScrollTo } = useScrollTo();
  const [textColor, setTextColor] = useState("");


  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (!scrollTo) {
        setScrolling(true);
      }
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrolling, scrollTo]);

  useEffect(() => {
    // User is actively scrolling
    if (scrolling) {
      if (isNewYear) {
        setDisplayedGif(New_Year_Hiyori_Run);
      } else if (isSummer) {
        setDisplayedGif(runSummer[idleSummer.indexOf(lastIdleGif)]);
      } else if (isHalloween) {
        setDisplayedGif(Halloween_Kaori_Run);
      } else if (isChristmas) {
        setDisplayedGif(Christmas_Akino_Run);
      } else {
        setDisplayedGif(runDefault[idleDefault.indexOf(lastIdleGif)]);
      }
    } else {
      // User has stopped scrolling
      if (isNewYear) {
        setDisplayedGif(New_Year_Hiyori_Idle);
      } else if (isSummer) {
        setDisplayedGif(lastIdleGif);
      } else if (isHalloween) {
        setDisplayedGif(Halloween_Kaori_Idle);
      } else if (isChristmas) {
        setDisplayedGif(Christmas_Akino_Idle);
      } else {
        setDisplayedGif(lastIdleGif);
      }
    }
  }, [
    scrolling,
    isNewYear,
    isSummer,
    isHalloween,
    isChristmas,
    idleDefault,
    idleSummer,
    runDefault,
    runSummer,
    lastIdleGif,
  ]);


  const scrollToStart = useCallback(() => {
    // Set scrollTo to true
    setScrollTo(true);

    if (isNewYear) {
      setDisplayedGif(New_Year_Hiyori_Run_Super);
    } else if (isSummer) {
      setDisplayedGif(runSuperSummer[idleSummer.indexOf(lastIdleGif)]);
    } else if (isHalloween) {
      setDisplayedGif(Halloween_Kaori_Run_Super);
    } else if (isChristmas) {
      setDisplayedGif(Christmas_Akino_Run_Super);
    } else {
      setDisplayedGif(runSuperDefault[idleDefault.indexOf(lastIdleGif)]);
    }
  }, [
    setScrollTo,
    isNewYear,
    isSummer,
    isHalloween,
    isChristmas,
    idleDefault,
    runSuperDefault,
    idleSummer,
    runSuperSummer,
    lastIdleGif,
  ]);

  const scrollToEnd = useCallback(() => {
    // Set scrollTo to false
    setScrollTo(false);

    if (isNewYear) {
      setDisplayedGif(New_Year_Hiyori_Idle);
    } else if (isSummer) {
      setDisplayedGif(lastIdleGif);
    } else if (isHalloween) {
      setDisplayedGif(Halloween_Kaori_Idle);
    } else if (isChristmas) {
      setDisplayedGif(Christmas_Akino_Idle);
    } else {
      setDisplayedGif(lastIdleGif);
    }
  }, [setScrollTo, isNewYear, isSummer, isHalloween, isChristmas, lastIdleGif]);


  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
      scrollToStart();
      // Reset scrollTo after the specified duration
      setTimeout(() => {
        scrollToEnd();
      }, 500);
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Home") {
        // Handle "Home" key press
        // Check if the window is already scrolled to the top
        const isScrolledToTop = window.scrollY === 0;
        // If already at the top, no need to scroll
        if (isScrolledToTop) {
          return;
        }

        // Scroll to the start
        scrollToStart();

        // Reset scrollTo after the specified duration
        setTimeout(() => {
          scrollToEnd();
        }, 500);
      } else if (event.key === "End") {
        // Handle "End" key press
        // Check if the window is already scrolled to the bottom
        const isScrolledToBottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
        if (isScrolledToBottom) {
          // If already at the bottom, no need to scroll
          return;
        }

        // Scroll to the start
        scrollToStart();

        // Reset scrollTo after the specified duration
        setTimeout(() => {
          scrollToEnd();
        }, 500);
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [scrollToStart, scrollToEnd]);


  // Define the container class based on your conditions
  let navigation = "nav-container-CSS";
  if (isNewYear) {
    navigation += " newYear";
  } else if (isSummer) {
    navigation += " summer";
  } else if (isHalloween) {
    navigation += " halloween";
  } else if (isChristmas) {
    navigation += " christmas";
  }


  useEffect(() => {
    // Select the container element with the specified class
    const containerElement = document.querySelector(
      `.${navigation.replace(/\s/g, ".")}`
    );

    // Get the computed style of the container element
    const computedStyle = window.getComputedStyle(containerElement);

    // Get the background color in RGB format from computed styles
    const backgroundColor = computedStyle.backgroundColor;

    // Convert RGB to hex format for easier manipulation
    function rgbToHex(rgb) {
      const [r, g, b] = rgb.match(/\d+/g);
      return `#${Number(r).toString(16).padStart(2, "0")}${Number(g)
        .toString(16)
        .padStart(2, "0")}${Number(b).toString(16).padStart(2, "0")}`;
    }

    // Convert the background color to hex format
    const hexBackgroundColor = rgbToHex(backgroundColor);

    // Extract individual color channels (red, green, blue)
    const r = parseInt(hexBackgroundColor.substring(1, 3), 16);
    const g = parseInt(hexBackgroundColor.substring(3, 5), 16);
    const b = parseInt(hexBackgroundColor.substring(5, 7), 16);

    // Calculate the relative luminance (brightness) of the color
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Determine the text color based on luminance
    // In this case, if luminance is greater than 0.5, set to "nav-black-CSS", otherwise set to "nav-white-CSS"
    const newTextColor = luminance > 0.5 ? "nav-black-CSS" : "nav-white-CSS";

    // Set the text color based on the luminance
    setTextColor(newTextColor);
  }, [navigation]);


  return (
    <>
      <Container className={navigation} fluid>
        <Navbar
          className="text-center"
          variant="dark"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand>
              <Row>
                <Col md={6}>
                  <img
                    className="nav-gif-CSS"
                    src={displayedGif}
                    alt="Nav Gif"
                  />
                </Col>
              </Row>
            </Navbar.Brand>
            <Navbar.Toggle
              className={`mx-auto nav-list-CSS ${textColor}`}
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link onClick={() => handleScrollTo("skills")}>
                  <h3 className={`nav-h3-CSS ${textColor}`}>Skills</h3>
                </Nav.Link>
                <Nav.Link onClick={() => handleScrollTo("projects")}>
                  <h3 className={`nav-h3-CSS ${textColor}`}>Projects</h3>
                </Nav.Link>
                <Nav.Link onClick={() => handleScrollTo("career")}>
                  <h3 className={`nav-h3-CSS ${textColor}`}>Career</h3>
                </Nav.Link>
                <Nav.Link onClick={() => handleScrollTo("education")}>
                  <h3 className={`nav-h3-CSS ${textColor}`}>Education</h3>
                </Nav.Link>
                <Nav.Link onClick={() => handleScrollTo("contact")}>
                  <h3 className={`nav-h3-CSS ${textColor}`}>Contact</h3>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
