import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


// Context
import { useDate } from "../components/DateContext";


// CSS
import "./styles/ParticlesEffect.css";


const ParticlesEffect = () => {
  const { isNewYear, isSummer, isHalloween, isChristmas } = useDate();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Define Particles Effect Color
  let backgroundColor;
  let particlesColor;
  let linksColor;
  if (isNewYear) {
    backgroundColor = "#0D0628";
    particlesColor = "#FFD700";
    linksColor = "#C0C0C0";
  } else if (isSummer) {
    backgroundColor = "#1A3EA8";
    particlesColor = "#D2B48C";
    linksColor = "#C7E6FA";
  } else if (isHalloween) {
    backgroundColor = "#2C2C24";
    particlesColor = "#D7A4F9";
    linksColor = "#D3D3D3";
  } else if (isChristmas) {
    backgroundColor = "#3D4F1A";
    particlesColor = "#FFFF00";
    linksColor = "#FFDDD1";
  } else {
    backgroundColor = "#000F1E";
    particlesColor = "#00BFFF";
    linksColor = "#FFFFFF";
  }


  return (
    <>
      <section>
        <Particles
          className="particles-effect-CSS"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: backgroundColor,
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 350,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: particlesColor,
              },
              number: {
                value: 25,
                density: {
                  enable: true,
                  area: 1000,
                },
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 1,
              },
              size: {
                value: {
                  min: 1,
                  max: 5,
                },
              },
              links: {
                enable: true,
                color: linksColor,
                distance: 150,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                direction: "none",
                outModes: {
                  default: "bounce",
                },
                speed: 5,
                random: false,
                straight: false,
              },
              life: {
                duration: {
                  sync: false,
                  value: 10,
                },
                count: 0,
                delay: {
                  value: {
                    min: 1,
                    max: 2,
                  },
                },
              },
            },
            detectRetina: true,
          }}
        />
      </section>
    </>
  );
};

export default ParticlesEffect;
