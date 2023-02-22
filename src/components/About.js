import React, { useRef } from "react";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/divxqgoph/image/upload/v1675747932/my-personal-portfolio/about-1_m79nny.jpg",
  img2: "https://res.cloudinary.com/divxqgoph/image/upload/v1675747932/my-personal-portfolio/about-2_pv2bvf.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutsRef = [aboutLeftRef, aboutRightRef];
  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(aboutsRef);
  return (
    <div className="container mx-auto mt-40 2xl:mt-40" id="about">
      <SectionTitle title={"About"} />
      <div className="about-container mt-20  grid grid-cols-1 xl:grid-cols-2 gap-10 overflow-hidden ">
        <div
          className="about-left justify-self-center xl:justify-self-start"
          ref={aboutLeftRef}
        ></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            I am a skilled React developer with a passion for creating
            user-friendly and efficient web applications. With several years of
            experience in HTML, CSS, JavaScript, React, and Redux, I have a
            strong understanding of front-end development and the ability to
            bring ideas to life through clean and well-designed code. <br />
            <br /> I am constantly learning and staying up to date with the
            latest web technologies. Whether working on a large-scale project or
            a smaller task, I always strive to deliver high-quality results in a
            timely manner.
          </p>
          <a
            href="https://docs.google.com/document/d/1KaATjjBdCLiKvjFGgkfghRmjU2-qy_EA/edit?usp=sharing&ouid=118393996409934603848&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
            className="md:inline-block flex justify-center mt-10 text-[1.3rem] uppercase py-8 px-14 border mx-auto border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
