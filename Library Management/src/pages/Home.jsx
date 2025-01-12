import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [products, setProducts] = useState([]);

  function getProduct() {
    axios
      .get("https://library-management-system-jc7v.onrender.com/api/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
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

      <main className="w-full min-h-screen bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              onClick={() => {
                navigate(`/productdetails`, {
                  state: {
                    product: product,
                  },
                });
              }}
            >
              <img
                src={`https://library-management-system-jc7v.onrender.com/public/images/uploads/${product.image[0]}`}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h1 className="text-xl font-bold text-blue-600 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-3">
                {product.description.split(" ").slice(0, 30).join(" ")}
                {product.description.split(" ").length > 30 ? "..." : ""}
              </p>
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < (product.rating || 0)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  ({product.rating || 0}/5)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-green-600 font-semibold">₹{product.price}</p>
                <p className="text-gray-700 italic">By {product.author}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
