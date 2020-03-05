import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import NewPipeline from "./NewPipeline";

const styles = theme => ({
  a: {
    textDecoration: 'none'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});


class Pipelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/projects");
    const projects = await response.json()
    this.setState({ projects })
  }

  render() {
    const { classes } = this.props;
    const { projects } = this.state;
    
    return (
      <div className={classes.root}>
        <NewPipeline />
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {projects.map(project => (
              <Grid key={project.id} item xs={4}>
                <Link to={`/pipelines/${project.id}`} className={classes.a}>
                  <Paper className={classes.paper}>{project.name}</Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Pipelines);
