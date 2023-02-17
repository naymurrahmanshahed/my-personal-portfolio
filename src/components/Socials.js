import { useRef } from "react";
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: <BsFacebook />,
    url: "https://www.facebook.com/naymurrahmanshahed96/",
  },
  { id: 2, title: <BsTwitter />, url: "https://twitter.com/shahed285" },
  { id: 3, title: <BsGithub />, url: "https://github.com/naymurrahmanshahed" },
  {
    id: 4,
    title: <BsLinkedin />,
    url: "https://www.linkedin.com/in/naymur-rahman-46024a264/",
  },
  {
    id: 5,
    title: <SiLeetcode />,
    url: "https://leetcode.com/naymurrahmanshahed/",
  },
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef);
  return (
    <div
      className="flex flex-col gap-10 fixed left-2 text-white/50 bottom-2 bg-black/30 p-3 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          className="hover:text-cyan-700 duration-500"
          target="_blank"
          rel="noreferrer"
          key={social.id}
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
