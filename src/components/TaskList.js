import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import "../App.css";

class TaskList extends React.Component {
  handleDelete = item => {
    this.props.deleteTask(item.id);
  };
  handleComplete = item => {
    this.props.completeTask(item.id);
  };

  renderTask = () => {
    let tasksTemplate = null;

    if (this.props.tasksList.length) {
      tasksTemplate = this.props.tasksList.map(item => {
        return (
          <li className="item" key={item.title}>
            <Card body>
              <CardTitle>{item.title} </CardTitle>
              <CardText>{item.text} </CardText>
              <div className="buttons">
                <Button
                  className={item.done === true ? "complete" : "uncomplete"}
                  onClick={() => {
                    this.handleComplete(item);
                  }}
                >
                  {item.done ? "Mark as uncomplete" : "Mark as complete"}
                </Button>
                <Button
                  color="danger"
                  className="delete"
                  onClick={() => {
                    this.handleDelete(item);
                  }}
                >
                  Delete
                </Button>
              </div>
            </Card>
          </li>
        );
      });
    } else {
      tasksTemplate = <p>No tasks</p>;
    }
    return tasksTemplate;
  };
  render() {
    return (
      <div className="task-list">
        <h2 className="list-header">Existent tasks</h2>
        <ul className="list">{this.renderTask()}</ul>
      </div>
    );
  }
}

export { TaskList };
