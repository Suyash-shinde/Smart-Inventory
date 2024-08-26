"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { RegisterRoute } from "../utils/APIroutes";
const page = () => {
  const [user, setUser] = useState({
    name: "",
    prn: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((pv) => ({ ...pv, [e.target.name]: e.target.value }));
  };
  const handleValidation = () => {
    const { name, prn, email, password } = user; // Destructure user state
    if (email === "" || name === "" || prn === "" || password === "") {
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, prn, email, password } = user;
    if (handleValidation()) {
      const { data } = await axios.post(RegisterRoute, {
        email,
        name,
        prn,
        password,
      });
      if (data.status === false) {
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    }
  };

  return (
    <div className="mt-20 flex min-h-screen items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27rem]">
        <h1 className="text-2xl font-bold text-center mb-4">Let's connect!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => handleChange(e)}
              placeholder="name"
              className="shadow-md rounded-md w-full  px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="prn"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              PRN
            </label>
            <input
              type="text"
              name="prn"
              id="prn"
              placeholder="Enter PRN"
              onChange={(e) => handleChange(e)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email id
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              onChange={(e) => handleChange(e)}
              className="shadow-md rounded-md w-full  px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => handleChange(e)}
              className="shadow-md rounded-md w-full  px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="mb-4"></div>
          <div className="flex items-center justify-end mb-4">
            <Link href="/login" className="text-xs text-black">
              Login with Account
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
