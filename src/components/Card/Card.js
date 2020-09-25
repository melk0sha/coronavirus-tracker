import React from "react";
import {
  Card as CardContainer,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

const Card = () => {
  const classes = useStyles();

  return (
    <CardContainer className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom
          component="h2"
        >
          Total Deaths
        </Typography>
        <Typography variant="h4" component="p">
          10101010
        </Typography>
        <Typography className={classes.pos} color="textSecondary" component="p">
          +60 per today (new)
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly well
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
