import React from "react";

class TaskStatistics extends React.Component {
  numberCompleted = () => {
    const completedList = this.props.toDoList.filter(e =>
      e.checked ? e : null
    );
    return completedList.length;
  };

  progressFormula = (a, b) => {
    return a !== 0 || b !== 0 ? Math.floor((a / b) * 100) : 0
  }

  render() {
    const tasksCompleted = this.numberCompleted();
    const numberTasks = this.props.toDoList.length;
    const progress = this.progressFormula(
      tasksCompleted, numberTasks
    );
    return (
      <div>
        <p>You have {numberTasks} tasks in the list</p>
        <p>
          You have {tasksCompleted} tasks completed and{" "}
          {numberTasks - tasksCompleted} left
        </p>
        <p>
          Your progress rate is about {progress} % and{" "}
          {progress >= 50
            ? "that is not bad!"
            : "that is quite low, are you lazy?"}
        </p>
      </div>
    );
  }
}

export default TaskStatistics;
