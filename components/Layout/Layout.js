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
        {/* <meta property="og:locale" content="en_EU" /> */}
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Aashay Phirke and I am an software and hardware engineer and freelance developer."
        />
        {/* {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          />
        )} */}
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
