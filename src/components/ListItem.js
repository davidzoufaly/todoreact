import React from "react";

class ListItem extends React.Component {
  render() {
    return (
        <li className="task-item">
          <input
            type="checkbox"
            defaultChecked={this.props.item.checked}
            onClick={() => this.props.completeItem(this.props.item)}
          />
          <p onClick={() => this.props.editNew(this.props.item)}>{this.props.item.name}</p>
          <button onClick={() => this.props.editNew(this.props.item)}>Edit</button>
          <button onClick={() => this.props.deleteItem(this.props.item.key)}>
            Delete
          </button>
        </li>
    );
  }
}

export default ListItem;
