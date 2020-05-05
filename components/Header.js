import React, { Fragment } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <Fragment>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/portfolios">
        <a>portfolios</a>
      </Link>
      <Link href="/cv">
        <a>CV</a>
      </Link>
      <Link href="/blogs">
        <a>blogs</a>
      </Link>
      <style jsx>
        {`
          a {
            font-size: 20px;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Header;
