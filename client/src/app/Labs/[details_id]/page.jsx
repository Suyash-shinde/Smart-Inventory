"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Piechart from "../../components/Piechart";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { cards } from "../../data";
import LabLayout from "@/app/components/LabLayout";

const LabDetails = ({ params }) => {
  const id = params.details_id;
  const [lab, setLab] = useState(null);
  const [loading, setLoading]= useState(true);
  const [pie,setPie] = useState([])
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
  const checkState = (input)=>{
    console.log(input);
    
  }
  const router = useRouter();
  const handleOnClick = () => {
    // const path = `/Form?id=${card.index}`;
    const path = `/Labs/${id}/Form?id=${id}`;
    router.push(path);
  };
  useEffect(() => {
    // if (id) {
    //   const card = cards.find((card) => card.index === parseInt(id));
    //   if (card) {
    //     console.log(card);
    //     setLab({
    //       labName: card.labName,
    //       labDescription: card.labDescription,
    //       labIncharge: card.labIncharge,
    //     });
    //   } else {
    //     console.error("Card not found");
    //   }

    // }
    // console.log("id is",id);
    
    axios.post('http://localhost:3090/getLab',
      {
      labNo:id
    },
    {withCredentials:true}
  )
    .then((response)=>{
      console.log(response.data.data);
      setLab(response.data.data);
      popPie(response.data.data.devices)
    }).catch((error)=>{
      console.log("Error found ",error);
    }).finally(setLoading(false));
  }, [id]);
  if (loading) {
    return <div className='font-extrabold'>Loading...</div>;  // Display loading message or spinner
  }
  if (!lab) {
    return <div>No data available</div>;  // If no lab data is fetched or null
  }
  return (
    <>
    
      
      {/* <div className="flex flex-row  justify-center items-center">lab details of lab {id}</div> */}
      <div className="min-h-screen p-6 bg-slate-100">
        <div className="flex flex-col items-center p-10 bg-white border-2 shadow-lg rounded-xl">
          <h1 className="text-4xl font-bold text-gray-800">{lab.labNo}</h1>
          <p className="text-lg mt-4">Java Lab </p>
          <p className="text-lg mt-4">Incharge: {lab.incharge}</p>
          <div className="max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
        <div className=" text-white w-60 mx-auto bg-black sm:w-64 p-4">
          <h3 className="text-xl py-2">PC's</h3>
          <p>34</p>
        </div>
        
        <div className="bg-black w-60 mx-auto text-white sm:w-64 p-4">
          <h3 className="text-xl py-2">Software issues</h3>
          <p>2</p>
        </div>
        <div className="bg-black w-60 mx-auto text-white sm:w-64 p-4">
          <h3 className="text-xl py-2">Hardware issues</h3>
          <p>2</p>
        </div>
        {/* <div className="bg-black w-60 mx-auto text-white  sm:w-64 p-4">
          <h3 className="text-xl py-2">Inventory</h3>
          <p>akfsmd</p>
        </div> */}
      </div>
      {checkState(pie)}
      
        <Piechart
          data={pie} 
        />
        </div>
      <div>
        <LabLayout data={lab}></LabLayout>
      </div>
        <button
          onClick={handleOnClick}
          className="bg-red-500 rounded-md m-2 p-2 shadow-md"
        >
          Raise issue
        </button>

      </div>
    </>
  );
};

export default LabDetails;

