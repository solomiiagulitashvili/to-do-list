import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { TaskList } from './components/TaskList';
import { NewTask } from './components/NewTask';

class App extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.getTodoList();
  }

  getTodoList = () => {
    fetch('/api/task/')
      .then((res) => res.json())
      .then((tasks) => {
        this.setState({ tasks });
      });
  };

  handleAddTask = (task) => {
    fetch('/api/task/', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          alert('Something gone wrong');
        }
      })
      .then((tasks) => {
        const newTasks = [task, ...this.state.tasks];
        this.setState({ tasks: newTasks });
        alert('Task successfully added');
      });
  };

  deleteTask = (taskId) => {
    fetch(`/api/task/${taskId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((tasks) => {
        const newTasksArray = this.state.tasks.filter(
          (task) => task.id !== taskId,
        );
        this.setState({ tasks: newTasksArray });
      });
    // const newTasksArray = this.state.tasks.filter((item) => item.id !== taskId);
    // this.setState({ tasks: newTasksArray });
  };

  completeTask = (taskId) => {
    fetch(`/api/task/${taskId}`, {
      method: 'PATCH',
      crossDomain: true,
      xhrFields: {
        withCredentials: true,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: '',
      },
      data: JSON.stringify(taskId),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((tasks) => {
        const completeTaskArray = this.state.tasks.map((task) => {
          if (task.id === taskId) {
            if (task.done === true) {
              task.done = false;
            } else {
              task.done = true;
            }
          }

          return task;
        });
        this.setState({ tasks: completeTaskArray });
      });
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
