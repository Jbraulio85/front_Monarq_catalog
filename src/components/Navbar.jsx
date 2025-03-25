import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false); // Cierra el menú cuando el usuario haga scroll
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
    <nav className="font-bold w-full text-lg shadow-md fixed top-0 left-0 right-0 z-50 bg-[#090f15]">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 relative">
        <Link to="/" className="hover:text-gray-500">
          <FontAwesomeIcon
            icon={faHome}
            className="text-xl sm:text-2xl ml-2 sm:ml-4"
          />
        </Link>

        <button onClick={handleGoBack} className="hover:text-gray-500">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-xl sm:text-2xl ml-4 sm:ml-6"
          />
        </button>

        <div className="w-full text-center md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Link
            to="/"
            className="font-castelar text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer hover:text-gray-500 transition duration-200"
          >
            Monarq
          </Link>
        </div>

        <div className="flex hover:text-gray-500 items-center gap-3 sm:gap-4 ml-auto">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 p-2 focus:outline-none bg-transparent border-none cursor-pointer" // Aquí añadimos cursor-pointer
          >
            <FontAwesomeIcon icon={faBars} className="text-xl sm:text-2xl" />
            <span className="hidden md:inline">MENU</span>
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "block opacity-100 max-h-screen" : "hidden opacity-0 max-h-0"
        }`}
      >
        <ul className="text-center">
          <li className="py-2">
            <Link
              to="/"
              onClick={handleClick}
              className="hover:text-gray-500 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/women"
              onClick={handleClick}
              className="hover:text-gray-500 cursor-pointer"
            >
              Damas
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/men"
              onClick={handleClick}
              className="hover:text-gray-500 cursor-pointer"
            >
              Caballeros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
