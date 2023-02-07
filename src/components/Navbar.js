import { HashLink } from "react-router-hash-link";

const Navbar = ({ footerNav }) => {
  return (
    <nav
      className={`container nav-container mx-auto flex justify-between  ${
        footerNav ? "mt-20" : "mt-10 "
      } uppercase`}
    >
      <div>
        <HashLink smooth to="#hero" className="link-item">
          {footerNav ? "Go To Top" : "Naymur Rahman"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-2">
        <li>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#project" className="link-item">
            Project
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contacts" className="link-item">
            Contacts
          </HashLink>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
