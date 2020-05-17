import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";

const About = (props) => {
  return (
    <Layout auth={props.auth}>
      <BaseWrapper title="About page"></BaseWrapper>
    </Layout>
  );
};

export default About;
