import React from "react";
import { Container, Box, CssBaseline, makeStyles } from "@material-ui/core";
import Cards from "./components/Cards";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eeedf0",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Box className={classes.root}>
        <Container maxWidth="lg">
          <Cards />
        </Container>
      </Box>
    </>
  );
};

export default App;
