"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {useTheme} from "@/context/ThemeContext";


const Header = () => {
    const {isDark, toggleTheme} = useTheme();
    //console.log(isDark)
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-400 transition";

  return (
    <header className={`w-full shadow-md transition-colors duration-300
        ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    `}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">MyWebsite</h1>

        {/* Navigation */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className={linkClass("/services")}>
              Services
            </Link>
          </li>
        </ul>
        <button onClick={toggleTheme}>
        {isDark ? "🌞" : "🌙"}
      </button>
      </nav>
      
    </header>
  );
};

export default Header;
