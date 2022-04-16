import * as React from "react";
import { render } from "react-dom";
import App from "./App";

import "./index.scss";

const root = document.getElementById("app") as HTMLElement;
render(
  <>
    <div className="flex-1">hello ahmed samir</div>
  <App name="5"/>
  </>,
  root
);
