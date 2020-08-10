import React, { Component } from "react";
import { Navbar, Form, InputGroup, FormControl, Button } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar fixed="bottom" className="bg-light justify-content-between">
          <Form inline>
            <FormControl type="text" placeholder="Email" className=" mr-sm-2" />
            <Button type="submit">Subscribe</Button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Footer;
