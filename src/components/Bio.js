import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef);

  return (
    <div className="container mx-auto mt-8 2xl:mt-20 overflow-hidden">
      <p ref={bioRef}>
        I am a React developer with a passion for delivering high-quality web
        applications. Skilled in using latest technologies and a team player who
        strives for excellence through attention to detail.
      </p>
    </div>
  );
};

export default Bio;
