import React, { Fragment } from "react";
import Header from "../Header";
import Head from "next/head";
import Footers from "../Footers";

const Layout = (props) => {
  const { className, children, auth, title } = props;
  const headerType = props.headerType || "default";

  return (
    <Fragment>
      <Head>
        {title && <title>{title}</title>}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="theme-color" content="#317EFB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Aashay Phirke" />

        <meta
          name="description"
          content="My name is Aashay Phirke and I am an software and hardware engineer and freelance developer. I have a bachelor's degree in Electronics and Telecommunication Engineering. Also have experience in working on a wide range of technologies and projects using python,embedded C and web applications using React and Nextjs."
        />
        <meta
          name="keywords"
          content="Aashay portfolio, Aashay developer, Aashay freelance, Aashay Phirke"
        />
        <meta
          property="og:title"
          content="Aashay Phirke - programmer, freelance developer."
        />
        <meta property="og:lang" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Aashay Phirke and I am an software and hardware engineer and freelance developer."
        />
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
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>

      <div className="layout-container">
        <Header className={`port-nav-${headerType}`} auth={auth} />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
          <Footers></Footers>
        </main>
      </div>
    </Fragment>
  );
};
export default Layout;
