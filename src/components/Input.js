import React from "react";

class Input extends React.Component {
  state = { inputedItem: { name: "", key: "", checked: false } };

  onInputChange = event => {
    this.setState({
      inputedItem: { name: event.target.value, key: Date.now(), checked: false }
    });
  };

  addToDoLocal = event => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      this.props.addItem(this.state.inputedItem);
      //clear text field
      this.setState({ inputedItem: { name: "", key: "", checked: false } });
    }
  };

  render() {
    return (
      <div className="input-component">
        <input
          type="text"
          value={this.state.inputedItem.name}
          onChange={this.onInputChange}
          onKeyDown={this.addToDoLocal}
          placeholder="Take out rubbish..."
        />
        <button onClick={this.addToDoLocal}>Add</button>
      </div>
    );
  }
}

export default Input;
