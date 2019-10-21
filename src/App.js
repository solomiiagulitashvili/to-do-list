import React from "react";
import "./App.css";
import { TaskList } from "./components/TaskList";
import { NewTask } from "./components/NewTask";
import { Container, Row, Col } from "reactstrap";

class App extends React.Component {
  state = {
    tasks: []
  };
  componentDidMount() {
    let tasksInStorage = localStorage.getItem("tasksInStorage");
    let tasksFromJson = JSON.parse(tasksInStorage);
    if (tasksFromJson !== null) {
      this.setState({ tasks: tasksFromJson });
    }
  }
  componentDidUpdate() {
    let tasksToStorage = JSON.stringify(this.state.tasks);
    localStorage.setItem("tasksInStorage", tasksToStorage);
  }
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
        if (item.done === true) {
          item.done = false;
        } else {
          item.done = true;
        }
      }

      return item;
    });
    this.setState({ tasks: completeTaskArray });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To-do list</h1>
        </div>
        <Container>
          <Row>
            <Col xs="12" sm="4">
              <NewTask
                onAddTask={this.handleAddTask}
                tasksArray={this.state.tasks}
              />
            </Col>
            <Col xs="12" sm="8">
              <TaskList
                tasksList={this.state.tasks}
                deleteTask={this.deleteTask}
                completeTask={this.completeTask}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
