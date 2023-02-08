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
    <div className="project grid grid-cols-5  overflow-hidden ">
      <div
        className="project-left  col-span-3 flex flex-col gap-10 "
        ref={projectLeftRef}
      >
        <span className=" text-[9rem] text-white/30 ">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="text-6xl uppercase leading-normal text-cyan-700">
          {project.projectTitle}
        </h3>
        <p className="text-white/75">{project.description}</p>
        <div className="project-btn flex gap-6">
          <a
            href={project.liveLink}
            className="px-12 py-7 rounded-full border border-white/20 inline-block  hover:bg-cyan-700/20 hover:border-cyan-700/20  "
            target="_blank"
            rel="noreferrer"
          >
            Live site
          </a>
          <a
            href={project.frontEndLink}
            className="px-12 py-7 rounded-full border border-white/20 inline-block  hover:bg-cyan-700/20 hover:border-cyan-700/20"
            target="_blank"
            rel="noreferrer"
          >
            Front-end Code
          </a>
        </div>
      </div>
      <div
        className="project-right col-span-2 justify-self-end"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
