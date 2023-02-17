import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    projectTitle: "Tech Zone - Online E-commerce Store",
    description:
      "Tech Zone offers a dynamic, responsive UI with efficient data handling using Redux and Axios. The stylish design using Tailwind CSS provides a seamless browsing and checkout experience.",
    img1: "https://res.cloudinary.com/divxqgoph/image/upload/v1675769446/my-personal-portfolio/rsz_1img1_wdzhye.png",
    img2: "https://res.cloudinary.com/divxqgoph/image/upload/v1675769445/my-personal-portfolio/rsz_1img2_boufye.png",
    tools: [
      "React",
      "Redux",
      "Redux Thunk",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
    ],
    liveLink: "https://tech-zone-naymurrahaman.netlify.app",
    frontEndLink: "https://github.com/naymurrahmanshahed/tech-zone",
  },
  {
    id: 2,
    projectTitle: "Food Mania - Online Recipe Store",
    description:
      "Tech Mania is an online recipe store application designed for food enthusiasts who are looking for a hassle-free and convenient way to access and store their favorite recipes. The application is built with the latest frontend technologies to provide an exceptional user experience.",
    img1: "https://res.cloudinary.com/divxqgoph/image/upload/v1675781783/my-personal-portfolio/rsz_img1_q4wvcg.png",
    img2: "https://res.cloudinary.com/divxqgoph/image/upload/v1675781783/my-personal-portfolio/rsz_img2_xwkeig.png",
    tools: [
      "React",
      "Redux",
      "Redux Thunk",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
    ],
    liveLink: "https://golden-pony-f9f312.netlify.app",
    frontEndLink: "https://github.com/naymurrahmanshahed/food-mania",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto mt-20 2xl:mt-40">
      <div className="section-title">
        <SectionTitle title={"projects"} />
      </div>
      <div className="project-wrapper mt-20  2xl:mt-40 flex flex-col gap-20">
        {data.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
