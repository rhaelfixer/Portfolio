import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


// CSS
import "./styles/Career.css";


function Career() {
  return (
    <section className="career-CSS" id="career">
      <Card className="career-outer-card-CSS">
        <h1 className="career-h1-CSS">
          Career
        </h1>
        <Card className="career-inner-card-CSS">
          <Card.Body>
            <Card.Title>
              <h2>
                Junior Node.js Developer
              </h2>
            </Card.Title>
            <Card.Subtitle className="mb-3">Date: 03/04/2023 - 23/02/2024</Card.Subtitle>
            <Card.Text className="career-intro-CSS">
              As a Junior Node.js Developer at FPLE SDN BHD, my role encompasses a range of responsibilities, including:
            </Card.Text>
            <Row className="career-p-CSS">
              <Col>
                <Card.Text>
                  <span className="career-span-CSS">Plan Projects: </span>
                  Contribute to project planning sessions, aligning technical solutions with business objectives and providing input on feasibility and timelines.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <span className="career-span-CSS">Code and Debug: </span>
                  Write clean and efficient Node.js code, addressing bugs promptly and enhancing system functionality.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <span className="career-span-CSS">Collaboration: </span>
                  Actively engage in sharing insights and contributing ideas for improved code quality and efficiency.
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
        <Card className="career-inner-card-CSS">
          <Card.Body>
            <Card.Title>
              <h2>
                Freelance ReactJS Developer
              </h2>
            </Card.Title>
            <Card.Subtitle className="mb-3">Date: 01/11/2022 - Present</Card.Subtitle>
            <Card.Text className="career-intro-CSS">
              As a freelance ReactJS developer, I specialize in developing responsive web applications and effectively collaborate with clients to ensure seamless user experiences.
            </Card.Text>
            <Row className="career-p-CSS">
              <Col>
                <Card.Text>
                  <span className="career-span-CSS">Design and Development: </span>
                  Designed and developed responsive user interfaces using ReactJS.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <span className="career-span-CSS">API Integration: </span>
                  Enhanced ReactJS functionality through API integration for improved efficiency and capabilities.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <span className="career-span-CSS">Collaboration: </span>
                  Collaborated closely with clients to understand project requirements and deliver tailored solutions.
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Card>
    </section>
  );
}

export default Career;
