import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Story from "./Story";

const styles = theme => ({});

class StoryBoard extends React.Component {

  render() {
    const { classes, stories } = this.props;
    const newStories = stories.filter((s) => s.state === "NEW");
    const inProgressStories = stories.filter(s => s.state === "IN_PROGRESS");
    const closedStories = stories.filter(s => s.state === "CLOSED");

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            {newStories.map((story, id) => (
              <Story key={id} story={story} />
            ))}
          </Grid>
          <Grid item xs={4}>
            {inProgressStories.map((story, id) => (
              <Story key={id} story={story} />
            ))}
          </Grid>
          <Grid item xs={4}>
            {closedStories.map((story, id) => (
              <Story key={id} story={story} />
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(StoryBoard);
