import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="font-bold text-lg mt-6 shadow-md py-4 relative">
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://wa.me/43851190"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://www.instagram.com/monarq_gt/?igsh=dG54YmR6ZHZ6ZmJm#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p className="text-center text-sm mt-2">
        © Monarq {year}
        <span className="hidden sm:inline">
          {" "}
          - Todos los derechos reservados
        </span>
      </p>

      <p className="absolute bottom-2 right-2 text-xs text-gray-700">
        Powered by ShuCode
      </p>
    </footer>
  );
};
