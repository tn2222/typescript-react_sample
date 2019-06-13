import * as React from "react";
import * as ReactDom from "react-dom";
import TodoApp from "./todoApp";

ReactDom.render(
    React.createElement(TodoApp),
    document.getElementById("app")
);
