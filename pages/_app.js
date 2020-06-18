import React, { Fragment } from "react";
import App from "next/app";
import { ToastContainer } from "react-toastify";
import { isAuth, serverAuth } from "../components/helper";
import Head from "next/head";

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
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />

          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Aashay Phirke</title>

          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="/static/favicon-16x16.jpg"
            rel="icon"
            type="image/jpg"
            sizes="16x16"
          />
          <link
            href="/static/favicon-32x32.jpg"
            rel="icon"
            type="image/jpg"
            sizes="32x32"
          />
          <link
            rel="apple-touch-icon"
            href="/static/apple-icon.jpg"
            type="image/png"
            sizes="48x48"
          />
          <link
            href="/static/icon-144x144.png"
            rel="apple-touch-icon"
            type="image/png"
            sizes="144x144"
          />
          <meta name="theme-color" content="#317EFB" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Aashay Phirke" />
        </Head>
        <ToastContainer />
        <Component {...pageProps} auth={auth} />
      </Fragment>
    );
  }
}

export default MyApp;
