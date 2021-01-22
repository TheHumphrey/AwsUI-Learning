import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

import Component from "./components";

const App = (): ReactElement => <Component />;

ReactDOM.render(<App />, document.getElementById("root"));
