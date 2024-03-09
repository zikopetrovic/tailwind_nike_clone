import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x absolute py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((element) => (
            <li key={element.label}>
              <a
                href={element.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {element.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
