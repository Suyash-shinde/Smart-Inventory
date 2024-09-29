'use client'
import React, { useEffect } from "react";
import axios from "axios";
import Piechart from "../components/Piechart";
import { useState } from "react";
const page = () => {
const [pie,setPie] = useState([])
const checkState = (input)=>{
  console.log(input);
  
}
const popPie = (input) => {
  const updatedPie = [...pie]; // Create a copy of the current pie state

  input.forEach((currData) => {
    const deviceType = currData.deviceType; // Assuming input has 'deviceType' field

    // Check if the device type already exists in the pie array
    const existingDevice = updatedPie.find((item) => item.name === deviceType);

    if (existingDevice) {
      // If device type exists, increment the count
      existingDevice.value += 1;
    } else {
      // If device type doesn't exist, add it to the pie array with count 1
      updatedPie.push({
        name: deviceType,
        value: 1
      });
    }
  });

  setPie(updatedPie); // Update the pie state with the modified data
};
useEffect(()=>{
  axios.get('http://localhost:3090/api/issues').then((response)=>{
    popPie(response.data)
    
  })
  .catch((error)=>{
    console.error("Error fetching data",error);
    
  });
},[]);
  return (
    <>
      {/* <div className="bg-red-400 h-14 w-full">nav</div>
      <div className="bg-blue-400 relative h-screen ">
        <div className="bg-green-400 h-44 ">Dashboard</div>
        <div className="bg-black text-white sm:w-60 sm:h-32 absolute top-28 left-36 sm:left-9 h-56 w-72">
          card1
        </div>
      </div> */}

      <div className="text-4xl py-5 bg-gray-500 ">Dashboard</div>
      <div className="max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6 ">
        <div className=" text-white w-60 mx-auto bg-black sm:w-64 p-4">
          <h3 className="text-xl py-2">Devices</h3>
          <p>akfsmd</p>
        </div>
        
        <div className="bg-black w-60 mx-auto text-white sm:w-64 p-4">
          <h3 className="text-xl py-2">Maintenance issues</h3>
          <p>akfsmd</p>
        </div>
        <div className="bg-black w-60 mx-auto text-white sm:w-64 p-4">
          <h3 className="text-xl py-2">Replacement issues</h3>
          <p>akfsmd</p>
        </div>
        <div className="bg-black w-60 mx-auto text-white  sm:w-64 p-4">
          <h3 className="text-xl py-2">Inventory</h3>
          <p>akfsmd</p>
        </div>
      </div>
      <div>
        <Piechart
          data={pie} 
        />
        
        <div></div>
      </div>
      {/* NextJS Material Dashboard 2 Examples import PieChart from "/examples/Charts/PieChart"; */}
    </>
  );
};

export default page;

