import React from 'react';
import {
 Button, Form, FormGroup, Label, Input, FormText 
} from 'reactstrap';
import nanoId from 'nano-id';

class NewTask extends React.Component {
  state = {
    title: '',
    text: '',
  };

  handleChange = (e) => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, text } = this.state;
    this.props.onAddTask({
      title,
      text,

    });
    this.setState({ title: '', text: '' });
  };

  validate = () => {
    const { title, text } = this.state;
    if (
      title.trim()
      && text.trim()
      && !this.props.tasksArray.find((item) => item.title === title)
    ) {
      return true;
    }
    return false;
  };

  render() {
    const { title, text } = this.state;
    return (
      <div className="new-task">
        <h2>Create new task</h2>
        <Form onSubmit={this.handleSubmit} className="form">
          <FormGroup>
            <Label for="title">Task title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
              placeholder="Task title"
              value={title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="text">Task text</Label>
            <Input
              type="textarea"
              name="text"
              id="text"
              onChange={this.handleChange}
              placeholder="Task text"
              value={text}
            />
          </FormGroup>
          <Button
            type="submit"
            disabled={!this.validate()}
            className="create-button"
          >
            Create task
          </Button>
        </Form>
      </div>
    );
  }
}

export { NewTask };
