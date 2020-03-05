import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

async function stateChanged(story, event) {
  const newState = event.target.value;
  const id = story.id;
  const updatedStory = story;
  updatedStory.state = newState;
  
  await fetch(`http://localhost:8080/stories/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedStory),
    headers: {
      "Content-Type": "application/json"
    }
  });  

  window.location.reload();
}

export default function Story(props) {
  const { story } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Box>{story.name}</Box>
      <Box mt={2}>
        <Select value={story.state} onChange={(e) => stateChanged(story, e)}>
          <MenuItem value={"NEW"}>New</MenuItem>
          <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
          <MenuItem value={"CLOSED"}>Closed</MenuItem>
        </Select>
      </Box>
    </Paper>
  );
}
