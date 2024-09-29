"use client";
import { useEffect, useState } from "react";
import { getLabPost } from "../utils/APIpost";
import MaintainanceLayout from "./MaintainanceLayout";
const MaintenanceModal = ({ isOpen, onClose, title, children, issueData }) => {
  const [lab,setLab] = useState({});
  const [loading, setLoading] = useState(true); 
  const getData = async()=>{

    try {
      const {data}= await getLabPost({labNo:issueData.labNo});
      console.log("number", issueData);
      setLab(data.data);  // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching lab data:", error);
    } finally {
      setLoading(false);  // Stop loading once data is fetched (or failed)
    }

  }
  useEffect(() => {
    console.log("lab", issueData)
    getData();
    console.log(lab);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-backdrop")) {
      onClose();
    }
  };

  if (loading) {
    return <div className='font-extrabold'>Loading...</div>;  // Display loading message or spinner
  }

  if (!lab) {
    return <div>No data available</div>;  // If no lab data is fetched or null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal-backdrop"
      onClick={handleClickOutside}
    >
      <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <div className="text-gray-700">{children}</div>
        <div >
          <MaintainanceLayout issueDevice={issueData.deviceId} data={lab}></MaintainanceLayout>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceModal;