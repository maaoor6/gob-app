import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GobsList from "./components/gob-list.component";
import EditGob from "./components/edit-gob.component";
import CreateGob from "./components/create-gob.component";
import logo from "./logo.jpg";
import TabelRow from './components/TableRow'
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://codingthesmartway.com"
            target="_blank"
          >
            <img
              src={logo}
              width="40"
              height="40"
              alt="CodingTheSmartWay.com"
            />
          </a>
          <Link to="/" className="navbar-brand">
            Worko-Gobs Gob-App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Add Gobs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={GobsList} />
        <Route path="/edit/:id" component={EditGob} />
        <Route path="/create" component={CreateGob} />
        <Route path="/delete/:id" component={TabelRow} />

      </div>
    </Router>
  );
}

export default App;
