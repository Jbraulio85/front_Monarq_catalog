import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="font-bold text-lg mt-6 shadow-md bg-black text-white py-4">
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://instagram.com/monarq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p className="text-center text-sm mt-2">© Monarq {year}</p>
    </footer>
  );
};
