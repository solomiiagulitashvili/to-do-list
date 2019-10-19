import React from "react";
import { Button } from "reactstrap";

class ButtonDone extends React.Component {
  state = {
    color__green: false
  };
  handleClick = e => {
    this.setState({ color__green: !this.state.color__green });
  };
  render() {
    let bgColor = this.state.color__green ? "green" : "#6c757d";
    return (
      <Button style={{ backgroundColor: bgColor }} onClick={this.handleClick}>
        done
      </Button>
    );
  }
}

export { ButtonDone };
