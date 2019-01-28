import React, { Component } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Link to="/">Dashboard</Link>
          <Link to="/add">Add to Inventory</Link>
          <Link to="/edit/:id">Edit</Link>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
