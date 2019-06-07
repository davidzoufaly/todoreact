import React from "react";

import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";
import TaskStatistics from "./TaskStatistics";
import HideShowCompleted from "./HideShowCompleted";

const getData = {toDoList: JSON.parse(window.localStorage.getItem("list"))};

class App extends React.Component {
    state = {
      toDoList: [],
      editedItem: "",
      hide: ""
    };

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

  handleHideShow = boolean => {
    this.setState({hide: boolean})
  }

  componentDidMount() {
    return getData.toDoList !== null ? this.setState({toDoList: getData.toDoList}) : null
  }

  render() {
    let editInput = "";
    if (this.state.editedItem !== "") {
      editInput = (
        <div>
          <input
            value={this.state.editedItem.name}
            onChange={this.changeEdit}
          />
          <button onClick={this.submitEdit}>Update</button>
        </div>
      );
    }
    return (
      <div className="div">
        <Header />
        <Input addItem={this.addItem} />
        <TaskList
          toDoList={this.state.toDoList}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          completeItem={this.completeItem}
          hideItems={this.state.hide}
        />
        {editInput}
        <HideShowCompleted booleanShow={this.handleHideShow}/>
        <TaskStatistics toDoList={this.state.toDoList}/>
      </div>
    );
  }
  componentDidUpdate() {
    window.localStorage.setItem("list", JSON.stringify(this.state.toDoList));
    window.localStorage.setItem("hide", JSON.stringify(this.state.hide));
  }
}

export default App;
