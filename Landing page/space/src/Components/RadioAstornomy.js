import React from "react";
import moon from "./Images/dt/moon.webp";
import man from "./Images/dt/man.webp";
export default function RadioAstornomy() {
  return (
    <section className="radio">
      <div className="radioText">
        <span className="sm">Radio Astronomy</span>
        <h1 className="contentHeading">See More Than Your Eye Does</h1>
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
        <button className="button">START NOW</button>
      </div>
      <div className="RadioImg">
        <img className="moonImg" src={moon} alt=" moon"></img>
        <img className="manImg" src={man} alt=" moon"></img>
      </div>
    </section>
  );
}
