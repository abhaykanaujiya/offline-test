import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./pages/home";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Register} />
        <Route path='/product' exact component={ProductList} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/home' component={ProductList} />
      </Switch>
    </Router>
  );
}
