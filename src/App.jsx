import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => {
          return <Home />;
        }}
      />
      <Route path="/Projetos" exact component={Projetos} />
      <Route path="/Contato" exact component={Contato}/>
    </Router>
  );
}

export default App;
