import React from "react";
import "./Profil.css";
import weather from "../../images/weatherapp.png";

export default function Profile() {
  return (
    <div className="grid-container">
      <div className="cardprofil">
        <div className="card-content">
          <div className="card-text">
            <h2>Application météo</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
          </div>
          <div className="card-image">
            <img src={weather} alt="Card" />
        </div>
      </div>
      <div className="cardprofil">
        <div className="card-content">
          <div className="card-text">
            <h2>Application météo</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
          </div>
          <div className="card-image">
            <img src={weather} alt="Card" />
        </div>
      </div>
      <div className="cardprofil">
        <div className="card-content">
          <div className="card-text">
            <h2>Application météo</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
          </div>
          <div className="card-image">
            <img src={weather} alt="Card" />
        </div>
      </div>
    </div>
  );
}
