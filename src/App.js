import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ProductLists from "./components/ProductLists";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
        <Router>
     <Header/>
            <Switch>
        <Route path="/" exact component = {ProductLists} />
        <Route path="/product/:productId" exact component = {Details} />
                <Route path="/" exact component = {Header} />
        <Route> Böyle bir sayfa bulunamadı! (404 Not Found!) </Route>
            </Switch>
    </Router>
    </div>
  );
}

export default App;
