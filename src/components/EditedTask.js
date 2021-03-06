import React from "react";

class EditedTask extends React.Component {
  state = { eItem: this.props.item };

  changeEdit = e => {
    this.setState({
      eItem: { name: e.target.value, key: this.state.eItem.key }
    });
  };

  submitEdit = () => {
    this.props.submitEdit(this.state.eItem);
    this.props.resetComponent();
    this.setState({ eItem: "" });
  };

  render() {
    return (
      <li className="task-item edit-item">
        <input
          value={this.state.eItem.name}
          onChange={this.changeEdit}
          autoFocus={true}
        />
        <button onClick={this.submitEdit}>Update</button>
      </li>
    );
  }
}

export default EditedTask;
