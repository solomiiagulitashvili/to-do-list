import React from "react";
import "./App.css";
import { TaskList } from "./components/TaskList";
import { NewTask } from "./components/NewTask";

class App extends React.Component {
  state = {
    tasks: []
  };
  handleAddTask = task => {
    const newTasks = [task, ...this.state.tasks];
    this.setState({ tasks: newTasks });
  };
  deleteTask = taskId => {
    const newTasksArray = this.state.tasks.filter(item => item.id !== taskId);
    this.setState({ tasks: newTasksArray });
  };
  completeTask = taskId => {
    const completeTaskArray = this.state.tasks.map(item => {
      if (item.id === taskId) {
        item.done = true;
      }
      return item;
    });
    this.setState({ tasks: completeTaskArray });
  };
  render() {
    return (
      <div className="App">
        <h1>To-do list</h1>
        <NewTask onAddTask={this.handleAddTask} tasksArray={this.state.tasks} />
        <TaskList
          tasksList={this.state.tasks}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
        />
      </div>
    );
  }
}

export default App;
