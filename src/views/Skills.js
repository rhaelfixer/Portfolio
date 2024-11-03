import React from "react";
import { Card } from "react-bootstrap";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import * as icons from "simple-icons";


// CSS
import "./styles/Skills.css";


const Skills = () => {
  const cloud = {
    container: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        margin: "auto",
      },
    },
    options: {
      clickToFront: 500,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: "#0000",
      reverse: true,
      tooltip: "native",
      tooltipDelay: 0,
      wheelZoom: false,
    },
  };

  const iconSlugs = [
    "html5",
    "javascript",
    "css3",
    "bootstrap",
    "react",
    "reacthookform",
    "reactrouter",
    "axios",
    "express",
    "mongoose",
    "nodedotjs",
    "mongodb",
    "mysql",
    "postman",
    "cloudinary",
    "mailchimp",
    "github",
    "vercel",
    "render",
    "astro",
    "visualstudiocode",
    "nodemon",
    "docker",
  ];

  const iconElements = iconSlugs.map((slug) => {
    const icon = icons[`si${slug.charAt(0).toUpperCase() + slug.slice(1)}`];

    if (icon) {
      return renderSimpleIcon({
        icon,
        size: 50,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      });
    }

    return null;
  });


  return (
    <>
      <section className="skills-CSS" id="skills">
        <Card bg="dark" text="white">
          <Card.Body>
            <Card.Title>
              <h1 className="skills-h1-CSS">Skills</h1>
            </Card.Title>
            <Cloud
              className="skills-icon-CSS"
              containerProps={cloud.container}
              options={cloud.options}
            >
              {iconElements}
            </Cloud>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default Skills;
