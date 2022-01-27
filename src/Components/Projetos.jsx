import React from "react";
import "./Projetos.css";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import Img from "./Imagem3.png";

function Projetos() {
  const history = useHistory();

  function clickBack() {
    history.goBack();
  }

  return (
    <div className="tudo">
      <div className="back">
        <BiArrowBack className="backBtn" onClick={clickBack} />
      </div>
      <div className="projetos-container">
        <div className="Projetos">
          <h1>Lista de Tarefas JS</h1>
          <a href="https://listadetarefaa.netlify.app/">Veja!</a>
          <h1>Calculadora de Metabolismo Basal</h1>
          <a href="https://calcularmetabolismobasal.netlify.app/">Veja!</a>
          <h1>Contador em React</h1>
          <a href="https://contadorfeitonoreact.netlify.app/">Veja!</a>
          <h1>Lista de tarefas em React</h1>
          <a href="https://listadetarefascombomdiaboatardeboanoite.netlify.app/">
            Veja!
          </a>
          <h1>Relógio feito em JS</h1>
          <a href="https://relog-io.netlify.app/">Veja!</a>
        </div>
      </div>
      <div className="logo">
        <a href="https://portifoliogustavo.netlify.app/"><img src={Img} alt="" className="logo-img" /></a>
      </div>
    </div>
  );
}

export default Projetos;
