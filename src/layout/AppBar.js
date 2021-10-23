import {
  Avatar,
  Badge,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  badge: {
    height: "10px",
    minWidth: "9px",
  },

  Container: {
    width: "100%",
    height: "90%",
  },
  miniNav: {
    marginBottom: "3rem",
  },

  firstName: {
    fontWeight: "bolder",
  },
}));
const AppBar = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={3}
        className={classes.miniNav}
      >
        <Grid item>
          <Badge
            classes={{ badge: classes.badge }}
            badgeContent={""}
            color="primary"
          >
            <ChatBubbleOutlineIcon />
          </Badge>
        </Grid>
        <Grid item>
          <NotificationsNoneIcon />
        </Grid>
        <Grid item>
          <Typography variant="h5" color="textPrimary">
            <span className={classes.firstName}>RIA</span> MOHAN
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="Ria Mohan"
            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
          />
        </Grid>
        <Hidden smUp>
          <Grid item>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
};

export default AppBar;
