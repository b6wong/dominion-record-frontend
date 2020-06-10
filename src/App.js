import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddGame from "./components/AddGame";
import Game from "./components/Game";
import GamesList from "./components/GamesList";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/games" className="navbar-brand">
            Dominion Record
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/games"} className="nav-link">
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/games"]} component={GamesList} />
            <Route exact path="/add" component={AddGame} />
            <Route path="/games/:id" component={Game} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;