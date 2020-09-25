import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Card from "../Card";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: "100px",
  },
});

const Cards = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={10}>
      {[0, 1, 2].map((value) => (
        <Grid key={value} item>
          <Card />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
