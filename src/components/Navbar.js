import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav
      className="container nav-container mx-auto flex justify-between text-1.5rem
    mt-8  uppercase"
    >
      <div>
        <HashLink smooth to="#home" className="link-item ">
          Naymur Rahman
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
