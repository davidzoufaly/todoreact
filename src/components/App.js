import React from "react";
import Input from "./Input";
import TaskList from "./TaskList";
import TaskStatistics from "./TaskStatistics";

const retrievedData = window.localStorage.getItem("list");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: JSON.parse(retrievedData),
      editedItem: "",
      hide: false
    };
  }

  addItem = actualToDo => {
    if (actualToDo.name !== "" || actualToDo.key !== "") {
      const toDoList = [...this.state.toDoList, actualToDo];
      this.setState({ toDoList });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.toDoList.filter(item => {
      return item.key !== key;
    });
    this.setState({
      toDoList: filteredItems
    });
  };

  editItem = item => {
    this.state.toDoList.map(e => {
      if (e.key === item.key) {
        this.setState({ editedItem: e });
      }
      return e;
    });
  };

  changeEdit = e => {
    this.setState({
      editedItem: { name: e.target.value, key: this.state.editedItem.key }
    });
  };

  submitEdit = () => {
    const newList = this.state.toDoList.map(item => {
      if (item.key === this.state.editedItem.key) {
        item.name = this.state.editedItem.name;
      }
      return item;
    });
    this.setState({ toDoList: newList, editedItem: "" });
  };

  completeItem = item => {
    const newList = this.state.toDoList.map(e => {
      if (e.key === item.key && e.checked === false) {
        e.checked = true;
      } else if (e.key === item.key && e.checked === true) {
        e.checked = false;
      }
      return e;
    });
    this.setState({ toDoList: newList });
  };

  hideCompleted = () => {
    this.setState(prevState => ({
      hide: !prevState.hide
    }));
  };

  render() {
    let editInput = "";
    if (this.state.editedItem !== "") {
      editInput = (
        <div>
          <input
            value={this.state.editedItem.name}
            onChange={this.changeEdit}
          />
          <button onClick={this.submitEdit}>Potvrdit změnu</button>
        </div>
      );
    }
    return (
      <div className="div">
        <h1>What you need to do?</h1>
        <Input addItem={this.addItem} />
        <TaskList
          toDoList={this.state.toDoList}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          completeItem={this.completeItem}
          hideItems={this.state.hide}
        />
        {editInput}
        <button onClick={this.hideCompleted}>
          {this.state.hide ? "Show" : "Hide"} completed
        </button>
        <TaskStatistics/>
      </div>
    );
  }
  componentDidUpdate() {
    window.localStorage.setItem("list", JSON.stringify(this.state.toDoList));
  }
}

export default App;
