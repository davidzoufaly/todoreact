import React from "react";

class TaskList extends React.Component {
  helper = hidingItems => {
    const listDOM = this.props.toDoList.map(singleItem => {
      if (!hidingItems) {
        return (
          <li key={singleItem.key}>
            <input
              type="checkbox"
              defaultChecked={singleItem.checked}
              onClick={() => this.props.completeItem(singleItem)}
            />
            {singleItem.name}
            <button onClick={() => this.props.deleteItem(singleItem.key)}>
              Delete Item
            </button>
            <button onClick={() => this.props.editItem(singleItem)}>
              Edit Item
            </button>
          </li>
        );
      } else if(hidingItems && !singleItem.checked) {
        return (
          <li key={singleItem.key}>
            <input
              type="checkbox"
              defaultChecked={singleItem.checked}
              onClick={() => this.props.completeItem(singleItem)}
            />
            {singleItem.name}
            <button onClick={() => this.props.deleteItem(singleItem.key)}>
              Delete Item
            </button>
            <button onClick={() => this.props.editItem(singleItem)}>
              Edit Item
            </button>
          </li>
        );
      } else {
        return "Something went wrong"
      }
    });
    return listDOM;
  };

  render() {
    const listItems = this.helper(this.props.hideItems);
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default TaskList;
