import React, { Component } from "react";

class ButtonInput extends Component {
  state = {
    loading: false,
    value: "",
    currentInput: "account"
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

  handleOptionChange = key => {
    this.setState({
      currentInput: key,
      value: ""
    });
  };

  handleClick = () => {
    if (this.state.currentInput === "score") {
      this.props.onChangeMeanScore(this.state.value);
    } else {
      this.handleSearch();
    }
  };

  handleSearch = async () => {
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
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            disabled={this.state.loading}
            onClick={this.handleClick}
            className="btn btn-outline-secondary"
          >
            {this.state.currentInput === "account" ? "Account" : "Score"}
          </button>
          <DropdownButton
            options={[
              { key: "account", displayName: "Search a MyAnimeList account" },
              {
                key: "score",
                displayName: "Write a mean score between 1 and 10"
              }
            ]}
            onOptionClick={this.handleOptionChange}
          />
          <input
            className="form-control"
            type={this.state.currentInput === "score" ? "number" : "text"}
            disabled={this.state.loading}
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
      </div>
    );
  }
}

class DropdownButton extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };

  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.handleClick}
        >
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className={`dropdown-menu ${this.state.open ? "show" : ""}`}>
          {this.props.options.map(option => {
            return (
              <a
                key={option.key}
                className="dropdown-item"
                href="#"
                onClick={() => {
                  this.setState({
                    open: false
                  });
                  this.props.onOptionClick(option.key);
                }}
              >
                {option.displayName}
              </a>
            );
          })}
        </div>
      </>
    );
  }
}

export default ButtonInput;
