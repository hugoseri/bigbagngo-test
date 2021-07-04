import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import ShopApi from "api/shops-api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "auto",
    maxWidth: 1200,
    padding: theme.spacing(6),
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

  return (
    <div className={classes.root}>
      <Shop shop={{ id: "ID", name: "Name" }} header />
      {shopList ? (
        shopList.map((shop) => <Shop shop={shop} />)
      ) : (
        <div>Pas de résultat</div>
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
