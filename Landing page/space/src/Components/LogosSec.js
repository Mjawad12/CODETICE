import React from "react";
import logo1 from "./Images/Logo/logo1.webp";
import logo2 from "./Images/Logo/logo2.webp";
import logo3 from "./Images/Logo/logo3.webp";
import logo4 from "./Images/Logo/logo4.webp";
export default function LogosSec() {
  return (
    <div className="logoSecWrapper">
      <section className="logoSec">
        <img src={logo1} alt="Company logo"></img>
        <img src={logo2} alt="Company logo"></img>
        <img src={logo3} alt="Company logo"></img>
        <img src={logo4} alt="Company logo"></img>
      </section>
    </div>
  );
}
