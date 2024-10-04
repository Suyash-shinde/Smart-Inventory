"use client";
import { useRouter } from "next/navigation";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { Hero } from "./components/Hero";

export default function Home() {
  const router = useRouter();

  const handleAdminClick = () => {
    router.push("/login"); // Correct admin login route
  };

  const handleTechnicianClick = () => {
    router.push("/login/admin"); // Correct general login route
  };

  return (
    <div className="">
    <div className=" z-20 flex flex-col items-center h-screen bg-black border-4">
    <Hero/>
     
      <div className="py-20 text-3xl font-bold text-center text-white">
        Identify Your Role
      </div>
      <div className="flex items-center w-full justify-evenly">
        <div
          onClick={handleAdminClick}
          className="flex flex-col items-center justify-center w-56 h-56 text-center transition-colors duration-500 bg-white border shadow-md cursor-pointer group text-slate-800 hover:text-white border-slate-100 rounded-xl hover:bg-emerald-800"
        >
          <MdAdminPanelSettings
            size={100}
            className="text-black transition-colors duration-500 group-hover:text-white"
          />
          <div className="text-xl font-bold">User</div>
        </div>

        <div
          onClick={handleTechnicianClick}
          className="flex flex-col items-center justify-center w-56 h-56 text-center transition-colors duration-500 bg-white border shadow-md cursor-pointer group text-slate-800 hover:text-white border-slate-100 rounded-xl hover:bg-sky-800"
        >
          <FaUserGear
            size={100}
            className="text-black transition-colors duration-500 group-hover:text-white"
          />
          <div className="text-xl font-bold">Technician</div>
        </div>
      </div>
    
    </div>
    </div>
  );
}
