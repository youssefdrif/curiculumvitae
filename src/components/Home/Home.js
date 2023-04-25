import React from "react";
import PORTRAIT from "../../images/PORTRAIT.jpg";
import "./Home.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdLocationPin, MdPending } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";

export default function Home() {
  const PDFfile = "http://localhost:3000/CV_Youssef_Drif.pdf";
  const downloadPDF = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const handleClickProjets = () => {
    window.location.assign("/profil");
  };

  const handleClickGitHub = () => {
    window.open("https://github.com/youssefdrif", "_blank") ||
      window.location.replace("https://github.com/youssefdrif");
  };

  const handleClickLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/youssef-drif-67927a239/",
      "_blank"
    ) ||
      window.location.replace(
        "https://www.linkedin.com/in/youssef-drif-67927a239/"
      );
  };

  return (
    <div className="GridContainer">
      <div className="card">
        <div className="Grid" xs={2}>
          <img
            className="maphoto"
            loading="lazy"
            src={PORTRAIT}
            alt="maphoto"
          />
        </div>
        <div className="Grid2" xs={2}>
          <p className="fonth">DRIF Youssef</p>
          <p className="font">Developpeur<br/> Front-End</p>
          <div className="Gridlogo">
            <BsGithub onClick={handleClickGitHub} className="logogit" />
            <BsLinkedin
              onClick={handleClickLinkedin}
              className="logolinkedin"
            />
          </div>
        </div>
      </div>
      <div className="Grid3" xs={2}>
        <p className="fontbold">
          <span>Bonjour!</span> <span>Je suis</span> <span>Drif Youssef,</span>
        </p>
        <p className="font">
          actuellement diplômé d'une licence professionnelle en cybersécurité{" "}
          <br />
          je souhaiterai approfondir mon experience en développement web.
        </p>
        <p className="font">
          Durant cette alternance j'ai développé une application web codé en
          ReactJS et effectué des tests avec Jest.
        </p>
        <div className="Grid4" xs={2}>
          <div className="containerInfos">
            <IoCalendar className="icons" />
            <p className="font2">23 ans</p>
          </div>
          <div className="containerInfos">
            <MdLocationPin className="icons" />
            <p className="font2">Alès, 30100</p>
          </div>
          <div className="containerInfos">
            <AiFillPhone className="icons" />
            <p className="font2">+33782970537</p>
          </div>
        </div>
        <div className="Grid5" xs={2}>
          <div className="containerInfos">
            <MdPending className="icons" />
            <p className="font2">En recherche d'un emploi en alternance</p>
          </div>
          <div className="containerInfos">
            <FaCarAlt className="icons" />
            <p className="font2">En cours d'obtention</p>
          </div>
        </div>
        <div className="Grid5" xs={2}>
          <button
            onClick={() => {
              downloadPDF(PDFfile);
            }}
            className="button1"
          >
            Télécharger mon CV
          </button>
          <button onClick={handleClickProjets} className="button1">
            Voir mes projets
          </button>
        </div>
      </div>
    </div>
  );
}
