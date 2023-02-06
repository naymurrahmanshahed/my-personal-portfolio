import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
const data = {
  img1: "https://res.cloudinary.com/divxqgoph/image/upload/v1675703278/my-personal-portfolio/heroimage1_h51oq1.png",
  img2: "https://res.cloudinary.com/divxqgoph/image/upload/v1675703279/my-personal-portfolio/heroimage2_yhmh6q.png",
};

const Hero = () => {
  const heroImgRef = useRef(null);
  useHoverEffect(heroImgRef, data.img1, data.img2);
  return (
    <div className="hero container mx-auto mt-8  flex  justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImgRef}></div>
      <div className="shutter shutter-left overflow-hidden tracking-widest ">
        <h1>Reactjs</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
