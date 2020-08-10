import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";

class Featured extends Component {
  state = {};
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Featured Articles</h1>
          <p>Articles we love.</p>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                />
                <Card.Body>
                  <Card.Title>Article</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Article and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"
                />
                <Card.Body>
                  <Card.Title>Article</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Article and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                />
                <Card.Body>
                  <Card.Title>Article</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Article and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                />
                <Card.Body>
                  <Card.Title>Article</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Article and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1573981428161-ec78e77bdfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                />
                <Card.Body>
                  <Card.Title>Article</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Article and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1573249493082-b1b95a59c9de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                />
                <Card.Body>
                  <Card.Title>Article</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Article and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Featured;
