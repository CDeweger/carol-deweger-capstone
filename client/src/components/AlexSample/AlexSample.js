import React, { Component } from "react";
import "./AlexSample.scss";

class AlexSample extends Component {
  state = {
    isChecked: false,
  };

  handleChange = (e) => {
    this.setState({
      isChecked: e.target.checked,
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            className={` ${this.state.isChecked ? "clicked" : "unclick"}`}
            onChange={this.handleChange}
            type="checkbox"
            name="bike1"
            value="Bike"
          />
          <label for="vehicle1"> I have a bike</label>
        </form>
      </div>
    );
  }
}

export default AlexSample;
