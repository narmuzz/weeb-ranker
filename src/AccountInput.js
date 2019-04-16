import React, { Component } from "react";

class AccountInput extends Component {
  state = {
    loading: false,
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

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
      loading: false
    });
    this.props.onChangeMeanScore(json.anime_stats.mean_score);
  };

  render() {
    return (
      <>
        Enter a Myanimelist account
        <input
          className="input"
          disabled={this.state.loading}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button disabled={this.state.loading} onClick={this.handleClick}>
          Send
        </button>
      </>
    );
  }
}

export default AccountInput;
