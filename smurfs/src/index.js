import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import { SmurfReducer } from "./Store/Reducer/SmurfReducer";

import thunk from "redux-thunk";
import "./index.css";
import App from "./App";

const store = createStore(SmurfReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
