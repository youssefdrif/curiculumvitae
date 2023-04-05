import React from 'react'
import "./Experience.css";
import weather from "../../images/weatherapp.png";

export default function Experience() {
  return (
    <div className="grid-containerexp">
      <div className="cardprofilexp">
        <div className="card-content">
          <div className="card-textexp">
            <h2>Application ReactJS</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
          </div>
          <div className="card-imageexp">
            <img src={weather} alt="Card" />
        </div>
      </div>
      <div className="cardprofilexp">
        <div className="card-content">
          <div className="card-textexp">
            <h2>Application PHP</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
          </div>
          <div className="card-imageexp">
            <img src={weather} alt="Card" />
        </div>
      </div>
    </div>
  )
}
