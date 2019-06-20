import React from "react";
import audio from "../sounds/audio.mp3";

class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {allCompleted: ""};
  }

  checkAllCompleted = () => {
    const checkedList = this.props.list.filter(e => {
      return e.checked === true ? e : "";
    });
    return checkedList.length;
  };

  set = () => {
    const completed = this.checkAllCompleted();
    const all = this.props.list.length;
    return completed === all ? true : false
  }

  render() {
    return (
      <div>
        <audio ref={this.myRef}>
          <source src={audio} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
  componentDidUpdate() {
    const isEqual = this.set();
    if (isEqual) {
      this.myRef.current.play()
    }
  }
}

export default Sound;
