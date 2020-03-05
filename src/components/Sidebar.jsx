import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import GroupIcon from "@material-ui/icons/Group";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
}));

const menuItems = [
  {
    key: "Home",
    icon: <HomeIcon />
  },
  {
    key: "Pipelines",
    icon: <ViewColumnIcon />
  },
  {
    key: "Teams",
    icon: <GroupIcon />
  }
];

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <Divider />
      <List>
        {menuItems.map((menuItem) => (
          <ListItem button key={menuItem.key}>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText primary={menuItem.key}/>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
