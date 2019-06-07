import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <div>
        <li key={this.props.item.key}>
          <input
            type="checkbox"
            defaultChecked={this.props.item.checked}
            onClick={() => this.props.completeItem(this.props.item)}
          />
          {this.props.item.name}
          <button onClick={() => this.props.deleteItem(this.props.item.key)}>
            Delete
          </button>
          <button onClick={() => this.props.editItem(this.props.item)}>Edit</button>
        </li>
      </div>
    );
  }
}

export default ListItem;
