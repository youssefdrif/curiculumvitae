import React from "react";
import "./Experience.css";
import Dhuoda from "../../images/logo-dhuoda(A3).png";
import DIS from "../../images/deltaindustrieservice.png";
import DigitAles from "../../images/DigitAles.png";
import { FaReact, FaDocker, FaCss3, FaLinux } from "react-icons/fa";
import { AiFillGitlab, AiFillHtml5 } from "react-icons/ai";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiPostgresql,
  SiPhp,
  SiPhpmyadmin,
  SiMysql,
} from "react-icons/si";

export default function Experience() {
  return (
    <div className="grid-containerexp">
      <div className="cardprofilexp">
        <div className="card-content">
          <div className="card-textexp">
            <h2>Application ReactJS (Front-End)</h2>
            <p>
              Développement d'une application web ReactJS en entreprise et
              exécution de tests avec Jest pour vérifier le fonctionnement de la
              webapp et développement du code CSS en pixel perfect pour match
              avec le designer
            </p>
            <div className="technos">
              <p className="stack">Stack technique</p>
              <FaReact className="logoreact" />
              <AiFillGitlab className="logogitlab" />
              <FaDocker className="logodocker" />
              <FaCss3 className="logocss" />
              <SiVisualstudiocode className="logovscode" />
              <SiVisualstudio className="logovs" />
              <SiPostgresql className="logosql" />
              <FaLinux className="logolinux" />
            </div>
          </div>
        </div>
        <div className="card-imageexp">
          <div className="card-content">
            <div className="card-textexp">
              <h2 className="header">2021-2022</h2>
              <h3 className="header2">Alternant</h3>
              <p className="textepadding">
                Dans l'entreprise<br/>Delta Industrie Service<br/>30560
                <br/>Saint-Hilaire-de-Brethmas
              </p>
              <div className="icones">
                <img className="bruh" src={DIS} alt="ecole" />
              </div>
              <p className="texte">À l'école Digit'Alès</p>
              <div className="iconesrounded">
                <img className="digitales" src={DigitAles} alt="ecole" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardprofilexp">
        <div className="card-content">
          <div className="card-textexp">
            <h2>Application PHP(Front-End/Back-End)</h2>
            <p>
              Projet en fin d'études (Gestion d'une base de données et création
              d'un site Web dynamique fonctionnant avec la base de données)
            </p>
            <div className="technos">
              <p className="stack">Stack technique</p>
              <SiPhp className="logophp" />
              <AiFillHtml5 className="logohtml" />
              <SiPhpmyadmin className="logophpmyadmin" />
              <FaCss3 className="logocss" />
              <SiMysql className="logomysql" />
            </div>
          </div>
        </div>
        <div className="card-imageexp">
          <div className="card-content">
            <div className="card-textexp">
              <h2 className="header">2020-2021</h2>
              <h3 className="header2">Étudiant</h3>
              <p className="textepadding">
                Lycée Général et Technologique Dhuoda<br/>30900 Nîmes
              </p>
              <div className="iconesrounded">
                <img className="dhuoda" src={Dhuoda} alt="ecole" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
