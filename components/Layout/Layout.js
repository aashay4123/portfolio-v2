import React, { Fragment } from "react";
import Header from "../Header";
import Head from "next/head";
const Layout = (props) => {
  const { className, children, auth } = props;
  const headerType = props.headerType || "default";

  return (
    <Fragment>
      <Head>
        <title>Aashay Phirke</title>
      </Head>
      <div className="layout-container">
        <Header className={`port-nav-${headerType}`} auth={auth} />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </Fragment>
  );
};
export default Layout;
