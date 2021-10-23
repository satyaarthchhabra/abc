import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import SideBar from "./SideBar";
import AppBar from "./AppBar";

const useStyles = makeStyles((theme) => ({
  rightSide: {
    height: "100vh",
    zIndex: 100000,
    [theme.breakpoints.down("xs")]: {
      zIndex: 1,
    },
  },
  rightSidePaper: {
    padding: "0.5rem 1rem",
    minHeight: "100%",
    borderRadius: "4% 0 0 4%",
  },

  badge: {
    height: "10px",
    minWidth: "9px",
  },
  mainContainer: {
    margin: "3rem",
    marginBottom: "0",
    width: "100%",

    backgroundColor: "red",
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

const MainLayout = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item xs={0} sm={2}>
          <SideBar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Grid>
        <Grid elevation={5} item xs={12} sm={9} className={classes.rightSide}>
          <Paper className={classes.rightSidePaper} elevation={5}>
            <AppBar handleDrawerToggle={handleDrawerToggle} />
            {props.children}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default MainLayout;
