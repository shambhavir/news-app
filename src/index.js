// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import {Link } from "react-router-dom";
import App2 from "./App2";
import newsChoice from "./newsChoice"; 
import App3 from "./App3"; 
import Page1 from "./Page1";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/newsChoice" component={newsChoice} />
        <Route path="/app" component={App}/>
        <Route path="/app2" component={App2}/>
        <Route path="/app3" component={App3}/>

      </Switch>
      </BrowserRouter>,
      rootElement
    );

// ReactDOM.render(<App />, document.getElementById("root"));
