import React, {useEffect} from "react";
import {Typewriter} from "react-simple-typewriter";
import "animate.css";


// Context
import {useDate} from "../components/DateContext";
import {useInitialScroll, useScrollOnTop} from "../components/ScrollContext";


// CSS
import "./styles/Profile.css";


const Profile = () => {
  const {isNewYear, isSummer, isHalloween, isChristmas} = useDate();
  const {scrollOnTop, setScrollOnTop} = useScrollOnTop();
  const {initialScroll, setInitialScroll} = useInitialScroll();


  // Define the classes based on your conditions
  let classes = ["profile-name-CSS", "typewriter-CSS", "profile-intro-CSS"];
  if (isNewYear) {
    classes = classes.map(className => className + " newYear");
  } else if (isSummer) {
    classes = classes.map(className => className + " summer");
  } else if (isHalloween) {
    classes = classes.map(className => className + " halloween");
  } else if (isChristmas) {
    classes = classes.map(className => className + " christmas");
  }

  // Now "classes" array contains the modified class names
  let [profileNameColor, typewriterColor, profileIntroColor] = classes;


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollOnTop(scrollPosition === 0);

      // Set setInitialScroll to true when the user scrolls back to the top
      if (scrollPosition === 0) {
        setInitialScroll(true);
      } else {
        setInitialScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollOnTop, initialScroll, setInitialScroll]);


  return (
    <>
      <section className="profile-CSS">
        {
          scrollOnTop
            ? (
              <div>
                <h1 className={`animate__animated animate__fadeIn profile-name-CSS ${ profileNameColor }`}>
                  Rhael Fixer
                </h1>
                <br />
                <h2 className={`animate__animated animate__fadeIn typewriter-CSS ${ typewriterColor }`}>
                  <Typewriter
                    words={["Software", "ReactJS"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={3000}
                  />
                  {" "}Developer
                </h2>
                {initialScroll && (
                  <h2 className={`animate__animated animate__fadeOut profile-intro-CSS ${ profileIntroColor }`}>
                    I am a ReactJS developer with strong familiarity with front-end technologies. My expertise lies in designing visually appealing and user-friendly interfaces, ensuring responsive designs work seamlessly across various devices. Additionally, I also have valuable experience in API integration for server-side development. I am constantly looking forward to learn new technologies to build upon my already existing skills.
                  </h2>
                )}
              </div>
            ) : (
              <div>
                <h1 className={`animate__animated animate__fadeOut profile-name-CSS ${ profileNameColor }`}>
                  Rhael Fixer
                </h1>
                <br />
                <h2 className={`animate__animated animate__fadeOut typewriter-CSS ${ typewriterColor }`}>
                  <Typewriter
                    words={["Software", "ReactJS"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={3000}
                  />
                  {" "}Developer
                </h2>
                {!initialScroll && (
                  <h2 className={`animate__animated animate__fadeIn profile-intro-CSS ${ profileIntroColor }`}>
                    I am a ReactJS developer with strong familiarity with front-end technologies. My expertise lies in designing visually appealing and user-friendly interfaces, ensuring responsive designs work seamlessly across various devices. Additionally, I also have valuable experience in API integration for server-side development. I am constantly looking forward to learn new technologies to build upon my already existing skills.
                  </h2>
                )}
              </div>
            )
        }
      </section>
    </>
  );
};

export default Profile;
