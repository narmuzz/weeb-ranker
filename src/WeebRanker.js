import React, { Component } from "react";
import Rank from "./Rank";
import AccountInput from "./AccountInput";
import ManualInput from "./ManualInput";

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
        <AccountInput onChangeMeanScore={this.changeMeanScore} />
        <ManualInput onChangeMeanScore={this.changeMeanScore} />
        <Rank meanScore={this.state.meanScore} />
      </div>
    );
  }
}

export default WeebRanker;
