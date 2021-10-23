import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: "0 5rem ",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
      padding: " 0 0",
      // backgroundColor: "red",
    },
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
    width: "7rem",
    border: "1px solid #949CD1",
    borderRadius: "10px",
    boxShadow: "0 3px 23px rgb(0 0 0 / 20%)",
    [theme.breakpoints.down("md")]: {
      height: "6rem",
      width: "6rem",
    },
  },
}));
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
const DownloadReturns = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.contentContainer} direction="column">
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
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
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
    </>
  );
};

export default DownloadReturns;
