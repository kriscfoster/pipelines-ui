import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Story from "./Story";
import NewStoryModal from "./NewStoryModal"
import NewStageModal from "./NewStageModal"

const styles = theme => ({
  buttonGroup: {
    display: "flex",
    marginBottom: theme.spacing(2)
  },
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    minHeight: "200px"
  },
  stageTitle: {
    textAlign: "center",
  },
});

class StoryBoard extends React.Component {

  render() {
    const { classes, stories, stages } = this.props;
    const storiesByStage = [];

    console.log(stories)

    stages.map((stage, i) => {
      const stageName = stage.name
      storiesByStage[i] = stories.filter((s) => s.stage.name === stageName);
    })

    return (
      <div>
        <Box className={classes.buttonGroup}>
          <NewStoryModal stages={stages}/>
          <NewStageModal />
        </Box>
        <Divider />
        <Grid container>
          <Grid container justify="center" spacing={3}>
            {storiesByStage.map((stageWithStories, i) => {
              return (
                <Grid key={i} item xs={3}>
                  <Paper className={classes.paper}>
                    <Typography gutterBottom className={classes.stageTitle}>
                      {stages[i].name}
                    </Typography>
                    {stageWithStories.map((story, id) => (
                      <Story key={id} story={story} stages={stages} />
                    ))}
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(StoryBoard);
