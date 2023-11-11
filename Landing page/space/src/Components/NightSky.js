import React from "react";
import Img from "./Images/dt/marker.webp";
export default function NightSky() {
  return (
    <section className="nightSky">
      <div className="nightImg">
        <div className="marKerWrapper">
          <img src={Img} alt="Marker"></img>
        </div>
      </div>
      <div className="nightText">
        <span className="sm">The Night Sky</span>
        <h1 className="contentHeading">
          FINDING HAPINEES IS NOT THAT HARD IN MOBILE
        </h1>
        <p className="contentPar">
          Shared Windows Packages, Reseller Packages. Each Hosting Directory
          Categories has a list of plans. Each plan is accompanies by a short
          synopsis.
        </p>
        <p className="contentPar">
          At one shot, you would be able to sort these plans by any of the
          following factors - Price, rating, Web Space, Data Transfer. With such
          a high range of flexibility in filtering.
        </p>
        <button className="button">SEARCH IT</button>
      </div>
    </section>
  );
}
