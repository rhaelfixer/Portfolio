import React, { useState, useEffect } from "react";
import { Card, Tabs, Tab, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLink } from "react-icons/fa";
import { renderSimpleIcon } from "react-icon-cloud";
import * as icons from "simple-icons";


// CSS
import "./styles/Projects.css";


import tictactoe from "../assets/projects/react-tic-tac-toe.png";
import chess from "../assets/projects/react-chess-ai.png";
import mern from "../assets/projects/mern-society-cms.png";


const Projects = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const iconSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1499) {
      return 25;
    } else {
      return 50;
    }
  };

  const renderIcon = (slug) => {
    const icon = icons[`si${slug.charAt(0).toUpperCase() + slug.slice(1)}`];

    if (icon) {
      return renderSimpleIcon({
        icon,
        size: iconSize(),
        aProps: {
          style: { cursor: "default" },
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
          <Tabs defaultActiveKey="1" className="projects-tab-CSS" justify>
            <Tab eventKey="1" title="React Tic Tac Toe">
              <Card.Body>
                {screenWidth <= 1499 ? (
                  <Card.Img
                    className="react-tic-tac-toe-CSS"
                    variant="top"
                    src={tictactoe}
                  />
                ) : (
                  <iframe
                    className="iframe-1-size-CSS"
                    src="https://rhaelfixer-react-tic-tac-toe.vercel.app/"
                    title="React Tic Tac Toe"
                  ></iframe>
                )}
                <Card.Text className="project-description-CSS">
                  A two-player browser-based game built with React that delivers
                  a fun and competitive experience. While not networked
                  multiplayer, it allows Player 1 and Player 2 to take turns on
                  the same device in classic Tic Tac Toe matches. The game
                  includes player name customization, new game initialization,
                  match reset functionality, and a fully responsive design,
                  ensuring a smooth experience across all devices.
                </Card.Text>
                <Card.Text>
                  <span className="tech-icons-CSS">Tech:</span>
                  {renderIcon("html5")}
                  {renderIcon("javascript")}
                  {renderIcon("css3")}
                  {renderIcon("bootstrap")}
                  {renderIcon("react")}
                  {renderIcon("vercel")}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="https://github.com/rhaelfixer/React-Tic-Tac-Toe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="projects-icon-CSS" />
                </Card.Link>
                <Card.Link
                  href="https://rhaelfixer-react-tic-tac-toe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                        span:
                          screenWidth >= 1500 && screenWidth <= 1910 ? 8 : 6,
                        offset:
                          screenWidth >= 1500 && screenWidth <= 1910 ? 2 : 3,
                      }}
                    >
                      <iframe
                        className="iframe-2-size-CSS"
                        src="https://rhaelfixer-react-chess-ai.vercel.app/"
                        title="React Chess AI"
                      ></iframe>
                    </Col>
                  </Row>
                )}
                <Card.Text className="project-description-CSS">
                  A single-player browser-based chess game built with React,
                  featuring an AI opponent powered by the MiniMax algorithm with
                  Alpha-Beta pruning for efficient move evaluation. The game
                  includes match reset functionality and a fully responsive
                  design, ensuring a smooth experience across all devices.
                </Card.Text>
                <Card.Text>
                  <span className="tech-icons-CSS">Tech:</span>
                  {renderIcon("html5")}
                  {renderIcon("javascript")}
                  {renderIcon("css3")}
                  {renderIcon("bootstrap")}
                  {renderIcon("react")}
                  {renderIcon("vercel")}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="https://github.com/rhaelfixer/React-Chess-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="projects-icon-CSS" />
                </Card.Link>
                <Card.Link
                  href="https://rhaelfixer-react-chess-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                        span:
                          screenWidth >= 1500 && screenWidth <= 1910 ? 9 : 6,
                        offset:
                          screenWidth >= 1500 && screenWidth <= 1910 ? 0 : 3,
                      }}
                    >
                      <Card.Img
                        className="mern-society-cms-CSS"
                        variant="top"
                        src={mern}
                      />
                    </Col>
                  </Row>
                )}
                <Card.Text className="project-description-CSS">
                  A full-stack content management system built with MongoDB,
                  Express, React, and Node.js (MERN), designed for efficient
                  administration of events, news, and affiliates. The platform
                  includes secure user role management, rich media support, and
                  Mailchimp integration for opt-in email updates. Administrators
                  can manage content through intuitive CRUD interfaces, while
                  registered users have secure access to platform features,
                  update notifications, and a fully responsive design, ensuring
                  a smooth experience across all devices.
                </Card.Text>
                <Card.Text>
                  <span className="tech-icons-CSS">Tech:</span>
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
                <Card.Link
                  href="https://github.com/rhaelfixer/MERN-Society-CMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="projects-icon-CSS" />
                </Card.Link>
                <Card.Link
                  href="https://mern-society-cms.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
