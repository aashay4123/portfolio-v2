import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

export default function Footers() {
  return (
    <Fragment>
      <footer>
        <Container>
          <Row>
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul
                style={{ paddingTop: "20px" }}
                className="list-inline text-center"
              >
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/aashay.phirke"
                  >
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://github.com/aashay4123">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/aashay-phirke-b8a24a188/"
                  >
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p
                className="copyright"
                style={{ textAlign: "center", color: "white" }}
              >
                Copyright &copy; Aashay Phirke 2020
              </p>
            </div>
          </Row>
        </Container>
      </footer>

      <style jsx>
        {`
          @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
        `}
      </style>
    </Fragment>
  );
}
