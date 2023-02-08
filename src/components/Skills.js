import { useRef } from "react";
import { useSkillLineReveal, useSkillTextReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    skillTitle: "HTML",
  },
  {
    id: 2,
    skillTitle: "CSS",
  },
  {
    id: 3,
    skillTitle: "JavaScript",
  },
  {
    id: 4,
    skillTitle: "React",
  },
  {
    id: 5,
    skillTitle: "React-Router",
  },
  {
    id: 6,
    skillTitle: "Redux",
  },
  {
    id: 7,
    skillTitle: "Redux Toolkit",
  },
  {
    id: 8,
    skillTitle: "Tailwind CSS",
  },
  {
    id: 9,
    skillTitle: "GSAP",
  },
  {
    id: 10,
    skillTitle: "Firebase",
  },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);

  const skillItem2Ref = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);

  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="container mx-auto mt-20" id="skills">
      <div className="section-title">
        <SectionTitle title={"Skills"} />
      </div>
      <div className="skill-container grid grid-cols-2 gap-10 mt-10">
        <ul className="skill-left">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-count text-white/60">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-title ml-10">{skill.skillTitle}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skill-right">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-count text-white/60">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-title ml-10">{skill.skillTitle}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
