import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import ShopApi from "api/shops-api";
import NoResult from "components/NoResult";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "auto",
    maxWidth: 1200,
    padding: theme.spacing(6),
  },
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30%",
  },
  noResult: {
    width: "100%",
    textAlign: "center",
    padding: theme.spacing(4, 0),
  },
  group: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: theme.spacing(4),
  },
  groupTitle: {
    fontWeight: 600,
    padding: theme.spacing(4, 0, 1),
  },
  shop: {
    width: "100%",
    padding: theme.spacing(2, 0),
    borderTop: `0.5px solid ${theme.palette.divider}`,
    "&:last-child": {
      borderBottom: `0.5px solid ${theme.palette.divider}`,
    },
  },
  shopText: {
    fontWeight: 300,
    fontSize: theme.spacing(3),
  },
}));

export default function Shops() {
  const classes = useStyles();
  const [shopList, setShopList] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    ShopApi.getAll()
      .then((result) => {
        const resultGroupBy = result.reduce((acc, curr) => {
          let group = curr.name[0].toUpperCase(); // first letter
          if (!acc[group]) {
            acc[group] = { group, children: [curr] };
          } else {
            acc[group].children.push(curr);
          }
          return acc;
        }, {});
        setShopList(resultGroupBy);
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
    <div className={classes.root}>
      {shopList ? (
        Object.entries(shopList)
          .sort(([_, a], [__, b]) =>
            a.group.toLowerCase().localeCompare(b.group.toLowerCase())
          )
          .map(([_, value]) => {
            return <ShopGroup key={value.group} group={value} />;
          })
      ) : (
        <NoResult />
      )}
    </div>
  );
}

function ShopGroup({ group }) {
  const classes = useStyles();

  return (
    <div className={classes.group}>
      <Typography className={classes.groupTitle} variant="h3">
        {group.group}
      </Typography>
      {group.children.map((shop) => (
        <Shop key={shop.name} data={shop} />
      ))}
    </div>
  );
}

function Shop({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.shop}>
      <Typography className={classes.shopText}>{data.name}</Typography>
    </div>
  );
}
