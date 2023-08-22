import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the FaTimes icon
import { useState } from "react";
import card2 from "./pages/images/icons8-credit-card-94.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="flex p-4 md:p-2 bg-indigo-500  text-white   hover:bg-violet-600 items-center justify-between ">
        <div className="md:ml-7">
          <img
            src={card2}
            alt="card2"
            className="w-10 font-bold animate-spin transition duration-1000 rounded-full "
          />
          <span className="font-mono">Visa Card</span>
        </div>
        <h1 className="hidden md:block font-bold text-2xl font-mono capitalize">
          Crypto site
        </h1>

        {/* Show the bars icon if the mobile menu is closed */}
        {!mobileMenuOpen && (
          <h1
            className="absolute top-0 md:hidden right-5 mt-4 text-3xl text-white"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </h1>
        )}

        {/* Show the cross icon if the mobile menu is open */}
        {mobileMenuOpen && (
          <h1
            className="absolute md:hidden top-0 right-5 mt-4 text-3xl text-white"
            onClick={toggleMobileMenu}
          >
            <FaTimes />
          </h1>
        )}

        <nav className="hidden md:flex capitalize font-semibold justify-end list-none gap-4 p-4 mr-7 font-mono">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/nopage">Info</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
         
        </nav>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex capitalize font-semibold  flex-col gap-10 items-center justify-center pt-10 list-none text-white w-full bg-black mr-7 h-[100vh]">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/nopage">NoPage</Link>
          </li>
        </nav>
      )}
    </>
  );
};

export default Navbar;
