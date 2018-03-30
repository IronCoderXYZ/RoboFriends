import React from "react";
import ReactDOM from "react-dom";
import CardList from "./CardList";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import "./index.css";
import { robots } from "./robots";

ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));
registerServiceWorker();
