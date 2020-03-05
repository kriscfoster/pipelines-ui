import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";


class NewPipelineForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newProject = {
      name: this.state.name,
    }

    this.createProject(newProject)
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      this.setState({ error });
    })
  }

  async createProject(project) {
      const response = await fetch("http://localhost:8080/projects", {
        method: "POST",
        body: JSON.stringify(project),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.status === 400) {
        throw Error("could not create project")
      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            autoFocus
            value={this.state.value}
            onChange={this.handleNameChange}
            label="Name"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </form>
        <div>{this.state.error}</div>
      </div>
    );
  }
}

export default NewPipelineForm;
