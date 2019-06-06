import React from "react";
import uniqid from "uniqid";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputedItem: { name: "", key: "", checked: false} };
  }

  onInputChange = event => {
    this.setState({
      inputedItem: { name: event.target.value, key: uniqid(), checked: false }
    });
  };

  addToDoLocal = event => {
    if (
      event.type === "click" || (event.type === "keydown" && event.key === "Enter")
    ) {
      this.props.addItem(this.state.inputedItem);
      //clear text field
      this.setState({ inputedItem: { name: "", key: "", checked: false } });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputedItem.name}
          onChange={this.onInputChange}
          onKeyDown={this.addToDoLocal}
        />
        <button onClick={this.addToDoLocal}>Add item</button>
      </div>
    );
  }
}

export default Input;
