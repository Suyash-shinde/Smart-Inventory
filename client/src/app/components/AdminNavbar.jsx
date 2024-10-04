"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";
import React, { useEffect, useState,useRef } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ModeToggle } from "./ModeToggle";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

import {
  getCookie,
  parseCookie,
  getPropertyFromCookie,
} from "../utils/useCookie.js"
// import Toggle from "./Toggle"; 



export default function AdminNavbar() {
  const router = useRouter();
  const [isSideMenuOpen, setMenu] = useState(false);
  const [name, setName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef(null); // Sidebar ref initialization
  const navlinks = [
    {
      label: "Maintenance",
      link: "/Maintenance",
    },
    {
      label: "AddLab",
      link: "/addLab",
    },
  ];
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setMenu(false); // Close the sidebar if clicked outside
    }
  };
  useEffect(() => {
    let userCookie = getCookie("user");
    if (userCookie) {
      let parsed = parseCookie(userCookie).user;
      if (parsed) {
        let parsedName = getPropertyFromCookie(parsed, "name");
        if (parsedName) {
          setName(parsedName);
        }
      }
    }

    if (isSideMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
    };
  }, [isSideMenuOpen]);
  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };



function deleteAllCookies() {
  document.cookie.split(';').forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });
}


  const handleLogout = () => {
    // PURE CHATGPTEEEEEEEED
    // idk how dis works
    console.log("here");
    
    // document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    deleteAllCookies()
     setName("");
    // Optionally, redirect the user or update state
    // window.location.reload();
    router.push("/");
  };
  return (
    <main>
      <nav className="flex items-center justify-between h-20 px-8 py-8 ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href="/" className="font-mono text-4xl">
              <img src="/image.png" alt="logo" className="w-auto h-12" />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden text-gray-400 lg:block hover:text-black"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          {name && (
            <div className="relative">
              <span

                className="w-14 h-14 flex items-center justify-center bg-gray-300 rounded-full text-xl"
                onClick={handleDropdownToggle}
              >
                <div className=" text-4xl font-semibold">

                  {" "}
                  {name.charAt(0).toUpperCase()}
                </div>
              </span>
              {dropdownOpen && (

                <div className="absolute right-0 mt-3 flex w-60 flex-col gap-3 rounded-xl bg-slate-900 p-4 text-slate-100 shadow-lg">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center justify-center rounded-lg h-12 w-12 overflow-hidden border-2 border-slate-600">

                      {name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex gap-1 text-sm font-semibold">
                        <span>{name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-slate-500/30"></div>


                  <button className="flex justify-center gap-3 rounded-md bg-red-600 py-2 px-3 font-semibold hover:bg-red-500 focus:ring-2 focus:ring-red-400">
                    <div onClick={handleLogout}>Logout</div>
                  </button>
                  <ModeToggle />

                </div>
              )}
            </div>
          )}
        </div>
        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section
            ref={sidebarRef} // Sidebar ref assignment
            className="absolute top-0 left-0 z-50 flex flex-col w-56 h-screen gap-8 p-8 text-black bg-white"
          >
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.label}
              </Link>
            ))}
          </section>
        </div>
      </nav>
      <hr className="" />
    </main>
  );
}
