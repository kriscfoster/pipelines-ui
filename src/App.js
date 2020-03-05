import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Pipelines from "./components/Pipelines";
import Stories from "./components/Stories";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar />
        </AppBar>
        <Router>
          <Sidebar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/pipelines">
              <Pipelines />
            </Route>
            <Route path="/pipelines/:id" children={<Stories/>}></Route>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
