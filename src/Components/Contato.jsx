import React from "react";
import "./Contato.css";
import { FaWhatsapp } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { useHistory } from "react-router-dom";

function Contato() {
  const history = useHistory();

  function clickBack() {
    history.goBack();
  }

  return (
    <div className="Contato">
      <div className="back">
        <BiArrowBack className="backBtn" onClick={clickBack} />
      </div>
      <div className="box-celular">
        <div className="celular">
          <FaWhatsapp className="icon-tf" />
          <h1 className="numero-cel">(47) 9 9999-8888</h1>
        </div>
        <div className="email">
          <MdOutlineEmail className="icon-email"/>
          <h1>gustavogonzaga.gg243@gmail.com</h1>
        </div>
      </div>
    </div>
  );
}
export default Contato;
