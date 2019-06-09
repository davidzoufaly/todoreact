import React from "react";
import ListItem from "./ListItem";
import EditedTask from "./EditedTask";

class TaskList extends React.Component {
  state = { eItem: "" };

  editNew = item => {
    this.setState({ eItem: item });
  };

  resetComponent = () => {
    this.setState({ eItem: "" });
  };

  listItem = item => {
    return (
      <ListItem
        key={item.key}
        item={item}
        deleteItem={this.props.deleteItem}
        editItem={this.props.editItem}
        editNew={this.editNew}
        completeItem={this.props.completeItem}
      />
    );
  };

  render() {
    // eslint-disable-next-line array-callback-return
    const listDOM = this.props.toDoList.map(singleItem => {
      if (singleItem.key !== this.state.eItem.key) {
        if (!this.props.hideItems) {
          return this.listItem(singleItem);
        } else if (this.props.hideItems && !singleItem.checked) {
          return this.listItem(singleItem);
        }
      } else {
        return (
          <EditedTask
            item={this.state.eItem}
            submitEdit={this.props.submitEdit}
            resetComponent={this.resetComponent}
            key={this.state.eItem.key}
          />
        );
      }
    });

    return (
      <div className="list-component section">
        <ul>{listDOM}</ul>
      </div>
    );
  }
}

export default TaskList;
