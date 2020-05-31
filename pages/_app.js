import React, { Fragment } from "react";
import App from "next/app";
import { ToastContainer } from "react-toastify";
import { isAuth, serverAuth } from "../components/helper";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
import "react-toastify/dist/ReactToastify.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    let user = process.browser ? await isAuth() : await serverAuth(ctx.req);

    const admin = user && user.role === "admin";

    const auth = { user, isAuthenticated: !!user, admin };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, auth };
  }

  render() {
    const { Component, pageProps, auth } = this.props;
    return (
      <Fragment>
        <ToastContainer />
        <Component {...pageProps} auth={auth} />
      </Fragment>
    );
  }
}

export default MyApp;
