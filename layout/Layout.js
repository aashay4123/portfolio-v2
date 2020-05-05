import React, { Fragment } from "react";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header></Header>
      {props.children}
    </Fragment>
  );
};
export default Layout;
