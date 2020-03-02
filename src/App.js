import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux/store';

import "./App.css";
import Login from "./auth/Login"
import Home from "./controllers/Home"
import Product from "./controllers/Product"
import Category from "./controllers/Category"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/product" component={Product} />
        <Route path="/category" component={Category} />
      </Router>
    </Provider>
  );
}

export default App;