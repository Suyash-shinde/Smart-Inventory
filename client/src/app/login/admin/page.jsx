import { MdAdminPanelSettings } from "react-icons/md";

const AdminLogin = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] md:flex-row overflow-hidden">
      <div className="flex items-center justify-center h-full bg-emerald-950 md:w-1/2">
        <div className="p-10">
          <MdAdminPanelSettings className="w-48 h-48 text-white" />
        </div>
      </div>
      <div className="flex items-center justify-center h-full bg-white md:w-1/2">
        <div className="w-full max-w-md p-6 space-y-10">
          <h2 className="text-4xl font-bold text-center">Login</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-gray-700">PRN Number</label>
              <input
                type="text"
                placeholder="Enter your PRN No"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <button className="w-full px-4 py-2 text-white rounded-lg bg-emerald-900 hover:bg-emerald-800 focus:outline-none">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;