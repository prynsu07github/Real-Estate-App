import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" bg-slate-200 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="text-slate-500 font-bold text-lg sm:text-2xl">
            Real<span className="text-slate-800">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-1 md:p-2 rounded-md flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent outline-none w-20 md:w-auto"
          />
          <FaSearch size={18} className="text-slate-800" />
        </form>
        <ul className="flex gap-5 items-center">
          <Link to='/'>
            <li className="hidden sm:inline text-slate-700">Home</li>
          </Link>
          <Link to='/about'>
            <li className="hidden sm:inline text-slate-700">About</li>
          </Link>
          <Link to='/sign-in'>
            <li className="bg-slate-500 text-slate-100 p-1  rounded-md font-bold hover:opacity-90 text-sm md:p-2">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
