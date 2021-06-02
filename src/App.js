import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Products from "./components/Products";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
        <Router>
     <Header/>
            <Switch>
        <Route path="/" exact component = {Products} />
        <Route path="/product/:productId" exact component = {Details} />
        <Route> Böyle bir sayfa bulunamadı! (404 Not Found!) </Route>
            </Switch>
    </Router>
    </div>
  );
}

export default App;
