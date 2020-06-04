import React from "react";
import BaseLayout from "../components/Layout/Layout";
import BasePage from "../components/BaseWrapper";

import { Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Aashay Phirke - Learn More About Me"
        auth={this.props.auth}
      >
        <BasePage className="about-page">
          <Row className="mt-lg">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein mt-sm">
                <p>
                  My name is Aashay Phirke. I am software and hardware engineer
                  and freelance developer.
                </p>
                <p>
                  I have a bachelor's degree in Electronics and
                  Telecommunication. I have been working on a wide range of
                  technologies and projects.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
