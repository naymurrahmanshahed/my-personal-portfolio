import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkItemReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);

  const linksRef = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
  ];
  useLinkItemReveal(linksRef);
  return (
    <nav
      className={`container nav-container mx-auto flex flex-col md:items-start md:gap-0 gap-10 items-center md:flex-row md:justify-between  ${
        footerNav ? "mt-20" : "mt-10 2xl:mt-20"
      } uppercase`}
    >
      <div>
        <HashLink smooth to="#hero" className="link-item" ref={link1Ref}>
          {footerNav ? "Go To Top" : "Naymur Rahman"}
        </HashLink>
      </div>
      <ul className="links flex md:flex-col flex-row  gap-2 md:gap-2 text-[0.7rem] md:text-[1.5rem]">
        <li>
          <HashLink smooth to="#home" className="link-item" ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item" ref={link3Ref}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#project" className="link-item" ref={link4Ref}>
            Project
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item" ref={link5Ref}>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contacts" className="link-item" ref={link6Ref}>
            Contacts
          </HashLink>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1KaATjjBdCLiKvjFGgkfghRmjU2-qy_EA/edit?usp=sharing&ouid=118393996409934603848&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
            className="link-item"
            ref={link7Ref}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
