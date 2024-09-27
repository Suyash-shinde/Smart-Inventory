'use client'
import { useEffect, useState } from "react";
import AddLabs_DeviceForm from "../components/AddLabDeviceForm.jsx";
import AddLabs_DeviceList from "../components/AddLabDeviceList.jsx";

const AddLabs = () => {
  // State to manage lab number, device type, count, unique ID, and lab in charge
  const [labNo, setLabNo] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [deviceCount, setDeviceCount] = useState("");
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState(1);
  const [uniqueID, setUniqueID] = useState("");
  const [labInCharge, setLabInCharge] = useState("");

  // State to store the list of devices categorized by type
  const [deviceList, setDeviceList] = useState({
    Fan: [],
    Light: [],
    Projector: [],
    Computer: [],
  });

  const [devices, setDevices] = useState([]);
  // Function to reset the form fields and device list
  const resetForm = () => {
    setLabNo("");
    setDeviceType("");
    setDeviceCount("");
    setCurrentDeviceIndex(1);
    setUniqueID("");
    setDeviceList({
      Fan: [],
      Light: [],
      Projector: [],
      Computer:[],
    });
  };const allDevices = [
    ...deviceList.Fan,
    ...deviceList.Light,
    ...deviceList.Projector,
    ...deviceList.Computer,
  ];



  const handleAddPC=(e)=>{
    console.log(e);
    const newDevice = {
      id: e.uniqueID,
      labNo,
      deviceType:"Computer",
      position:e.pos,
    };

    console.log(newDevice);
    setDeviceList((prevList) => ({
      ...prevList,
      ["Computer"]: [...prevList["Computer"], newDevice],
    }));
    console.log(deviceList);
  }
  // Function to add a new device to the device list
  const handleAddDevice = () => {
    // Ensure all necessary fields are filled before adding
    if (!labNo || !deviceType || !uniqueID ) return;

    // Create a new device object
    const newDevice = {
      id: uniqueID,
      labNo,
      deviceType,
      pos:null,
       // Include the lab in charge information
    };
    console.log(deviceList)
    // Update the device list with the new device
    setDeviceList((prevList) => ({
      ...prevList,
      [deviceType]: [...prevList[deviceType], newDevice],
    }));

    // Clear the unique ID input and increment the current device index
    setUniqueID("");
    setCurrentDeviceIndex((prev) => prev + 1);
  };
  const createLab=()=>{
    //fix this
    setDevices(allDevices);
    // deviceList.Fan.forEach(device => {
    //   setDevices([...devices,device])
    // });
    // deviceList.Light.forEach(device => {
    //   setDevices([...devices,device])
    // });
    // deviceList.Projector.forEach(device => {
    //   setDevices([...devices,device])
    // });
    // deviceList.Computer.forEach(device => {
    //   setDevices([...devices,device])
    // });
  }
  useEffect(()=>{
    console.log(devices);
  },[devices])
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="p-3 mb-6 text-2xl font-bold text-center text-white bg-blue-800">
        Add Devices to Lab
      </h1>
      {/* Render the device form and pass relevant state and handlers */}
      <AddLabs_DeviceForm
        labNo={labNo}
        setLabNo={setLabNo}
        deviceType={deviceType}
        setDeviceType={setDeviceType}
        deviceCount={deviceCount}
        setDeviceCount={setDeviceCount}
        currentDeviceIndex={currentDeviceIndex}
        setCurrentDeviceIndex={setCurrentDeviceIndex} // Pass the setter for current device index
        uniqueID={uniqueID}
        setUniqueID={setUniqueID}
        handleAddDevice={handleAddDevice}
        labInCharge={labInCharge}
        setLabInCharge={setLabInCharge}
      />
      {/* Render the list of added devices */}
      <AddLabs_DeviceList deviceList={deviceList} handleAddPC={handleAddPC} />
      {/* Button to reset the form fields */}
      <button
        onClick={resetForm}
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
      >
        Reset Form
      </button>
      <button
        onClick={createLab}
        className="px-4 py-2 mt-4 ml-10 text-white bg-green-500 rounded"
      >
        Create Lab
      </button>
    </div>
  );
};

export default AddLabs;