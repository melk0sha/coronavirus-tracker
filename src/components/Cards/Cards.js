import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Card from "../Card";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Cards = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center" spacing={10}>
      {/* <Grid item xs={12}> */}
      {/* <Grid container justify="center" spacing={10}> */}
      {[0, 1, 2].map((value) => (
        <Grid key={value} item>
          <Card />
        </Grid>
      ))}
      {/* </Grid> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default Cards;
