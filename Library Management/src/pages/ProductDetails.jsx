import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const product = location.state.product;

  const handleIssueBook = () => {
    alert("Book issued successfully");
  };

  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              className="w-full h-[400px] object-cover"
              src={`https://library-management-system-jc7v.onrender.com/public/images/uploads/${product.image[0]}`}
              alt={product.name}
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">
              By {product.author || "Unknown Author"}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{product.rating || "No rating"} / 5</span>
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-green-600">₹{product.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={handleIssueBook}
            >
              Issue Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
