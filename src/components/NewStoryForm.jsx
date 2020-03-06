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
    const stages = props.stages;
    this.state = {
      name: "",
      stage: stages[0],
      error: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStageChange = this.handleStageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleStageChange(event) {
    this.setState({ stage: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newStory = {
      name: this.state.name,
      stage: this.state.stage,
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
    const response = await fetch(`http://localhost:8080/projects/${id}/stories`, {
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
    const { stages } = this.props;

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
            <InputLabel>Stage</InputLabel>
            <Select value={this.state.stage} onChange={this.handleStageChange}>
              {stages.map((s, i) => <MenuItem key={i} value={s}>{s.name}</MenuItem>)}
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
