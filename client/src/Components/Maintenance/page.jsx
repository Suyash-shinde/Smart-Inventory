"use client";
import { IoSearch } from "react-icons/io5";

const Maintenance = () => {
  const Options = {
    device: ["Device", "Computer", "Projector", "Fan"],
    status: ["Status", "Pending", "Ongoing", "Completed"],
  };

  return (
    <div className="w-screen h-screen p-2">
      <div className="flex items-center justify-center w-full h-12 bg-emerald-500">
        <h1 className="text-2xl font-bold text-white">Maintenance</h1>
      </div>
      <div className="w-full h-full bg-cyan-100">
        <div className="flex items-center justify-center">
          <input
            type="search"
            placeholder="Search"
            className="w-full px-2 py-2 mx-3 mt-3 border border-gray-300 rounded-md focus:outline-none bg-cyan-100 focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="flex items-center w-full h-20 px-4 space-x-4 border">
          <div className="flex flex-col w-full h-full py-2 space-y-2">
            <div className="flex justify-around">
              <label htmlFor="date-input" className="w-1/4 pl-2">
                Date:
              </label>
              <input
                type="date"
                id="date-input"
                className="w-3/4 bg-white rounded-md"
              />
            </div>

            <div className="flex h-full">
              <div className="flex justify-between w-full h-full space-x-3">
                <select
                  name="device-type"
                  id="device-type"
                  className="w-1/2 pl-1 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {Options.device.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  name="maintenance-status"
                  id="maintenance-status"
                  className="w-1/2 pl-1 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {Options.status.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button className="p-3 bg-white rounded-md w-fit">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
