import React from "react";
import { Route, Switch } from "react-router-dom";

import CartDetailContainer from "./container/cart/cartDetail/CartDetailContainer"; // CartDetail
import ProductContainer from "./container/product/ProductContainer";
import NotFound from "./shared/notfound/NotFound"; //NotFound

const Routes = (props) => {
  const productInfo = props.productInfo;
  const cartInfo = props.cartInfo;
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ProductContainer productInfo={productInfo} />}
        />
        <Route
          exact
          path="/cart"
          render={() => <CartDetailContainer cartInfo={cartInfo} />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default Routes;
