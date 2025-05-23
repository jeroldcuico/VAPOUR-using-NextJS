"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeMode from "./ThemeMode";
import { Input } from "../ui/input";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white w-full md:w-auto text-center md:text-left">
          <Link href="/">
            <span className="text-xl font-bold">Vapour</span>{" "}
          </Link>
        </div>
        <div
          className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent px-6 md:px-0 py-4 md:py-0 transition-all ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xs"
            />
            <Link href={"/"} className="text-gray-800 dark:text-white">Home</Link>
            <Link href={"/games"}  className="text-gray-800 dark:text-white">Library</Link>
            <Link href={"/categories/stores"} className="text-gray-800 dark:text-white">Store</Link>
            <Link href={"/categories/developers"} className="text-gray-800 dark:text-white">Developers</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {ThemeMode()}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 dark:text-white"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
