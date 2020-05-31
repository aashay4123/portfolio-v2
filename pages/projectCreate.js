import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";
import ProjectCreateForm from "../components/projects/ProjectCreateForm";
import { Row, Col } from "reactstrap";
import { Router } from "../routes";
import moment from "moment";
import { createProject } from "../store/actions";
import withAuth from "../components/hoc/withAuth";

const INITIAL_VALUES = {
  title: "",
  language: "",
  typeof: "",
  url: "",
  description: "",
};

const projectCreate = ({ auth }) => {
  const [error, seterror] = useState(undefined);

  const saveProject = (projectData) => {
    projectData.userId = auth.user._id;
    createProject(projectData)
      .then((project) => {
        seterror(undefined);
        Router.pushRoute("/portfolios");
      })
      .catch((err) => {
        const error = err.message || "Server Error!";
        // setSubmitting(false);
        seterror({ error });
      });
  };

  return (
    <Layout auth={auth}>
      <BaseWrapper
        className="portfolio-create-page"
        title="Create New Portfolio"
      >
        <Row>
          <Col md="6">
            <ProjectCreateForm
              initialValues={INITIAL_VALUES}
              error={error}
              onSubmit={saveProject}
            />
          </Col>
        </Row>
      </BaseWrapper>
    </Layout>
  );
};

export default withAuth("admin")(projectCreate);
