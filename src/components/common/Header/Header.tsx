// UI
import { Badge } from "react-bootstrap";
// Styles
import style from "./Style.module.css";
// Layout
import { Container, Nav, Navbar } from "react-bootstrap";
// Components
import { HeaderBasket } from "@components/ecommerce";
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="#home">Sign in</Nav.Link>
              <Nav.Link href="#link">Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
