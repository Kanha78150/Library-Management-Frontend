import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signup");
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Library System</div>

        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:text-blue-200">
            Home
          </a>
          <a href="/books" className="text-white hover:text-blue-200">
            Books
          </a>
          <a href="/about" className="text-white hover:text-blue-200">
            About
          </a>
          <a href="/contact" className="text-white hover:text-blue-200">
            Contact
          </a>
          <button
            onClick={handleLogout}
            className="text-white hover:text-blue-200 cursor-pointer"
          >
            Logout
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4 space-y-4">
          <a href="/" className="block hover:text-blue-200">
            Home
          </a>
          <a href="/books" className="block hover:text-blue-200">
            Books
          </a>
          <a href="/about" className="block hover:text-blue-200">
            About
          </a>
          <a href="/contact" className="block hover:text-blue-200">
            Contact
          </a>
          <button
            onClick={handleLogout}
            className="block hover:text-blue-200 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Home;
