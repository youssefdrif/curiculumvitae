import React from "react";
import "./Profil.css";
import weather from "../../images/weatherapp.png";

export default function Profile() {
  return (
    <div class="grid-container">
      <div class="cardprofil">
        <div class="card-content">
          <div class="card-text">
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              aliquam euismod ex, eget convallis risus tempus vel.
            </p>
          </div>
          <div class="card-image">
            <img src={weather} alt="Card" />
          </div>
        </div>
      </div>
    </div>
  );
}
