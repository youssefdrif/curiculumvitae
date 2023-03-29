import React from "react";
import img1 from "../../images/img1.jpg";
import "./Home.css";
import { BsGithub, BsLinkedin} from "react-icons/bs";
import { MdLocationPin, MdPending } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import {IoCalendar} from "react-icons/io5"
import { AiFillPhone } from "react-icons/ai";

export default function Home() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  return (
    <div className="GridContainer">
      <div className="card">
        <div className="Grid" xs={2}>
          <img className="maphoto" src={img1} alt="maphoto" />
        </div>
        <div className="Grid2" xs={2}>
          <p className="font">
            DRIF Youssef
            <br />
            Developpeur Front-End
          </p>
          <div className="Gridlogo">
          <BsGithub onClick={handleClick} className="logogit" />
          <BsLinkedin className="logolinkedin" />
          </div>
        </div>
      </div>
      <div className="Grid3" xs={2}>
        <p className="fontbold">
            Bonjour! Je suis Drif Youssef,
        </p>
        <p className="font">
          actuellement diplômé d'une licence
          professionnelle en cybersécurité je souhaiterai approfondir mon
          experience en développement web.
        </p>
        <p className="font">
          Durant cette alternance j'ai développé une application web codé en
          ReactJS et effectué des tests avec Jest.
        </p>
        <div className="Grid4" xs={2}>
          <p className="font2">
            <IoCalendar className="icons"/> 23 ans
          </p>
          <p className="font2">
            <MdLocationPin className="icons"/>
            Alès
          </p>
          <p className="font2">
            <MdPending className="icons"/>
            En recherche d'emploi
          </p>
          <p className="font2">
            <FaCarAlt className="icons"/> En cours d'optention
          </p>
          <p className="font2">
            <AiFillPhone className="icons"/>
            +33782970537
          </p>
        </div>
        <div className="Grid5" xs={2}>
          <button className="button1">Télécharger mon CV</button>
          <button className="button1">Voir mes projets</button>
        </div>
      </div>
    </div>
  );
}
