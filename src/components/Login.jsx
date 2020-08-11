import React, { Component } from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "./header/header";
import Footer from "./footer/footer";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="h-100">
          <Header
            headertransparent="header--transparent"
            colorblack="color--black"
            logoname="logo.png"
          />
          <div
            style={{ backgroundColor: "#f5f5f5" }}
            class="h-100 text-center my-auto"
            data-gr-c-s-loaded="true"
          >
            <Container className="my-auto h-100" style={{ maxWidth: "400px" }}>
              <Row className="my-auto align-items-center justify-content-center h-100">
                <Col>
                  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button block size="lg" variant="primary" type="submit">
                      Sign In
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
