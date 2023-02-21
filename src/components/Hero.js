import { useRef } from "react";
import {
  useHeroImgReveal,
  useShutterLeftReveal,
  useShutterRightReveal,
} from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";
const data = {
  img1: "https://res.cloudinary.com/divxqgoph/image/upload/v1675703278/my-personal-portfolio/heroimage1_h51oq1.png",
  img2: "https://res.cloudinary.com/divxqgoph/image/upload/v1675703279/my-personal-portfolio/heroimage2_yhmh6q.png",
};

const Hero = () => {
  const heroImgRef = useRef(null);
  const leftShutterRef = useRef(null);
  const rightShutterRef = useRef(null);

  useHoverEffect(heroImgRef, data.img1, data.img2);
  useHeroImgReveal(heroImgRef);
  useShutterLeftReveal(leftShutterRef);
  useShutterRightReveal(rightShutterRef);
  return (
    <div
      className="hero container mx-auto mt-8 2xl:mt-20  flex  justify-center items-center overflow-hidden"
      id="hero"
    >
      <div className="hero-img" ref={heroImgRef}></div>
      <div
        className="shutter shutter-left overflow-hidden tracking-widest "
        ref={leftShutterRef}
      >
        <h1>Reactjs</h1>
      </div>
      <div
        className="shutter shutter-right overflow-hidden"
        ref={rightShutterRef}
      >
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
