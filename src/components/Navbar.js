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
    <na2
      className={`container nav-container mx-auto flex justify-between  ${
        footerNav ? "mt-20" : "mt-10 "
      } uppercase`}
    >
      <div>
        <HashLink smooth to="#hero" className="link-item" ref={link1Ref}>
          {footerNav ? "Go To Top" : "Naymur Rahman"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-2">
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
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="link-item"
            ref={link7Ref}
          >
            Resume
          </a>
        </li>
      </ul>
    </na2>
  );
};

export default Navbar;
