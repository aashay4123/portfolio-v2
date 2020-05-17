import React from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";
import withAuth from "../components/hoc/withAuth";

import { Row, Col } from "reactstrap";

import { updatePortfolio, getPortfolioById } from "../actions";

// import withAuth from "../components/hoc/withAuth";
import { Router } from "../routes";

class PortfolioEdit extends React.Component {
  static async getInitialProps({ query }) {
    let portfolio = {};

    try {
      portfolio = await getPortfolioById(query.id);
    } catch (error) {
      console.error(error);
    }

    return { portfolio };
  }
  constructor(props) {
    super();

    this.state = {
      error: undefined,
    };
  }

  updatePortfolioResp(portfolioData) {
    // setSubmitting(true);
    updatePortfolio(portfolioData)
      .then((portfolio) => {
        // setSubmitting(false);
        this.setState({ error: undefined });
        Router.pushRoute("/portfolios");
      })
      .catch((err) => {
        const error = err.message || "Server Error!";
        // setSubmitting(false);
        this.setState({ error });
      });
  }

  render() {
    const { portfolio, auth } = this.props;
    const { error } = this.state;
    return (
      <Layout auth={auth}>
        <BaseWrapper className="portfolio-create-page" title="Update Portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm
                initialValues={portfolio}
                error={error}
                onSubmit={(portfolioData) =>
                  this.updatePortfolioResp(portfolioData)
                }
              />
            </Col>
          </Row>
        </BaseWrapper>
      </Layout>
    );
  }
}

export default withAuth("admin")(PortfolioEdit);
