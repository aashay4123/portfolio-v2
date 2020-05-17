import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";

const Cv = (props) => {
  return (
    <Layout auth={props.auth}>
      <BaseWrapper title="Hello Cv page">
        <button>Download CV</button>
      </BaseWrapper>
    </Layout>
  );
};

export default Cv;
