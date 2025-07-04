import Logo from "../assets/Logo.png";
import { FaInstagram, FaFacebook, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={Logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
         href="mailto:business.faizan@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <MdEmail />
        </a>
        {/* <a
          href="https://github.com/Dev-Farhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
