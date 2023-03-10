import { useRef } from "react";
import { useProjectLeftRightReveal } from "../hooks/gsap";

import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectLeftRef = useRef(null);
  const projectRightRef = useRef(null);

  const projectsRef = [projectLeftRef, projectRightRef];

  useHoverEffect(projectRightRef, project.img1, project.img2);
  useProjectLeftRightReveal(projectsRef);
  return (
    <div className="project grid grid-cols-1 xl:grid-cols-5   overflow-hidden ">
      <div
        className="project-left  col-span-3 flex flex-col gap-10 "
        ref={projectLeftRef}
      >
        <span className=" md:text-[9rem] text-[6rem]  text-white/30 ">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="md:text-6xl text-5xl uppercase leading-normal text-cyan-700">
          {project.projectTitle}
        </h3>
        <p className="text-white/75">{project.description}</p>
        <div className="project-btn flex-col flex gap-5 md:flex-row md:gap-6 mb-10">
          <a
            href={project.liveLink}
            className="px-12 py-7 text-[1.3rem] text-center rounded-full border border-white/20 inline-block  hover:bg-cyan-700/20 hover:border-cyan-700/20  "
            target="_blank"
            rel="noreferrer"
          >
            Live site
          </a>
          <a
            href={project.frontEndLink}
            className="px-12 py-7 text-[1.3rem] text-center rounded-full border border-white/20 inline-block  hover:bg-cyan-700/20 hover:border-cyan-700/20 "
            target="_blank"
            rel="noreferrer"
          >
            Front-end Code
          </a>
        </div>
      </div>
      <div
        className="project-right  col-span-2 justify-self-center xl:justify-self-end"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
