import { ReactComponent as NoResultIllustration } from "assets/sad.svg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  noResult: {
    width: "100%",
    textAlign: "center",
    padding: theme.spacing(4, 0),
  },
}));

export default function NoResult({ addShopButton }) {
  const classes = useStyles();

  return (
    <>
      <NoResultIllustration />
      <Typography variant="h6" className={classes.noResult}>
        No result...
      </Typography>
      {addShopButton && (
        <Link to="/admin">
          <Button variant="contained" color="primary">
            Add a shop
          </Button>
        </Link>
      )}
    </>
  );
}
