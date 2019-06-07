import React from "react";
import ListItem from "./ListItem";

class TaskList extends React.Component {
  listItem = item => {
    return (
      <ListItem
        item={item}
        deleteItem={this.props.deleteItem}
        editItem={this.props.editItem}
        completeItem={this.props.completeItem}
      />
    );
  };

  render() {
    // eslint-disable-next-line array-callback-return
    const listDOM = this.props.toDoList.map(singleItem => {
      if (!this.props.hideItems) {
        return this.listItem(singleItem);
      } else if (this.props.hideItems && !singleItem.checked) {
        return this.listItem(singleItem);
      }
    });

    return (
      <div>
        <ul>{listDOM}</ul>
      </div>
    );
  }
}

export default TaskList;
