import hoverEffect from "hover-effect";
import { useEffect } from "react";

const data = {
  cloud:
    "https://res.cloudinary.com/divxqgoph/image/upload/v1675703519/my-personal-portfolio/cloud_uwnyen.png",
};
export const useHoverEffect = (el, img1, img2) => {
  useEffect(() => {
    new hoverEffect({
      parent: el.current,
      image1: img1,
      image2: img2,
      displacementImage: data.cloud,
      intensity: 0.3,
    });
  }, [el, img1, img2]);
};
