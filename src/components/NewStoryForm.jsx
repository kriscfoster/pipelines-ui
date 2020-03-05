import React from "react";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router-dom";

class NewStoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      state: "NEW",
      error: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleStateChange(event) {
    this.setState({ state: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newStory = {
      name: this.state.name,
      state: this.state.state,
    };

    this.createStory(newStory)
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  async createStory(story) {
    const id = this.props.match.params.id;
    const response = await fetch(`http://localhost:8080/projects/${id}`, {
      method: "POST",
      body: JSON.stringify(story),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.status === 400) {
      throw Error("could not create story");
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
            <InputLabel>State</InputLabel>
            <Select value={this.state.state} onChange={this.handleStateChange}>
              <MenuItem value={"NEW"}>New</MenuItem>
              <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
              <MenuItem value={"FINISHED"}>Finished</MenuItem>
            </Select>
          </Box>
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

export default withRouter(NewStoryForm);
