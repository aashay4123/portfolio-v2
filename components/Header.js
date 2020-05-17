import Link from "next/link";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { signout } from "../components/helper";
import { Router } from "../routes";

const BsNavlink = (props) => {
  const { link, child } = props;
  return (
    <NavItem className="port-navbar-item">
      <Link href={link}>
        <a className="nav-link port-navbar-link"> {child} </a>
      </Link>
    </NavItem>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className, auth } = props;
  const toggle = () => setIsOpen(!isOpen);
  let profile = null;

  if (auth.isAuthenticated && auth.user.role === "admin") {
    profile = <BsNavlink link="/admin" child="Profile" />;
  } else {
    profile = <BsNavlink link="/private" child="Profile" />;
  }

  return (
    <div>
      <Navbar
        className={`port-navbar port-nav-base absolute ${className}`}
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand className="port-navbar-brand" href="/">
          Aashay Phirke
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <BsNavlink link="/portfolios" child="portfolio" />
            <BsNavlink link="/blogs" child="blogs" />
            <BsNavlink link="/cv" child="CV" />
            <BsNavlink link="/about" child="about" />

            {!auth.isAuthenticated && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="port-navbar-link" nav caret>
                  Auth
                </DropdownToggle>
                <DropdownMenu className="dropdown" right>
                  <DropdownItem className="dropdown">
                    <BsNavlink link="/auth/signin" child="signin" />
                  </DropdownItem>
                  <DropdownItem className="dropdown">
                    <BsNavlink link="/auth/signup" child="signup" />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}

            {auth.isAuthenticated && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="port-navbar-link" nav caret>
                  {auth.user.name}
                </DropdownToggle>
                <DropdownMenu className="dropdown" right>
                  <DropdownItem className="dropdown">{profile}</DropdownItem>
                  <DropdownItem className="dropdown">
                    <span
                      className="nav-link port-navbar-link nav-link port-navbar-link"
                      onClick={() => {
                        signout(() => {
                          Router.pushRoute("/");
                        });
                      }}
                    >
                      logout
                    </span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
