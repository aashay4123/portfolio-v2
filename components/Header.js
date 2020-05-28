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
      <a className={`${className} nav-link port-navbar-link nav__link`}>
        {" "}
        {child}{" "}
      </a>
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
    <div className="">
      <Navbar
        className={`port-navbar port-nav-base absolute  ${className} ${menuclass}`}
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand className="port-navbar-brand" href="/">
          Aashay Phirke
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="nav__background">&nbsp;</div>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item ">
              <BsNavlink link="/portfolios" child="portfolio" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavlink link="/blogs" child="My blogs" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavlink link="/cv" child="Resume" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavlink link="/about" child="about Me" />
            </NavItem>

            {!auth.isAuthenticated && (
              <NavItem className="port-navbar-item">
                <BsNavlink link="/auth/signin" child="sign in" />
              </NavItem>
            )}

            {auth.isAuthenticated && (
              <UncontrolledDropdown
                nav
                inNavbar
                className={`port-navbar-link port-dropdown-menu ${menuclass}`}
              >
                <DropdownToggle
                  className={`port-dropdown-toggle color-white`}
                  nav
                  caret
                >
                  {auth.user.name}
                </DropdownToggle>
                <DropdownMenu right className={`${menuclass}`}>
                  <DropdownItem>{profile}</DropdownItem>
                  <DropdownItem>
                    {auth.admin && (
                      <BsNavlink
                        className={`port-dropdown-item ${menuclass}`}
                        link="/userBlogs"
                        child="blogs"
                      />
                    )}
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

{
  /* <UncontrolledDropdown
nav
inNavbar
className={`port-navbar-link port-dropdown-menu ${menuclass}`}
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
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <BsNavlink link="/portfolios" child="portfolio" />
          </li>
          <li className="navigation__item">
            <BsNavlink link="/blogs" child="My blogs" />
          </li>
          <li className="navigation__item">
            <BsNavlink link="/cv" child="Resume" />
          </li>
          <li className="navigation__item">
            <BsNavlink link="/about" child="about Me" />
          </li>
          <li className="navigation__item">
            <BsNavlink link="/auth/signin" child="signin :-)" />
          </li>
          <li className="navigation__item"></li>
          <li className="navigation__item"></li>
        </ul>
      </nav>
    </div>
 
*/
}
