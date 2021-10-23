import {
  Box,
  Drawer,
  Hidden,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavItem from "./NavItem";
const items = [
  {
    title: "Add Client",
  },
  {
    title: "Client List",
  },
  {
    title: "Reconcile",
  },
  {
    title: "Download Returns",
  },
  {
    title: "Download",
  },
  {
    title: "Custom Returns",
  },
  {
    title: "File Returns**",
  },
  {
    title: "Manage Roles",
  },
];
const useStyles = makeStyles((theme) => ({
  desktopDrawer: {
    backgroundColor: "#1948C1",
    borderRadius: "6% 0 0 6%",
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
  },
  desktopDrawerContent: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  companyContainer: {
    height: "15vh",
  },
}));
const SideBar = (props) => {
  const classes = useStyles();
  const { window, mobileOpen, handleDrawerToggle } = props;
  const drawer = (
    <Box
      display="flex"
      className={classes.desktopDrawerContent}
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        className={classes.companyContainer}
        flexDirection="column"
        p={2}
      >
        <Typography color="textPrimary" variant="h4">
          Company Logo
        </Typography>
      </Box>
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem key={item.title} title={item.title} />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Hidden only={"xs"}>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Drawer
        container={container}
        variant="temporary"
        classes={{ paper: classes.desktopDrawer }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default SideBar;
