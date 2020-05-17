import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";
import { Row, Col } from "reactstrap";
import { Router } from "../routes";
import moment from "moment";
import { createPortfolio } from "../actions";
import withAuth from "../components/hoc/withAuth";

const INITIAL_VALUES = {
  title: "",
  company: "",
  location: "",
  position: "",
  description: "",
  startDate: moment(),
  endDate: moment(),
};

const PortfolioNew = ({ auth }) => {
  const [error, seterror] = useState(undefined);

  const savePortfolio = (portfolioData) => {
    // setSubmitting(true);
    portfolioData.userId = auth.user._id;
    createPortfolio(portfolioData)
      .then((portfolio) => {
        // setSubmitting(false);
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
            <PortfolioCreateForm
              initialValues={INITIAL_VALUES}
              error={error}
              onSubmit={savePortfolio}
            />
          </Col>
        </Row>
      </BaseWrapper>
    </Layout>
  );
};

export default withAuth("admin")(PortfolioNew);
