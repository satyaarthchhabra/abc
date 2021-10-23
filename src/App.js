import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Drawer,
  Grid,
  List,
  makeStyles,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import NavItem from "./NavItem";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import MenuIcon from "@material-ui/icons/Menu";

import "./App.css";
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
  rightSide: {
    zIndex: 100000,
    height: "100vh",
  },
  rightSidePaper: {
    padding: "0.5rem 1rem",
    height: "100%",
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
  contentContainer: {
    padding: "0 6rem ",
  },
  textGrey: {
    color: "#949494",
  },
  featureContainer: {
    height: "8rem",
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8rem",
    border: "1px solid #949CD1",
    borderRadius: "10px",
    boxShadow: "0 3px 23px rgb(0 0 0 / 20%)",
  },
  firstName: {
    fontWeight: "bolder",
  },
}));
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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
  const features = [
    {
      title: "GSTR-2B",
    },
    {
      title: "GSTR-2A",
    },
    {
      title: "GSTR-3B (annual)",
    },
    {
      title: "GSTR-3B",
    },
    {
      title: "Custom",
    },
    {
      title: "GSTR-1 PDF",
    },
    {
      title: "GSTR-1 Excel",
    },
    {
      title: "GSTR-9",
    },
    {
      title: "Cash Ledger",
    },
    {
      title: "Credit Ledger",
    },
  ];
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item xs={0} md={2}>
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
        </Grid>
        <Grid elevation={5} item xs={12} md={9} className={classes.rightSide}>
          <Paper className={classes.rightSidePaper} elevation={5}>
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
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
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
            </Grid>
            <Grid
              container
              className={classes.contentContainer}
              direction="column"
            >
              <Typography
                variant="subtitle1"
                color="initial"
                className={classes.textGrey}
              >
                Download Returns for a Client
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  my: 4,
                }}
              >
                {features.map((feature) => (
                  <Box
                    className={classes.featureContainer}
                    sx={{ boxShadow: 3, p: 1, mx: 2, my: 4 }}
                  >
                    {feature.title}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
