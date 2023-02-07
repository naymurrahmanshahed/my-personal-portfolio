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
              <li key={skill.id} className="skill">
                <div className="flex items-baseline">
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
              <li key={skill.id} className="skill">
                <div className="flex items-baseline">
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
