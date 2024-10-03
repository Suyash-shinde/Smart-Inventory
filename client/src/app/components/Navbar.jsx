"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
} from "../utils/useCookie";

// import Toggle from "./Toggle";

export default function Navbar() {
  const router = useRouter();
  const [isSideMenuOpen, setMenu] = useState(false);
  const [name, setName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navlinks = [
    {
      labe: "Maintenance",
      link: "/Maintenance",
    },
    {
      labe: "Labs",
      link: "/Labs",
    },
    {
      labe: "Form",
      link: "/Form",
    },
    {
      labe: "Dashboard",
      link: "/Dashboard",
    },
    {
      labe: "AddLab",
      link: "/addLab",
    },
    {
      labe: "My Issues",
      link: "/userIssues",
    },
  ];

  useEffect(() => {
    let userCookie = getCookie("user");
    if (userCookie) {
      let parsed = parseCookie(userCookie).user;
      if (parsed) {
        let parsedName = getPropertyFromCookie(parsed, "name");
        if (parsedName) {
          console.log(parsedName);
          // setName(parsedName.charAt(0).toUpperCase());
          setName(parsedName);
        }
      }
    }
  }, []);
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
    router.push("/login");
  };
  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-8 h-20   ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href="/" className="text-4xl font-mono">
              <img src="/image.png" alt="logo" className="h-12 w-auto" />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block  text-gray-400 hover:text-black"
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
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>
      </nav>
      <hr className=" " />
    </main>
  );
}
