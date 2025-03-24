import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="font-bold w-full text-lg shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 relative">

        <Link to="/" className="hover:text-gray-900">
          <FontAwesomeIcon icon={faHome} className="text-xl sm:text-2xl ml-2 sm:ml-4" />
        </Link>

        <button onClick={handleGoBack} className="hover:text-gray-900">
          <FontAwesomeIcon icon={faArrowLeft} className="text-xl sm:text-2xl ml-4 sm:ml-6" />
        </button>

        <div className="w-full text-center md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Link to="/" className="font-castelar text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer hover:text-gray-500 transition duration-200">
            Monarq
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 p-2 focus:outline-none bg-transparent border-none"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl sm:text-2xl" />
            <span className="hidden md:inline">MENU</span>
          </button>
        </div>
      </div>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "block opacity-100 max-h-screen" : "hidden opacity-0 max-h-0"}`}>
        <ul className="text-center">
          <li className="py-2">
            <Link to="/" onClick={handleClick} className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link to="/women" onClick={handleClick} className="hover:text-gray-400">
              Damas
            </Link>
          </li>
          <li className="py-2">
            <Link to="/men" onClick={handleClick} className="hover:text-gray-400">
              Caballeros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
