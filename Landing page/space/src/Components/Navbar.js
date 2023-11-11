import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import menu from "./Images/menu.webp";
import cross from "./Images/cross.webp";

export default function Navbar() {
  const mobNav = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".Navbar",
      {
        y: "-100%",
      },
      { y: 0, duration: 2 }
    );
  }, []);

  const handleMobNav = () => {
    window.scrollTo(0, 0);
    mobNav.current.classList.toggle("display-none");
    setTimeout(() => {
      mobNav.current.classList.toggle("leftToRightin");
    }, 100);
    document.body.classList.toggle("scrollNone");
  };
  const CloseMobNav = () => {
    mobNav.current.classList.remove("leftToRightin");
    setTimeout(() => {
      mobNav.current.classList.add("display-none");
    }, 1000);
    document.body.classList.remove("scrollNone");
  };
  return (
    <>
      <div ref={mobNav} className="MobNav display-none ">
        <button onClick={CloseMobNav} className="cross">
          <img src={cross} alt="cross"></img>
        </button>
        <ul>
          <li>Home</li>
          <li>Account</li>
          <li>Features</li>
          <li>Developers</li>
          <li>Pricing</li>
          <li>Support</li>
          <li>
            <button className="button">Get Started</button>
          </li>
        </ul>
      </div>
      <div className="NavbarWrapper">
        <section className="Navbar">
          <div className="logo">
            <h1>SPACED</h1>
          </div>
          <button onClick={handleMobNav} className="nav_bt">
            <img className="menu" src={menu} alt="menu"></img>
          </button>
          <div className="MainNav">
            <ul>
              <li>Home</li>
              <li>Account</li>
              <li>Features</li>
              <li>Developers</li>
              <li>Pricing</li>
              <li>Support</li>
              <li>
                <button className="button">Get Started</button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
