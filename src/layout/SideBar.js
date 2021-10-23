import { Box, Drawer, List, makeStyles, Typography } from "@material-ui/core";
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
  },
  desktopDrawerContent: {
    width: "80%",
  },
  companyContainer: {
    height: "15vh",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <>
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
      </Drawer>
    </>
  );
};

export default SideBar;
