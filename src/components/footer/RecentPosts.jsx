import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class RecentPosts extends Component {
  state = {
    articleOne: {
      title: "test",
      date: "01-01-01",
      img: "//via.placeholder.com/90x90",
    },
    articleTwo: {
      title: "test",
      date: "01-01-01",
      img: "//via.placeholder.com/90x90",
    },
  };

  render() {
    return (
      <React.Fragment>
        <Container
          style={{ display: "block", margin: "0 auto" }}
          className="pl-5 pr-5 w-50 justify-content-center"
        >
          <Row className="pb-2">
            <Col
              style={{ flexGrow: "unset" }}
              as="img"
              src={this.state.articleOne.img}
              className="rounded-circle"
            />
            <Col>
              <h4>{this.state.articleOne.title}</h4>
              <p>{this.state.articleOne.date}</p>
            </Col>
          </Row>
          <Row>
            <Col
              style={{ flexGrow: "unset" }}
              as="img"
              src={this.state.articleTwo.img}
              className="rounded-circle"
            />
            <Col>
              <h4>{this.state.articleTwo.title}</h4>
              <p>{this.state.articleTwo.date}</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default RecentPosts;
