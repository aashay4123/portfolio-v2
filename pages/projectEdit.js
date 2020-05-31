import React from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";
import ProjectCreateForm from "../components/projects/ProjectCreateForm";
import withAuth from "../components/hoc/withAuth";

import { Row, Col } from "reactstrap";

import { updateProject, getProjectById } from "../store/actions";

// import withAuth from "../components/hoc/withAuth";
import { Router } from "../routes";

class ProjectEdit extends React.Component {
  static async getInitialProps({ query }) {
    let project = {};

    try {
      project = await getProjectById(query.id);
    } catch (error) {
      console.error(error);
    }

    return { project };
  }
  state = {
    error: undefined,
  };

  updateProjectResp(projectData) {
    updateProject(projectData)
      .then((project) => {
        this.setState({ error: undefined });
        Router.pushRoute("/portfolios");
      })
      .catch((err) => {
        const error = err.message || "Server Error!";
        this.setState({ error });
      });
  }

  render() {
    const { project, auth } = this.props;
    const { error } = this.state;
    return (
      <Layout auth={auth}>
        <BaseWrapper className="portfolio-create-page" title="Update Project">
          <Row>
            <Col md="6">
              <ProjectCreateForm
                initialValues={project}
                error={error}
                onSubmit={(projectData) => this.updateProjectResp(projectData)}
              />
            </Col>
          </Row>
        </BaseWrapper>
      </Layout>
    );
  }
}

export default withAuth("admin")(ProjectEdit);
