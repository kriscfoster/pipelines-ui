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
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  a: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const menuItems = [
  {
    key: "Home",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    key: "Pipelines",
    icon: <ViewColumnIcon />,
    link: "/pipelines"
  },
  {
    key: "Teams",
    icon: <GroupIcon />,
    link: "/teams"
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
        {menuItems.map((menuItem, id) => (
          <Link key={id} to={menuItem.link} className={classes.a}>
            <ListItem button>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.key} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
