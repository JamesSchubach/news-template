import React, { Component } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";

class Article extends Component {
  state = {};
  render() {
    return (
      <div id="article-root">
        <Header />
        <Jumbotron
          fluid
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1573981428161-ec78e77bdfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80')",
          }}
        >
          <Container>
            <h1>Article Title</h1>
            <p>Concise article description</p>
            <p>Posted by Author</p>
            <p>
              <Button variant="primary">Share</Button>
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim
            in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id
            cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
            eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
            porttitor, facilisis luctus, metus
          </p>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Article;
