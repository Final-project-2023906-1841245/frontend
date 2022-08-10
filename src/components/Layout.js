import React from "react";
import Container from "react-bootstrap/Container";

export default (props) => (
  <Container className="d-flex align-items-center justify-content-center text-light">
    {props.children}
  </Container>
);
