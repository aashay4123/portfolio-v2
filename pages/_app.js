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
    let deferredPrompt;
    if (process.browser) {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/static/sw.js")
          .then(function () {
            console.log("service worker registered");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      window.addEventListener("beforeinstallprompt", function (event) {
        event.preventDefault();
        console.log("prompt");
        deferredPrompt = event;
        return false;
      });
    }
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(function (choiceResult) {
        console.log(choiceResult.outcome);

        if (choiceResult.outcome === "dismissed") {
          console.log("User cancelled installation");
        } else {
          console.log("User added to home screen");
        }
      });

      deferredPrompt = null;
    }

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
