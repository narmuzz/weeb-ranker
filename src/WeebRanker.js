import React, { Component } from "react";
import Rank from "./Rank";
import ButtonInput from "./ButtonInput";

class WeebRanker extends Component {
  state = { meanScore: null };

  changeMeanScore = newMeanScore => {
    this.setState({
      meanScore: newMeanScore
    });
  };

  render() {
    return (
      <div>
        <ButtonInput onChangeMeanScore={this.changeMeanScore} />
        <Rank meanScore={this.state.meanScore} />
      </div>
    );
  }
}

export default WeebRanker;
