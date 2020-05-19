import React, { Fragment } from "react";
import BaseLayout from "../components/Layout/Layout";
import { Button, Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
const Index = (props) => {
  return (
    <BaseLayout
      title="Aashay Phirke - Portfolio"
      className="cover"
      headerType="index"
      auth={props.auth}
    >
      <div className="main-section">
        {/* <div className="background-image">
          <img src="/static/images/background.jpg" />
        </div> */}

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio.
                      </div>
                    </div>
                    <img
                      alt="Aashay Phirke image"
                      className="image"
                      src="/static/images/section-1.jpg"
                    />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>Welcome to the portfolio website of Aashay Phirke. </h1>
              </div>
              <Typed
                strings={[
                  "Programmer",
                  "Developer",
                  "Freelancer",
                  "Team Player",
                ]}
                typeSpeed={50}
                backSpeed={50}
                backDelay={1}
                loop
                smartBackspace
                shuffle={false}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="|"
              />
              <div className="hero-welcome-bio">
                <h2>Let's take a look on my work.</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;
