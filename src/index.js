import React from "react"; 
import ReactDOM from "react-dom"; 
import App from "./app";
 
// function Welcome(props) { 
//   return <h1>Hello, {props.name}</h1>; 
// };
 
// const element = <Welcome name="Bob" />; 
 
// ReactDOM.render(element, document.getElementById("index"));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  rootElement
);
setInterval(function () {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    rootElement
  );
}, 60* 1000);
