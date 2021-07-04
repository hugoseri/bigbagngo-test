import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { ReactComponent as NotFound } from "assets/404.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(15, 6, 0),
  },
}));

export default function NoMatch() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NotFound />
      <Typography variant="h6">Whoops... This page is unknown.</Typography>
    </div>
  );
}
