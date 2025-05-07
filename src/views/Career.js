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
                  <h2>Software Developer</h2>
                  <h5>Freelance</h5>
                </Card.Title>
                <Card.Subtitle className="mb-3">
                  Date: 01/06/2024 - Present
                </Card.Subtitle>
                <Card.Text className="career-intro-CSS">
                  As a freelance software developer, I’ve delivered multiple
                  client-driven web solutions that achieved measurable
                  improvements in user engagement, functionality, and
                  satisfaction.
                </Card.Text>
                <Card.Text className="career-p-CSS">
                  <p>Key contributions include:</p>
                  <ul>
                    <li>
                      Designed and developed mobile-responsive user interfaces
                      using various frontend frameworks, increasing user
                      engagement by 25% based on client analytics.
                    </li>
                    <li>
                      Built frontend components to display dynamic content
                      powered by backend and third-party APIs, enabling smoother
                      user interactions and increasing feature engagement by
                      20%.
                    </li>
                    <li>
                      Worked closely with clients to gather requirements and
                      delivered tailored web solutions that achieved a 100%
                      satisfaction rate and led to repeat business
                      opportunities.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="2" title="Past">
            <Card className="career-inner-card-CSS">
              <Card.Body>
                <Card.Title>
                  <h2>Junior Node.js Developer</h2>
                  <h5>FPLE SDN BHD</h5>
                </Card.Title>
                <Card.Subtitle className="mb-3">
                  Date: 03/04/2023 - 23/02/2024
                </Card.Subtitle>
                <Card.Text className="career-intro-CSS">
                  At FPLE SDN BHD, I contributed to several backend development
                  initiatives that drove measurable improvements in code
                  quality, performance, and team collaboration.
                </Card.Text>
                <Card.Text className="career-p-CSS">
                  <p>Key contributions include:</p>
                  <ul>
                    <li>
                      Collaborated in project planning sessions to align
                      Node.js-based solutions with business goals, helping
                      improve scope clarity and reducing planning revisions by
                      30%.
                    </li>
                    <li>
                      Wrote and maintained efficient Node.js code, reducing
                      production bugs by 30% and increasing backend API response
                      speed by 20%.
                    </li>
                    <li>
                      Shared code optimization techniques and best practices
                      during reviews, leading to a 25% faster merge cycle and
                      improved codebase maintainability.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="career-inner-card-CSS">
              <Card.Body>
                <Card.Title>
                  <h2>ReactJS Developer</h2>
                  <h5>Freelance Contract</h5>
                </Card.Title>
                <Card.Subtitle className="mb-3">
                  Date: 01/11/2022 - 31/08/2023
                </Card.Subtitle>
                <Card.Text className="career-intro-CSS">
                  As a freelance ReactJS developer, I delivered a responsive
                  user interface that improved performance, automated key
                  workflows, and increased development efficiency based on
                  client feedback.
                </Card.Text>
                <Card.Text className="career-p-CSS">
                  <p>Key contributions include:</p>
                  <ul>
                    <li>
                      Designed and developed responsive user interfaces using
                      ReactJS, reducing page load times by 30% and accelerating
                      development by 25% through modular component design.
                    </li>
                    <li>
                      Integrated APIs to manage dynamic content, automating
                      marketing outreach and reducing manual admin work by 50%.
                    </li>
                    <li>
                      Developed reusable ReactJS components tailored to client
                      feedback, reducing post-delivery revision requests by 50%
                      and improving development efficiency by 25%.
                    </li>
                  </ul>
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
