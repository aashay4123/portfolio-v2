import Link from "next/link";
import ActiveLink from "./ActiveLink";
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
  const className = props.className || "";
  return (
    <ActiveLink activeClassName="active" href={link}>
      <a className={`${className} nav-link port-navbar-link`}> {child} </a>
    </ActiveLink>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className, auth } = props;
  const toggle = () => setIsOpen(!isOpen);
  let profile = null;
  const menuclass = isOpen ? "menu-open" : "menu-close";
  if (auth.isAuthenticated && auth.user.role === "admin") {
    profile = (
      <BsNavlink
        className={`port-dropdown-item ${menuclass}`}
        link="/admin"
        child="Profile"
      />
    );
  } else {
    profile = (
      <BsNavlink
        className={`port-dropdown-item ${menuclass}`}
        link="/private"
        child="Profile"
      />
    );
  }

  return (
    <div>
      <Navbar
        className={`port-navbar port-nav-base absolute ${className} ${menuclass}`}
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
            <NavItem className="port-navbar-item">
              <BsNavlink link="/portfolios" child="portfolio" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavlink link="/blogs" child="blogs" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavlink link="/cv" child="CV" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavlink link="/about" child="about" />
            </NavItem>

            {!auth.isAuthenticated && (
              <UncontrolledDropdown
                nav
                inNavbar
                className="port-navbar-link port-dropdown-menu"
              >
                <DropdownToggle className="port-dropdown-toggle" nav caret>
                  Auth
                </DropdownToggle>
                <DropdownMenu className={`${menuclass}`} right>
                  <DropdownItem>
                    <BsNavlink
                      className={`port-dropdown-item ${menuclass}`}
                      link="/auth/signin"
                      child="signin"
                    />
                  </DropdownItem>
                  <DropdownItem>
                    <BsNavlink
                      className={`port-dropdown-item ${menuclass}`}
                      link="/auth/signup"
                      child="signup"
                    />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}

            {auth.isAuthenticated && (
              <UncontrolledDropdown
                nav
                inNavbar
                className="port-navbar-link port-dropdown-menu"
              >
                <DropdownToggle className="port-dropdown-toggle" nav caret>
                  {auth.user.name}
                </DropdownToggle>
                <DropdownMenu right className={`${menuclass}`}>
                  <DropdownItem>{profile}</DropdownItem>
                  <DropdownItem>
                    <BsNavlink
                      className={`port-dropdown-item ${menuclass}`}
                      link="/blogs/dashboard"
                      child="blogs"
                    />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <span
                      className={`nav-link port-dropdown-item port-navbar-link nav-link port-navbar-link ${menuclass}`}
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
