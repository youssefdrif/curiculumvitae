import React, { useState } from "react";
import "./Projet.css";
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

  const handleClickMeteo = () => {
    window.open("https://github.com/youssefdrif/webappMeteo", "_blank") ||
      window.location.replace("https://github.com/youssefdrif/webappMeteo");
  };


  return (
    <div className="grid-container-wrapper">
      {isToggled ? (
        <div
          className={`grid-containerprojet ${isRotated ? "rotate" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="left-sideprojet">2023</div>
          <div className="separatorprojet"></div>
          <div className="right-sideprojet">
            <h2 className="intituleprojet">Application web météo</h2>
            <h3 className="fonctionprojet">
              Développement d'une application web en Laravel
            </h3>
            <p className="descriptionprojet">
              Développement d'une application web,
              <br /> apprentissage du langage de programmation en autodidacte.
              Utilisation de l'API openweathermap pour récupérer les données
              météorologiques pour les afficher.
              <br /> L'utilisateur peut ensuite rechercher une ville ou un pays
              via une barre de recherche pour avoir la météo de la ville/pays
              qu'il recherche.
            </p>
            <div className="stackprojet">
              <button className="Laravel">Laravel</button>
              <button className="CSS">CSS</button>
              <button className="VScode">Visual Studio Code</button>
            </div>
            <div className="my-github-btn">
              <button onClick={handleClickMeteo} className="Github">
                <BsGithub className="logogitprojet" />
                <p className="fontgit">Webapp météo</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`grid-containerprojet ${isRotated ? "rotate" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="left-sideprojet">2020-2021</div>
          <div className="separatorprojet"></div>
          <div className="right-sideprojet">
            <h2 className="intituleprojet">Étudiant (Front-End/Back-End)</h2>
            <h3 className="fonctionprojet">
              Developpement d'une application web en PHP
            </h3>
            <p className="description">
              Projet de fin d'études (Conception d'une base de données,
              conception d'un site web récupérant les données des personnes
              s'incrivant via un formulaire).
            </p>
            <div className="stackprojet">
              <button className="Php">PHP</button>
              <button className="Html">HTML</button>
              <button className="phpmyadmin">phpMyAdmin</button>
              <button className="Mysql">MySQL</button>
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
