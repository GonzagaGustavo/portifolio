import React from "react";
import "./Contato.css";
import { FaWhatsapp } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import {BsGithub} from 'react-icons/bs'

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
      <div className="informations">
      <div className="box-celular">
        <div className="celular">
          <a
            id="linkzap"
            href="https://api.whatsapp.com/send?phone=5547992387295&text=Ol%C3%A1!"
          >
            <FaWhatsapp className="icon-tf" />
          </a>
          <h1 className="numero-cel">(47) 9 9238-7295</h1>
        </div>
        <div className="email">
          <a href="https://mail.google.com/mail/u/1/?ogbl#inbox?compose=GTvVlcSGLPtmxcpfrsfgBPmZtbtGWXzSlJhQfZjlbJrlPRggXLKmRwqVhzHCZpzjDTfttHffMcjNs">
            <MdOutlineEmail className="icon-email" />
          </a>
          <h1 id="email-text">gustavogonzaga.gg243@gmail.com</h1>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/gustavo-gonzaga-69b47a228/">
            <FaLinkedin className="linkedin-icon" />
          </a>
          <h1 id="linkedin-text">Gustavo Gonzaga</h1>
        </div>
        <div className="github">
        <a href="https://github.com/Gustavo13132"><BsGithub className="github-icon"/></a>
        <h1 id="github-text">Gustavo13132</h1>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Contato;
