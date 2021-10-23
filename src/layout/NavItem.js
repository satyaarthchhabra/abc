import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, ListItem, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    paddingTop: 5,
    paddingBottom: 5,
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "center",
    letterSpacing: 0,
    borderRadius: "8%",
    padding: "10px 8px",
    textTransform: "none",
    width: "100%",
    "&:active": {
      backgroundColor: "#002688",
    },
    "&:hover": {
      backgroundColor: "#002688",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: "auto",
  },
}));

const NavItem = ({ className, icon: Icon, title, ...rest }) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button className={classes.button}>
        <Typography
          // className={classes.companyName}
          color="textSecondary"
          align="center"
          variant="h5"
        >
          {title}
        </Typography>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default NavItem;
