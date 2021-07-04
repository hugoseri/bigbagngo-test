import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BallIcon from "@material-ui/icons/SportsFootball";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    color: theme.palette.common.white,
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(3, 6),
    justifyContent: "space-between",
  },
  home: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      paddingRight: theme.spacing(2),
    },
  },
  button: {
    color: theme.palette.common.white,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Link to="/" className={classes.home}>
        <BallIcon fontSize="large" />
        <Typography variant="h5" className={classes.title}>
          Sport center
        </Typography>
      </Link>
      <Link to="/admin">
        <Button
          variant="text"
          startIcon={<SettingsIcon />}
          className={classes.button}
        >
          Manage shops
        </Button>
      </Link>
    </AppBar>
  );
}
