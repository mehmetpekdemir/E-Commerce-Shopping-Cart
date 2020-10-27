import React from "react";
import ReactDOM from "react-dom";
import HomeContainer from "./container/home/HomeContainer";
import * as serviceWorker from "./serviceWorker";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Alertify
import "alertifyjs/build/css/alertify.min.css";

//Routing
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <HomeContainer />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
