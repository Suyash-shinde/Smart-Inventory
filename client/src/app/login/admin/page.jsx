import { FaUserGear } from "react-icons/fa6";

const TechnicianLogin = () => {
  
  return (
    <div className="flex flex-col h-screen overflow-hidden md:flex-row">
      <div className="flex items-center justify-center h-full bg-sky-800 md:w-1/2">
        <div className="p-10">
          <FaUserGear className="w-48 h-48 text-white" />
        </div>
      </div>
      <div className="flex items-center justify-center h-full bg-white md:w-1/2">
        <div className="w-full max-w-md p-6 space-y-10">
          <h2 className="text-4xl font-bold text-center">Technician Login</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-gray-700">PRN Number</label>
              <input
                type="text"
                placeholder="Enter your PRN No."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <button className="w-full px-4 py-2 text-lg font-semibold text-white bg-sky-900 hover:bg-sky-800 focus:outline-none">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianLogin;
