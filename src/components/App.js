import React from "react";

import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";
import TaskStatistics from "./TaskStatistics";
import HideShowCompleted from "./HideShowCompleted";
import ClearList from "./ClearList";
import Datumek from "./Datumek";
import Sound from "./Sound";

const getToDoList = JSON.parse(window.localStorage.getItem("list"));

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

  submitEdit = getItem => {
    const newList = this.state.toDoList.map(item => {
      if (item.key === getItem.key) {
        item.name = getItem.name;
      }
      return item;
    });
    this.setState({ toDoList: newList });
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

  handleHideShow = boolean => {
    this.setState({ hide: boolean });
  };

  clear = () => {
    this.setState({ toDoList: [] });
  };

  componentDidMount() {
    return getToDoList !== null
      ? this.setState({ toDoList: getToDoList })
      : null;
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Input addItem={this.addItem} />
        <div className="hide-completed section">
          <HideShowCompleted booleanShow={this.handleHideShow} />
          <ClearList clear={this.clear} />
        </div>
        <Datumek list={this.state.toDoList} />
        <TaskList
          toDoList={this.state.toDoList}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          completeItem={this.completeItem}
          hideItems={this.state.hide}
          submitEdit={this.submitEdit}
        />
        <TaskStatistics toDoList={this.state.toDoList} />
        <Sound list={this.state.toDoList}/>
      </div>
    );
  }
  componentDidUpdate() {
    window.localStorage.setItem("list", JSON.stringify(this.state.toDoList));
    window.localStorage.setItem("hide", JSON.stringify(this.state.hide));
  }
}

export default App;
