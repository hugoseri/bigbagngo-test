import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";

import ShopApi from "api/shops-api";
import NoResult from "components/NoResult";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "auto",
    maxWidth: 1200,
    padding: theme.spacing(6),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 6),
  },
  shopList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "auto",
    padding: theme.spacing(6),
  },
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  shop: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: ({ header }) =>
      !header && `solid 0.5px ${theme.palette.divider}`,
    padding: theme.spacing(2),
  },
  shopText: {
    fontWeight: ({ header }) => header && 600,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    minWidth: 500,
  },
  field: {
    margin: theme.spacing(1, 2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function Backoffice() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add a shop");

  return (
    <div className={classes.root}>
      <Modal open={openModal} setOpen={setOpenModal} title={modalTitle} />
      <div className={classes.header}>
        <Typography variant="h5">Shops manager</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenModal(true)}
        >
          Add a shop
        </Button>
      </div>
      <ShopList />
    </div>
  );
}

function Modal({ open, setOpen, title, name, description, location }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="Add or update shop modal"
    >
      <DialogTitle>
        {title}
        <IconButton
          onClick={() => setOpen(false)}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form className={classes.form}>
          <TextField
            label="Name"
            variant="outlined"
            className={classes.field}
          ></TextField>
          <TextField
            label="Description"
            variant="outlined"
            className={classes.field}
          ></TextField>
          <TextField
            label="Location"
            variant="outlined"
            className={classes.field}
          ></TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ShopList() {
  const classes = useStyles();
  const [shopList, setShopList] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    ShopApi.getAll()
      .then((result) => {
        setShopList(result);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className={classes.loaderContainer}>
        <CircularProgress
          size={80}
          color="primary"
          className={classes.loader}
        />
      </div>
    );
  }

  return (
    <div className={classes.shopList}>
      {shopList && <Shop shop={{ id: "ID", name: "Name" }} header />}
      {shopList ? (
        shopList.map((shop) => <Shop key={shop.name} shop={shop} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
}

function Shop({ shop, header }) {
  const classes = useStyles({ header });
  return (
    <div className={classes.shop}>
      <Typography className={classes.shopText}>{shop.id}</Typography>
      <Typography className={classes.shopText}>{shop.name}</Typography>
      {!header ? (
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      ) : (
        <Typography className={classes.shopText}>Actions</Typography>
      )}
    </div>
  );
}
