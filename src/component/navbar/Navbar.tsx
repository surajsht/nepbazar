import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="hidden lg:block container mx-auto px-4">
      <div className="flex items-center justify-between py-6">
        <h1 className="font-semibold text-2xl"> NepBazar </h1>

        <ul className="flex items-center justify-between gap-8">
          <li> Home </li>
          <li> Shop </li>
          <li> Men </li>
          <li> Women </li>
          <li> New Arrival </li>
          <li> Deals </li>
        </ul>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative">
              <FaRegHeart size={18} />
              <span className="absolute top-[-12px] right-[-8px] h-4 w-4 bg-black text-white rounded-full flex items-center justify-center text-xs">
                0
              </span>
            </div>

            <div className="relative">
              <IoCartOutline size={22} />
              <span className="absolute top-[-12px] right-[-8px] h-4 w-4 bg-black text-white rounded-full flex items-center justify-center text-xs">
                0
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button>
              <FaUser size={20} />
            </button>

            <button>
              <IoSearch size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
