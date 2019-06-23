import React from "react";
import audio from "../sounds/win.wav";

class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  checkAllCompleted = () => {
    const checkedList = this.props.list.filter(e => {
      return e.checked === true ? e : "";
    });
    return checkedList.length === this.props.list.length &&
      this.props.list.length !== 0
      ? true
      : false;
  };

  render() {
    return (
      <div>
        <audio ref={this.myRef}>
          <source src={audio} type="audio/wav" />
        </audio>
      </div>
    );
  }

  componentDidUpdate() {
    const isEqual = this.checkAllCompleted();
    if (isEqual && this.props.checkClick === true) {
      // play sound
      this.myRef.current.play();
      this.props.resetClick();
    }
  }
}

export default Sound;
