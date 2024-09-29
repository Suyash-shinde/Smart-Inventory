import { useState, useEffect } from "react";

const AddLabs_DeviceForm = ({
  labNo,
  setLabNo,
  deviceType,
  setDeviceType,
  deviceCount,
  setDeviceCount,
  currentDeviceIndex,
  setCurrentDeviceIndex,
  uniqueID,
  setUniqueID,
  labInCharge,
  setLabInCharge,
  handleAddDevice,
}) => {
  const [isAdding, setIsAdding] = useState(false); // State to track if devices are being added

  useEffect(() => {
    if (currentDeviceIndex > deviceCount) {
      setIsAdding(false); // Stop adding if the current index exceeds the device count
    }
  }, [currentDeviceIndex, deviceCount]);

  useEffect(() => {
    // Reset the device index to 1 when device count changes
    setCurrentDeviceIndex(1);
  }, [deviceCount, setCurrentDeviceIndex]);

  const handleStartAdding = () => {
    // Start adding devices only if required fields are filled
    if (!deviceCount || !deviceType) return;
    setIsAdding(true); // Enable ID input for adding devices
  };


  return (
    <>
      {/* Dropdown for selecting lab number */}
      

      <div className="mb-4">
        <label className="block text-gray-700">Lab No.</label>
        <input
          type="text"
          className="w-full p-2 mt-2 border rounded"
          value={labNo}
          onChange={(e) => setLabNo(e.target.value)}
        />
      </div>

      {/* Dropdown for selecting device type */}
      <div className="mb-4">
        <label className="block text-gray-700">Select Device Type</label>
        <select
          className="w-full p-2 mt-2 border rounded"
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
        >
          <option value="" disabled>
            Select Device Type
          </option>
          <option value="Fan">Fan</option>
          <option value="Light">Light</option>
          <option value="Projector">Projector</option>
        </select>
      </div>

      {/* Input for lab in charge's name */}
      <div className="mb-4">
        <label className="block text-gray-700">Lab In Charge</label>
        <input
          type="text"
          className="w-full p-2 mt-2 border rounded"
          value={labInCharge}
          onChange={(e) => setLabInCharge(e.target.value)}
        />
      </div>

      {/* Input for the number of devices */}
      <div className="mb-4">
        <label className="block text-gray-700">Number of Devices</label>
        <input
          type="number"
          min="1"
          className="w-full p-2 mt-2 border rounded"
          value={deviceCount}
          onChange={(e) => {
            const value = e.target.value;
            // Allow only values of 1 or more, or an empty string
            if (value >= 1 || value === "") {
              setDeviceCount(value);
            }
          }}
        />
        <button
          onClick={handleStartAdding}
          className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
          disabled={deviceCount < 1} // Disable if deviceCount is less than 1
        >
          Start Adding Devices
        </button>
      </div>

      {/* Input for unique ID of each device */}
      {isAdding && currentDeviceIndex <= deviceCount && deviceCount > 0 && (
        <div className="mb-4">
          <label className="block text-gray-700">
            Enter Unique ID for {deviceType} {currentDeviceIndex}
          </label>
          <input
            type="text"
            className="w-full p-2 mt-2 border rounded"
            value={uniqueID}
            onChange={(e) => setUniqueID(e.target.value)}
          />
          <button
            onClick={handleAddDevice}
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
          >
            Add Device {currentDeviceIndex}
          </button>
        </div>
      )}
    </>
  );
};

export default AddLabs_DeviceForm;