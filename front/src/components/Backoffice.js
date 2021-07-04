import React, { useEffect, useState } from "react";

import ShopApi from "api/shops-api";

export default function Backoffice() {
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
    <div>
      {shopList ? (
        shopList.map((shop) => <div>{shop.name}</div>)
      ) : (
        <div>Pas de résultat</div>
      )}
    </div>
  );
}
