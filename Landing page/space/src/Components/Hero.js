import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Linear } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import spark from "./Images/spark.webp";
import bt from "./Images/homebt2.webp";
export default function Hero() {
  const t1 = useRef("");
  const t2 = useRef("");
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.context(() => {
      t1.current = gsap
        .timeline({ repeat: -1 })
        .fromTo(
          ".spark",
          { x: "1000%", y: "-500%" },
          {
            x: `-100%`,
            y: "500",
            duration: 5,
            ease: Linear.easeNone,
          },
          0
        )
        .fromTo(
          ".spark2",
          { x: "1000%", y: "-300%" },
          {
            x: `-100%`,
            y: "800",
            duration: 5,
            ease: Linear.easeNone,
          }
        )
        .fromTo(
          ".spark3",
          { x: "-100%", y: "-300%" },
          {
            x: `1000%`,
            y: "800",
            duration: 4,
            ease: Linear.easeNone,
          }
        );
    });
  }, []);
  useEffect(() => {
    gsap.context(() => {
      t2.current = gsap
        .timeline()
        .fromTo(
          ".btImg",
          { y: "100%", opacity: 0 },
          { duration: 2, y: 0, opacity: 1 }
        )
        .fromTo(
          ".heroText",
          { x: "-200%", opacity: 0 },
          { duration: 1, x: 0, opacity: 1 }
        )
        .fromTo(
          [".bt"],
          { x: "-1000%" },
          { duration: 1, x: 0, stagger: { amount: 0.55 } }
        );
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".heroDiv",
      { backgroundPositionY: 13 },
      {
        backgroundPositionY: 50,

        scrollTrigger: {
          trigger: ".hero",
          start: "center center",
          end: "bottom center",
          markers: false,
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section className="hero">
      <div className="heroDiv">
        <img src={spark} alt="Spark" className="sp spark"></img>
        <img src={spark} alt="Spark" className="sp spark2"></img>
        <img src={spark} alt="Spark" className="sp spark3"></img>
        <div className="bottomImg">
          <div className="heroContent">
            <div className="text_wrapper">
              <div className="heroText">
                <p>The Night Sky</p>
                <h1>Beyond The Naked Eye</h1>
              </div>
              <div className="Hero_btnDiv">
                <button className="bt button">GET STARTED</button>
                <button className="bt button2">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
        <img className="button" src={bt} alt="bt-img"></img>
      </div>
    </section>
  );
}
