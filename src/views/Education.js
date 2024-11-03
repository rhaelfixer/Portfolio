import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


// CSS
import "./styles/Education.css";


function Education() {
  return (
    <section className="education-CSS" id="education">
      <Card className="education-outer-card-CSS">
        <h1 className="education-h1-CSS">Education</h1>
        <Card className="education-inner-card-CSS">
          <Card.Body>
            <Card.Title>
              <h2>Software Engineering Immersive</h2>
            </Card.Title>
            <Card.Subtitle className="mb-3">
              General Assembly, 2022
            </Card.Subtitle>
            <Card.Text className="education-intro-CSS">
              The Software Engineering Immersive program at General Assembly
              provides an intensive and hands-on curriculum focusing on full
              stack web development, where proficiency in the MERN stack is
              gained to build scalable and dynamic web applications.
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </section>
  );
}

export default Education;
