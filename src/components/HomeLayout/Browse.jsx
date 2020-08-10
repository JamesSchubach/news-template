import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";

class Browse extends Component {
  state = {};
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Browse</h1>
          <p>So much to read, so little time.</p>
          <Row>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://opb.fc7.myftpupload.com/wp-content/uploads/2020/05/editors-picks.jpg?time=1596921740"
                />
                <Card.Body>
                  <Card.Text>Category</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://secureservercdn.net/160.153.137.14/opb.fc7.myftpupload.com/wp-content/uploads/2019/08/MSF135472.jpg?time=1596921740"
                />
                <Card.Body>
                  <Card.Text>Category</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://secureservercdn.net/160.153.137.14/opb.fc7.myftpupload.com/wp-content/uploads/2020/05/politics.jpg?time=1596921740"
                />
                <Card.Body>
                  <Card.Text>Category</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://secureservercdn.net/160.153.137.14/opb.fc7.myftpupload.com/wp-content/uploads/2020/05/instagram-hiding-likes-button-remove.jpg?time=1596921740"
                />
                <Card.Body>
                  <Card.Text>Category</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://secureservercdn.net/160.153.137.14/opb.fc7.myftpupload.com/wp-content/uploads/2019/10/2018_34_politics_of_the_void_illo.jpg?time=1596921740"
                />
                <Card.Body>
                  <Card.Text>Category</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://secureservercdn.net/160.153.137.14/opb.fc7.myftpupload.com/wp-content/uploads/2020/05/unpopular-opinion-1.jpg?time=1596921740"
                />
                <Card.Body>
                  <Card.Text>Category</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Browse;
