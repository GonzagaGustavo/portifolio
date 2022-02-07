import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import "./Home.css";
import Eu from "./eu.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="Botoes">
        <Link to="/Projetos">
          <button className="btn-menu">Projetos</button>
        </Link>
        <Link to="/Contato">
        <button className="btn-menu">Contate-me</button>
        </Link>
      </div>
      <div className="pf">
        <div className="container-pf">
          <img src={Eu} alt="" className="imgeu" />
          <h1>Gustavo Gonzaga</h1>
          <h2 id="eusei">Linguagens que eu sei:</h2>
          <h2 className="typical">
            {" "}
            <Typical
              loop={Infinity}
              steps={["JavaScript", 1000, 
              "React", 
              1000,
              "HTML",
              1000,
              "CSS",
              1000
            ]}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
