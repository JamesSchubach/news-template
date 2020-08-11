import React, { Component } from "react";
import RecentPosts from "./RecentPosts.jsx";
import { Navbar, Form, InputGroup, FormControl, Button } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="p-5 bg-light justify-content-between">
          <img src="//via.placeholder.com/300x250"></img>
          <RecentPosts />
          <Form className="w-25">
            <div class="text-center">
              <h3>Newsletter</h3>
              <p>Don't miss a thing!</p>
              <p>Sign up to receive daily new</p>
            </div>
            <FormControl
              type="text"
              placeholder="Email"
              className=" mr-sm-2 mb-2"
            />
            <Button className="w-100" type="submit">
              Subscribe
            </Button>
          </Form>
        </Navbar>
        <div className="pl-5">
          © Copyright 2020 Moignard Digital Solutions. All Rights Reserved.
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;
