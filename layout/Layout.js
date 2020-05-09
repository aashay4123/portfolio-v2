import React, { Fragment } from "react";
import Header from "../components/Header";

const Layout = (props) => {
  const { className, children } = props;
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};
export default Layout;
