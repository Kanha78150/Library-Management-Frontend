import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, username, email, password);
    axios
      .post("https://library-management-system-jc7v.onrender.com/api/signup", {
        name,
        username,
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="h-screen flex items-center justify-center bg-gray-100">
      <form
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Sign Up
        </h1>

        <div className="my-4">
          <label htmlFor="name" className="block text-gray-600 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="my-4">
          <label htmlFor="username" className="block text-gray-600 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="my-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="my-4">
          <label htmlFor="password" className="block text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button className="w-full bg-blue-500 text-white px-4 py-3 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
          Sign Up
        </button>
      </form>
    </main>
  );
}

export default SignUp;
