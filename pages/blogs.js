import React, { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import BaseWrapper from "../components/BaseWrapper";

const Blogs = (props) => {
  return (
    <Layout auth={props.auth}>
      <BaseWrapper title="This is blog page"></BaseWrapper>
    </Layout>
  );
};

export default Blogs;
