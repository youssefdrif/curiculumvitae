import React, { useState } from "react";
import "./Experience.css";
import { BsGithub } from "react-icons/bs";

export default function Experience() {
  const [isToggled, setIsToggled] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  const handleToggle = () => {
    setIsRotated(true);
    setIsToggled((prevState) => !prevState);
  };

  const handleAnimationEnd = () => {
    setIsRotated(false);
  };

  const handleLink = (event) => {
    event.preventDefault();
    window.open(event.target.href, "_blank");
  };

  const handleClickTrail = () => {
    window.open("https://github.com/youssefdrif/Trail/tree/main/BDD", "_blank") ||
      window.location.replace("https://github.com/youssefdrif/Trail/tree/main/BDD");
  };

  return (
    <div className="grid-container-wrapper">
      {isToggled ? (
        <div
          className={`grid-containerexp ${isRotated ? "rotate" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="left-side">2021-2022</div>
          <div className="separator"></div>
          <div className="right-side">
            <h2 className="intitule">Alternant Développeur (Front-End)</h2>
            <h3 className="fonction">
              Développement d'une application web en ReactJS
            </h3>
            <p className="description">
              Développement d'une application web ReactJS en entreprise et
              exécution de tests avec Jest, écriture du CSS pour mettre en forme
              la maquette du designer.
            </p>
            <div className="stack">
              <button className="React">React.Js</button>
              <button className="Gitlab">GitLab</button>
              <button className="Docker">Docker</button>
              <button className="CSS">CSS</button>
              <button className="VScode">Visual Studio Code</button>
              <button className="VS">Visual Studio</button>
              <button className="SQL">PostreSQL</button>
              <button className="WSL">WSL</button>
            </div>
            <p className="formation">
              Entreprise{" "}
              <a
                className="entreprise"
                href="https://www.zf.com/products/fr/cv/fleet/dis.html"
                onClick={handleLink}
              >
                Delta Industrie Service
              </a>
            </p>
            <p className="formation">
              Campus{" "}
              <a
                className="entreprise"
                href="https://campus-digitales.fr/"
                onClick={handleLink}
              >
                Digit'Alès
              </a>
            </p>
            <p className="formation">
              L'espace numérique de formation{" "}
              <a
                className="entreprise"
                href="https://www.cnam.fr/"
                onClick={handleLink}
              >
                CNAM
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`grid-containerexp ${isRotated ? "rotate" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="left-side">2020-2021</div>
          <div className="separator"></div>
          <div className="right-side">
            <h2 className="intitule">Étudiant (Front-End/Back-End)</h2>
            <h3 className="fonction">
              Developpement d'une application web en PHP
            </h3>
            <p className="description">
              Projet de fin d'études (Conception d'une base de données,
              conception d'un site web récupérant les données des personnes
              s'incrivant via un formulaire).
            </p>
            <div className="stack">
              <button className="Php">PHP</button>
              <button className="Html">HTML</button>
              <button className="phpmyadmin">phpMyAdmin</button>
              <button className="Mysql">MySQL</button>
            </div>
            <p className="formation">
              Lycée Général et Technologique{" "}
              <a
                className="entreprise"
                href="https://dhuoda.mon-ent-occitanie.fr/"
                onClick={handleLink}
              >
                Dhuoda
              </a>
            </p>
            <div className="my-github-btn">
              <button onClick={handleClickTrail} className="Github">
                <BsGithub className="logogitprojet" />
                <p className="fontgit">Projet trail</p>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="svgcss">
        <svg
          onClick={handleToggle}
          className={isToggled ? "circle-svg1" : "circle-svg"}
          width="48"
          height="48"
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="transparent"
            stroke="#272343"
            strokeWidth="2"
          />
          <path
            d={
              isToggled
                ? "M24 14V34M14 24L24 35L34 24"
                : "M24 14V34M14 24L24 13L34 24"
            }
            stroke="#272343"
            strokeWidth="2"
            fill="none"
          />
          <marker
            id="arrowhead"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="1"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </svg>
      </div>
    </div>
  );
}
