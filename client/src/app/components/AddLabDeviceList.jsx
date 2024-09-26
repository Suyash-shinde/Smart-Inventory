'use client'
import { useState } from "react";
import Layout from "./AddLayout";
const AddLabs_DeviceList = ({ deviceList,handleAddPC }) => {
    const [lab,setLab]=useState({});
    const [grid,setGrid]=useState({});
    const handleChange=(e)=>{
      setLab({...lab,[e.target.name]:e.target.value});
      console.log(lab);
    }
    const setGridSize=()=>{
      const {gridc,gridr}=lab;
      setGrid({gridr:gridr, gridc:gridc});
    }
    return (
      <div className="mt-6 space-y-6">
        {/* Section for displaying fans */}
        <div>
          <h2 className="mb-2 text-xl font-semibold">Fans</h2>
            {deviceList?.Fan?.length > 0 ? (
            <ul className="space-y-2">
              {deviceList.Fan.map((device, index) => (
                <li key={index} className="p-4 bg-white rounded shadow">
                  <strong>Lab:</strong> {device.labNo} | <strong>Device:</strong>{" "}
                  {device.deviceType} | <strong>ID:</strong> {device.id}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No fans added yet.</p>
          )}
        </div>
  
        {/* Section for displaying lights */}
        <div>
          <h2 className="mb-2 text-xl font-semibold">Lights</h2>
          {deviceList?.Light?.length > 0 ? (
            <ul className="space-y-2">
              {deviceList.Light.map((device, index) => (
                <li key={index} className="p-4 bg-white rounded shadow">
                  <strong>Lab:</strong> {device.labNo} | <strong>Device:</strong>{" "}
                  {device.deviceType} | <strong>ID:</strong> {device.id}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No lights added yet.</p>
          )}
        </div>
  
        {/* Section for displaying projectors */}
        <div>
          <h2 className="mb-2 text-xl font-semibold">Projectors</h2>
          {deviceList?.Projector?.length > 0 ? (
            <ul className="space-y-2">
              {deviceList.Projector.map((device, index) => (
                <li key={index} className="p-4 bg-white rounded shadow">
                  <strong>Lab:</strong> {device.labNo} | <strong>Device:</strong>{" "}
                  {device.deviceType} | <strong>ID:</strong> {device.id}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No projectors added yet.</p>
          )}
        </div>
  
        {/* Section for displaying computers */}
        <div>
        <h2 className="mb-2 text-xl font-semibold">Computers</h2>
        <label className="block text-gray-700">Number of Rows</label>
        <input
          type="text"
          className="w-full p-2 mt-2 border rounded"
          name="gridr"
          onChange={(e)=>handleChange(e)}
        />
        <label className="block text-gray-700">Number of Columns</label>
        <input
          type="text"
          className="w-full p-2 mt-2 border rounded"
          name="gridc"
          onChange={(e)=>handleChange(e)}
        />
        <button
        className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
        onClick={setGridSize}>generate layout</button>
        <Layout grid={grid} handleAddPC={handleAddPC}></Layout>
          {/* <h2 className="mb-2 text-xl font-semibold">Computers</h2>
          {deviceList?.Computer?.length > 0 ? (
            <ul className="space-y-2">
              {deviceList.Computer.map((device, index) => (
                <li key={index} className="p-4 bg-white rounded shadow">
                  <strong>Lab:</strong> {device.labNo} | <strong>Device:</strong>{" "}
                  {device.deviceType} | <strong>ID:</strong> {device.id}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No computers added yet.</p>
          )} */}
        </div>
      </div>
    );
  };
  
  export default AddLabs_DeviceList;