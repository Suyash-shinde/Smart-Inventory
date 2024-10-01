"use client";
import React, { useState } from "react";
import { loginRoute } from "../utils/APIroutes";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Page = () => {
  const router = useRouter();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleValidation = () => {
    const { prn, password } = user;
    if (prn === "" || password === "") {
      return false;
    }
    return true;
  };

  const sendData = async () => {
    const { prn, password } = user;
    return axios.post(
      loginRoute,
      {
        prn,
        password,
      },
      { withCredentials: true }
    );
  };
  const handleSignUp = () => {
    router.push("/signup");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before sending the request
    if (!handleValidation()) {
      toast.error("PRN and password are required!");
      return;
    }

    // Create the promise for sending data
    const sendPromise = sendData();

    toast.promise(sendPromise, {
      loading: "Logging in...",
      success: (data) => {
        if (data.data.status === false) {
          throw new Error(data.data.msg); // Reject the promise if login fails
        }
        return "Login successful! Redirecting...";
      },
      error: (err) => `Login failed: ${err.message}`,
    });

    try {
      const { data } = await sendPromise; // Wait for the data to be sent
      if (data.status === true) {
        // Redirect to dashboard if login is successful
        router.push("/Dashboard");
      }
    } catch (error) {
      // Handle error state here (optional, as toast.promise will show an error message)
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden md:flex-row">
      <div className="flex items-center justify-center h-full bg-emerald-800 md:w-1/2">
        <div className="p-10">
          <FaUserCircle className="w-48 h-48 text-white" />
        </div>
      </div>
      <div className="flex items-center justify-center h-full bg-white md:w-1/2">
        <div className="w-full max-w-md p-6 space-y-10">
          <h2 className="text-4xl font-bold text-center">Admin Login</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-gray-700">PRN Number</label>
              <input
                type="text"
                placeholder="Enter your PRN No"
                name="prn"
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <button
                className="w-full px-4 py-2 text-white rounded-lg bg-emerald-900 hover:bg-emerald-800 focus:outline-none"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <button
                className="text-emerald-600 hover:underline"
                onClick={() => handleSignUp()}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
