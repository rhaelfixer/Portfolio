import React from "react";
import { Card, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


// CSS
import "./styles/Career.css";


function Career() {
  return (
    <section className="career-CSS" id="career">
      <Card className="career-outer-card-CSS">
        <h1 className="career-h1-CSS">Career</h1>
        <Tabs defaultActiveKey="1" className="career-tab-CSS" justify>
          <Tab eventKey="1" title="Current">
            <Card className="career-inner-card-CSS">
              <Card.Body>
                <Card.Title>
                  <h2>Freelance Software Developer</h2>
                </Card.Title>
                <Card.Subtitle className="mb-3">
                  Date: 01/06/2024 - Present
                </Card.Subtitle>
                <Card.Text className="career-intro-CSS">
                  As a freelance software developer, I specialize in creating
                  responsive web applications. I effectively collaborate with
                  clients to ensure seamless user experiences and adapt to
                  diverse project requirements, leveraging my skills to deliver
                  high-quality solutions that meet client expectations.
                </Card.Text>
                <Card.Text className="career-p-CSS">
                  <span className="career-span-CSS">Code Development: </span>
                  Successfully designed and developed responsive user
                  interfaces, resulting in enhanced user engagement and
                  satisfaction.
                  <br />
                  <span className="career-span-CSS">API Integration: </span>
                  Improved application efficiency and capabilities by seamlessly
                  integrating APIs into projects, enabling richer functionality.
                  <br />
                  <span className="career-span-CSS">Collaboration: </span>
                  Actively collaborated with clients to thoroughly understand
                  their project requirements, delivering tailored solutions that
                  exceeded expectations.
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="2" title="Past">
            <Card className="career-inner-card-CSS">
              <Card.Body>
                <Card.Title>
                  <h2>Junior Node.js Developer</h2>
                </Card.Title>
                <Card.Subtitle className="mb-3">
                  Date: 03/04/2023 - 23/02/2024
                </Card.Subtitle>
                <Card.Text className="career-intro-CSS">
                  As a Junior Node.js Developer at FPLE SDN BHD, my role
                  encompasses a range of responsibilities, including:
                </Card.Text>
                <Card.Text className="career-p-CSS">
                  <span className="career-span-CSS">Plan Projects: </span>
                  Contribute to project planning sessions, aligning technical
                  solutions with business objectives and providing input on
                  feasibility and timelines.
                  <br />
                  <span className="career-span-CSS">Code and Debug: </span>
                  Write clean and efficient Node.js code, addressing bugs
                  promptly and enhancing system functionality.
                  <br />
                  <span className="career-span-CSS">Collaboration: </span>
                  Actively engage in sharing insights and contributing ideas for
                  improved code quality and efficiency.
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="career-inner-card-CSS">
              <Card.Body>
                <Card.Title>
                  <h2>Freelance ReactJS Developer</h2>
                </Card.Title>
                <Card.Subtitle className="mb-3">
                  Date: 01/11/2022 - 31/08/2023
                </Card.Subtitle>
                <Card.Text className="career-intro-CSS">
                  As a freelance ReactJS developer, I specialize in developing
                  responsive web applications and effectively collaborate with
                  clients to ensure seamless user experiences.
                </Card.Text>
                <Card.Text className="career-p-CSS">
                  <span className="career-span-CSS">Design and Build: </span>
                  Designed and developed responsive user interfaces using
                  ReactJS.
                  <br />
                  <span className="career-span-CSS">API Integration: </span>
                  Enhanced ReactJS functionality through API integration for
                  improved efficiency and capabilities.
                  <br />
                  <span className="career-span-CSS">Collaboration: </span>
                  Collaborated closely with clients to understand project
                  requirements and deliver tailored solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Card>
    </section>
  );
}

export default Career;
