import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../sass/main.scss'
import "@babel/polyfill";
import Shell from "./components/shell";


const App = () => {
    return (
        <Shell/>
    )
}
ReactDOM.render(<App/>, document.getElementById("app"));
