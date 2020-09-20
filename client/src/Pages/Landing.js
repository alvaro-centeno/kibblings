import React from "react";
import { Carousels, CarouselItems } from "../components/Carousel";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import { Footer, FooterPage } from "../components/Footer";
import { AboutCard } from "../components/Card";
// import "./Pages.css"
// import { MDBJumbotron, MDBContainer } from "mdbreact";

const Landing = () => {
  return (
    <>
      <Carousels>
        <CarouselItems />
      </Carousels>
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Col style={{ paddingTop: "60px" }}>
            <h1 style={{ fontSize: "105px", textAlign: "center" }}>
              About Kibblings!
            </h1>
            <h1 style={{ fontSize: "105px", textAlign: "center" }}>
              🐱🐶🐴🐰🐹
            </h1>
            <h5 className="mb-2 text-muted" style={{ textAlign: "center" }}>
              Created by Mykhas Nallas, Napoleon Vuong, Alvaro Centeno, and
              Shakila Marando
            </h5>
          </Col>
          <Col>
            <AboutCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
