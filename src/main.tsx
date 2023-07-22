/* @refresh reload */
import { render } from "solid-js/web";

import "./main.css";
import App from "./App";

const main = document.getElementsByTagName("main")[0];

render(() => <App />, main);
