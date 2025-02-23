// UI
import { Badge } from "react-bootstrap";
// Styles
import style from "./Style.module.css";
// Layout
import { Container, Nav, Navbar } from "react-bootstrap";
// Components
import { HeaderBasket } from "@components/ecommerce";
import { NavLink } from "react-router-dom";
const { headerContainer, headerLogo } = style;
const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <Badge bg="info">Ecom</Badge>
        </h1>
        <HeaderBasket />
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={"nav-link"} to="/">
                Home
              </NavLink>

              <NavLink className={"nav-link"} to="/categories">
                Categories
              </NavLink>

              <NavLink className={"nav-link"} to="/about-us">
                About
              </NavLink>
            </Nav>
            <Nav className="">
              <NavLink className={"nav-link"} to="/sign-in">
                Sign in
              </NavLink>

              <NavLink className={"nav-link"} to="/sign-up">
                Sign up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
