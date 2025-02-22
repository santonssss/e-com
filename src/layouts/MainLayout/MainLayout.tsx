import { Container } from "react-bootstrap";
// Components
import { Footer, Header } from "@components/common";
// Routing
import { Outlet } from "react-router-dom";
/* Styles */
import styles from "./style.module.css";
const { container, wrapper } = styles;
const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
