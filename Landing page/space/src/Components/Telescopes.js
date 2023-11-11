import React from "react";
import camp from "./Images/logos/camp.webp";
import camera from "./Images/logos/camera.webp";
import book from "./Images/logos/book.webp";
import pointer from "./Images/logos/pointer.webp";
import mobile from "./Images/logos/mobile.webp";
import world from "./Images/logos/world.webp";
export default function Telescopes() {
  const data = [
    {
      name: "Pictures in the Sky",
      description:
        "Have you ever finally just gave in to the temptation and read your horoscope in the newspaper on Sunday morning? Sure, we all have.",
      img: camp,
    },
    {
      name: "How To Look Up",
      description:
        "Buckle up for a cosmic ride! Grab the paper, hit the horoscopes, and let the asteroids unveil your Sunday destiny. 🚀✨",
      img: camera,
    },
    {
      name: "Asteroids",
      description:
        "Ever given in to the Sunday morning temptation of checking your asteroid horoscope in the newspaper? We all have.",
      img: world,
    },
    {
      name: "Space The Final Frontier",
      description:
        "Embark on a cosmic journey, explore galaxies, and transcend earthly limits for an adventure beyond imagination. 🚀🌌",
      img: book,
    },
    {
      name: "The Glossary Of Telescopes",
      description:
        "Explore the Telescope Glossary—a cosmic lexicon of lenses, mirrors, and stargazing essentials. Decode the universe, one optic at a time.",
      img: pointer,
    },
    {
      name: "Dude You Re Getting A Telescope",
      description:
        "Dude, you're getting a telescope! Prepare for a stellar journey, unlocking the mysteries of the cosmos through your own lens.",
      img: mobile,
    },
  ];
  return (
    <section className="telescope">
      <div className="telescopeWrapper">
        <div className="text-tel">
          <span className="sm">The Glossary of Telescopes</span>
          <h1 className="contentHeading">EXPERIENCE THE EXTRAORDINARY</h1>
          <p className="contentPar">
            Have yo ever finally just gave in to the temptation and read your
            horoscope in the newspaper on Sunday morning ? Sure, we all have.
            For most of us, it's a curiosity.
          </p>
        </div>
        <div className="points">
          {data &&
            data.map((it) => {
              return (
                <>
                  <div key={it.name} className="point">
                    <img src={it.img} alt={it.name}></img>
                    <div className="pointText">
                      <h3> {it.name}</h3>
                      <p> {it.description}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
}
