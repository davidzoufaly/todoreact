import React from "react";

const getHideStatus = JSON.parse(window.localStorage.getItem("hide"));

class HideCompleted extends React.Component {
  state = { hide: false };

  sendNewStateViaProps = () => {
    this.props.booleanShow(this.state.hide);
  };
  
  hideOnClick = () => {
    this.setState(
      prevState => ({
        hide: !prevState.hide
      }),
      //callback funkce aby se pres props poslal jen novej state
      this.sendNewStateViaProps
    );
  };

  render() {
    return (
      <button onClick={this.hideOnClick}>
        {this.state.hide ? "Show" : "Hide"} completed
      </button>
    );
  }

  componentDidMount() {
    this.setState({ hide: getHideStatus }, this.sendNewStateViaProps);
  }
}

export default HideCompleted;
