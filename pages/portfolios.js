import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";
import { Router } from "../routes";
import {
  getPortfolios,
  deletePortfolio,
  getProjects,
  deleteProject,
} from "../actions";
import PortfolioCard from "../components/portfolios/PortfolioCard";
import ProjectCard from "../components/projects/ProjectCard";
import { Row, Col, Button } from "reactstrap";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let portfolios,
      projects = [];
    try {
      portfolios = await getPortfolios();
      projects = await getProjects();
    } catch (err) {
      console.log(err);
    }
    return { portfolios, projects };
  }

  deleteWarning(Id, i, e) {
    e.stopPropagation();
    const isConf = confirm("Are you sure you want to delete ??");
    if (isConf) {
      this.delete(Id, i);
    }
  }

  navigateEdit(Id, i, e) {
    e.stopPropagation();
    {
      i == 1
        ? Router.pushRoute(`/portfolios/${Id}/edit`)
        : Router.pushRoute(`/project/${Id}/edit`);
    }
  }

  delete(Id, i, e) {
    {
      i == 1
        ? deletePortfolio(Id)
            .then((reponse) => {
              Router.pushRoute("/portfolios");
            })
            .catch((error) => {
              console.log(error);
            })
        : deleteProject(Id)
            .then((reponse) => {
              Router.pushRoute("/portfolios");
            })
            .catch((error) => {
              console.log(error);
            });
    }
  }

  getportfolios(portfolios, auth) {
    return Object.values(portfolios).map((portfolio, index) => {
      return (
        <Col md="4" key={index}>
          <PortfolioCard portfolio={portfolio}>
            {auth.admin && (
              <Fragment>
                <Button
                  onClick={(e) => this.navigateEdit(portfolio._id, 1, e)}
                  color="warning"
                >
                  Edit
                </Button>{" "}
                <Button
                  onClick={(e) => this.deleteWarning(portfolio._id, 1, e)}
                  color="danger"
                >
                  Delete
                </Button>
              </Fragment>
            )}
          </PortfolioCard>
        </Col>
      );
    });
  }

  getprojects(projects, auth) {
    return Object.values(projects).map((project, index) => {
      return (
        <Col md="4" key={index}>
          <ProjectCard project={project}>
            <Button
              color="success"
              onClick={(e) => {
                e.stopPropagation();
                Router.pushRoute(`${project.url}`);
              }}
            >
              view
            </Button>
            {auth.admin && (
              <Fragment>
                <Button
                  onClick={(e) => this.navigateEdit(project._id, 2, e)}
                  color="warning"
                >
                  Edit
                </Button>{" "}
                <Button
                  onClick={(e) => this.deleteWarning(project._id, 2, e)}
                  color="danger"
                >
                  Delete
                </Button>
              </Fragment>
            )}
          </ProjectCard>
        </Col>
      );
    });
  }

  render() {
    const { portfolios, auth, projects } = this.props;
    return (
      <Layout title="Aashay Phirke - Know more about my experience" auth={auth}>
        <BaseWrapper className="portfolio-page" title="Portfolios">
          {auth.admin && (
            <Fragment>
              <Button
                onClick={() => Router.pushRoute("/portfolios/new")}
                color="success"
                className="create-port-btn"
              >
                create Portfolio
              </Button>

              <Button
                onClick={() => Router.pushRoute("/project/new")}
                color="success"
                className="create-port-btn"
              >
                create Project
              </Button>
            </Fragment>
          )}
          <Row>{this.getportfolios(portfolios, auth)}</Row>
          <div className="page-header">
            <h1 className="page-header-title">Projects</h1>
          </div>

          <Row>{this.getprojects(projects, auth)}</Row>
        </BaseWrapper>
      </Layout>
    );
  }
}

export default Portfolios;
