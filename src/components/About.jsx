import React from "react";
import Heading from "./Heading";
import Para from "./Para";
export default function About() {
  const textItem = ` I'm a passionate full stack developer based in India with a keen eye for design and a love for creating
            engaging user experiences. With a background in computer science and years of experience
            in web development, I strive to build beautiful and functional websites that leave a lasting impression.`;
  const openResume=()=> {
    window.open(
      "https://1drv.ms/b/c/eb477bf7bbb1c29f/EfrmSFb6WS1Mt8DZhjejk4wBImqnf18Su4ns8uQ_K5XStQ?e=cIMGlt"
    );
  }
  return (
    <section id="about">
      <Heading text={"About Me"} />
      <Para text={textItem} />
      <p>
        Aside from coding, I'm also a national-level basketball player. When I'm
        not immersed in development or exploring new technologies, you can find
        me on the court, or contributing to open-source projects, and
        occasionally stargazing on clear nights.
        <button className="resume-btn" onClick={openResume}>
          Resume
        </button>
      </p>
    </section>
  );
}
