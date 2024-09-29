"use client";
import { useEffect } from "react";

const MaintenanceModal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
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
      </div>
    </div>
  );
};

export default MaintenanceModal;