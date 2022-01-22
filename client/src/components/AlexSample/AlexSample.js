import React, { Component } from "react";
import "./AlexSample.scss";

class AlexSample extends Component {
  state = {
    isClick: false,
  };
  handleClick = () => {
    this.setState({
      isClick: true,
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            className={` ${this.state.isClick ? "clicked" : "unclick"}`}
            onClick={this.handleClick}
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1"> I have a bike</label>
        </form>
      </div>
    );
  }
}

export default AlexSample;
