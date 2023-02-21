import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLinkItemReveal = (items) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
        delay: 2,
      }
    );
  }, [items]);
};

export const useHeroImgReveal = (item) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 2,
        ease: "power4.out",
        delay: 1,
      }
    );
  }, [item]);
};

export const useShutterLeftReveal = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: -500,
      },
      {
        x: 0,
        duration: 1,
        ease: "power4.out",
        delay: 1.5,
      }
    );
  }, [item]);
};
export const useShutterRightReveal = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: 500,
      },
      {
        x: 0,
        duration: 1,
        delay: 1.5,
        ease: "power4.out",
      }
    );
  }, [item]);
};

export const useBioReveal = (item) => {
  useEffect(() => {
    let el = item.current;

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1.5,
        delay: 2,
        ease: "power4.out",
      }
    );
  }, [item]);
};

export const useSocialReveal = (item) => {
  useEffect(() => {
    let el = item.current;
    gsap.fromTo(
      el,
      {
        x: -500,
      },
      {
        x: 0,
        duration: 1.5,
        delay: 2,
        ease: "power4.out",
      }
    );
  }, [item]);
};

export const useSectionTitleReveal = (item) => {
  useEffect(() => {
    let el = item.current;
    gsap.fromTo(
      el,
      {
        x: -500,
      },
      {
        x: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [item]);
};

export const useProjectLeftRightReveal = (items) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items]);
};

export const useFromControlReveal = (items) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 2,
        stagger: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items]);
};

export const useSkillLineReveal = (items) => {
  useEffect(() => {
    items.forEach((el) =>
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add("reveal");
          },
        },
      })
    );
  }, [items]);
};

export const useSkillTextReveal = (items) => {
  useEffect(() => {
    gsap.fromTo(
      items,
      { y: 200 },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: items,
        },
      }
    );
  }, [items]);
};
