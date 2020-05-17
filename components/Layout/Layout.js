import React, { Fragment } from "react";
import Header from "../Header";

const Layout = (props) => {
  const { className, children, auth } = props;
  const headerType = props.headerType || "default";

  return (
    <div className="layout-container">
      <Header className={`port-nav-${headerType}`} auth={auth} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};
export default Layout;
