import React, { Component } from "react";

class ManualInput extends Component {
  state = {
    value: ""
  };

  handleChangeManual = event => {
    const parsedNumber = parseFloat(event.target.value);
    if (!isNaN(parsedNumber)) {
      this.setState({
        value: parsedNumber > 10 ? 10 : parsedNumber
      });
    } else if (event.target.value === "") {
      this.setState({ value: "" });
    }
  };

  handleKeyDownManual = event => {
    if (event.key === "Enter") {
      this.handleClickManual();
    }
  };

  handleClickManual = event => {
    this.props.onChangeMeanScore(this.state.value);
  };

  render() {
    return (
      <>
        Or enter a mean score between 1 and 10 (only integers are allowed)
        <input
          className="input"
          value={this.state.value}
          onChange={this.handleChangeManual}
          onKeyDown={this.handleKeyDownManual}
        />
        <button onClick={this.handleClickManual}>Send</button>
      </>
    );
  }
}

export default ManualInput;
