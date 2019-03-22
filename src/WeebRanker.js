import React, { Component } from "react";

class WeebRanker extends Component {
  state = { value: "", meanScore: null, loading: false };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  ///for y array para loopear y que se yo. Tomar el mean score y comprarlo con el array de 6 posiciones, ver cuaderno.

  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.handleClick();
    }
  };

  handleClick = async () => {
    this.setState({
      loading: true
    });
    const response = await fetch(
      `https://api.jikan.moe/v3/user/${this.state.value}`
    );
    const json = await response.json();
    this.setState({
      meanScore: json.anime_stats.mean_score,
      loading: false
    });
  };
  render() {
    return (
      <div>
        <input
          disabled={this.state.loading}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button disabled={this.state.loading} onClick={this.handleClick}>
          Send
        </button>
        {this.state.meanScore}
      </div>
    );
  }
}

export default WeebRanker;
