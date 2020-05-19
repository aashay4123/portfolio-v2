import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";
import { Router } from "../routes";
import { getPortfolios, deletePortfolio } from "../actions";
import PortfolioCard from "../components/portfolios/PortfolioCard";
import { Row, Col, Button } from "reactstrap";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let portfolios = [];
    try {
      portfolios = await getPortfolios();
    } catch (err) {
      console.log(err);
    }
    return { portfolios };
  }

  deleteWarning(portfolioId, e) {
    e.stopPropagation();
    const isConf = confirm("Are you sure you want to delete ??");
    if (isConf) {
      this.deletepf(portfolioId);
    }
  }

  navigateEdit(Id, e) {
    e.stopPropagation();
    Router.pushRoute(`/portfolios/${Id}/edit`);
  }

  deletepf(portfolioId, e) {
    deletePortfolio(portfolioId)
      .then((reponse) => {
        Router.pushRoute("/portfolios");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getportfolios(portfolios, auth) {
    return Object.values(portfolios).map((portfolio, index) => {
      return (
        <Col md="4" key={index}>
          <PortfolioCard portfolio={portfolio}>
            {auth.admin && (
              <Fragment>
                <Button
                  onClick={(e) => this.navigateEdit(portfolio._id, e)}
                  color="warning"
                >
                  Edit
                </Button>{" "}
                <Button
                  onClick={(e) => this.deleteWarning(portfolio._id, e)}
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

  render() {
    const { portfolios, auth } = this.props;
    return (
      <Layout title="Aashay Phirke - Know more about my experience" auth={auth}>
        <BaseWrapper className="portfolio-page" title="Portfolios">
          {auth.admin && (
            <Button
              onClick={() => Router.pushRoute("/portfolios/new")}
              color="success"
              className="create-port-btn"
            >
              create Portfolio
            </Button>
          )}
          <Row>{this.getportfolios(portfolios, auth)}</Row>
        </BaseWrapper>
      </Layout>
    );
  }
}

export default Portfolios;
