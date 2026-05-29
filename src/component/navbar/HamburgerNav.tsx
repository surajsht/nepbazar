import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart, FaUser } from "react-icons/fa";

const HamburgerNav = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsNavOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="lg:hidden container mx-auto px-4">
      <div className="flex items-center justify-between gap-6 py-4">
        <button onClick={() => setIsNavOpen((prev) => !prev)} ref={buttonRef}>
          <FaBars size={20} />
        </button>

        <h1 className="font-semibold text-2xl"> NepBazar </h1>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between gap-3">
            <button>
              <IoSearch size={22} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <IoCartOutline size={22} />
              <span className="absolute top-[-12px] right-[-8px] h-4 w-4 bg-black text-white rounded-full flex items-center justify-center text-xs">
                0
              </span>
            </div>

            <div className="relative">
              <FaRegHeart size={22} />
              <span className="absolute top-[-12px] right-[-8px] h-4 w-4 bg-black text-white rounded-full flex items-center justify-center text-xs">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 h-full w-full sm:w-60 shadow-xl p-6 bg-white z-10 ${isNavOpen ? "right-0" : "right-[-100%] sm:right-[-240px]"} transition-all duration-500 flex flex-col items-start justify-between`}
        ref={navRef}
      >
        <div>
          <button className="mb-8" onClick={() => setIsNavOpen(false)}>
            close
          </button>

          <ul className="space-y-4">
            <li> Home </li>
            <li> Shop </li>
            <li> Men </li>
            <li> Women </li>
            <li> New Arrival </li>
            <li> Deals </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <FaUser size={16} />
          <span> Raj </span>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerNav;
