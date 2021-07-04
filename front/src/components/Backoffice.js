import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
}));

export default function Backoffice() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h5">Shops manager</Typography>
        <Button variant="contained" color="primary">
          Add a shop
        </Button>
      </div>
      <ShopList />
    </div>
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
      .finally(() => setLoading(true));
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
      {shopList ? shopList.map((shop) => <Shop shop={shop} />) : <NoResult />}
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
