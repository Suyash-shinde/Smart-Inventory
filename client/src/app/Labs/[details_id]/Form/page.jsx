"use client";
import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast'
import axios from "axios";
import {
  getCookie,
  parseCookie,
  getPropertyFromCookie,
} from "../../../utils/useCookie";
import { useRouter } from 'next/navigation'; 

import { useSearchParams } from "next/navigation";
// import "dotenv/config";
import { cards } from "../../../data";
// import styles from "./form.css";
import { issuePost } from "../../../utils/APIpost";
import { getLabPost } from "../../../utils/APIpost";
import ViewLayout from "@/app/components/ViewLayout";
const page = () => {
  const router=useRouter();

  const searchParams = useSearchParams();
  //const id=searchParams.get('id');

  const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure two digits
    const date = String(today.getDate()).padStart(2, "0"); // Ensure two digits
    return `${year}-${month}-${date}`;
  };
  const formatToUKDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  //code for lab layout

  const [lab,setLab] = useState({});
  const [loading, setLoading] = useState(true);
  const [devicevalue,setDeviceValue] = useState(null);
  
  

 

 

  //const date=getDate();
  
  useEffect(() => {
    
    // Ensure the code runs only on the client side
    if (typeof window !== "undefined") {
      let cookieReq = getCookie("user"); //this gets me the cookie associated with user
      let parsed = parseCookie(cookieReq).user;
      let fetchedName = getPropertyFromCookie(parsed, "name");

      let id = +searchParams.get("id");

      //console.log(typeof(id));

      // const selectedCard = cards.find((card) => card.index === id);
      // console.log(selectedCard);
      let incharge="";
      //console.log(date);
      axios.post('http://localhost:3090/getLab',
        {
        labNo:id
      },
      {withCredentials:true}
    )
      .then((response)=>{
        console.log("res",response);
        setLab(response.data.data);
        incharge+=response.data.data.incharge;
        console.log("HereF",incharge);
        console.log("HereD",response.data.data.incharge);
        setIssueDetails((prevDetails) => ({
          ...prevDetails,
          facultyName: fetchedName,
          facultyLabIncharge: incharge ? incharge : "None assigned",
          date: getDate(),
          labNo:id
        }));
      }).catch((error)=>{
        console.log("Error found ",error);
      }) .finally(setLoading(false))
    }
  }, [searchParams]);
  const [issueDetails, setIssueDetails] = useState({
    deviceId: "",
    deviceType: "",
    date: getDate(),
    facultyName: "",
    facultyLabIncharge: "",
    details: "",
    labNo:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeviceValue(e.target.value);
    setIssueDetails((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const handleDeviceId = (e)=>{
    setIssueDetails((prev)=>({...prev,["deviceId"]:e}))
    console.log(issueDetails);
  }
  const sendData = async () => {
  const myData = issueDetails;
  const result = await issuePost(myData);
  const path = `/Labs/Form?id=1/Pdf`;
  router.push(path);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendPromise = sendData(); // Create the promise
    toast.promise(
      sendPromise,
      {
        loading: 'Sending...',
        success: 'Sent successfully!',
        error: 'Failed to send.',
      }
    );
  
    try {
      await sendPromise;
      console.log(issueDetails); // Execute when the promise resolves
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  
  const handleReset = (e) => {
    window.alert("You are about to reset");
    window.location.reload();
  };
 
  if (loading) {
    return <div className='font-extrabold'>Loading...</div>;  // Display loading message or spinner
  }
  if (!lab) {
    return <div>No data available</div>;  // If no lab data is fetched or null
  }
  return (

    <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-200 py-10 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Report an Issue</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Faculty Name:</label>
            <input
              className="h-10 border border-gray-300 mt-1 rounded-md px-4 w-full bg-gray-100 cursor-not-allowed"
              id="facultyName"
              name="facultyName"
              placeholder="Not logged in"
              type="text"
              value={issueDetails.facultyName}
              readOnly
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Faculty Lab Incharge:</label>
            <input
              className="h-10 border border-gray-300 mt-1 rounded-md px-4 w-full bg-gray-100 cursor-not-allowed"
              type="text"
              name="facultyLabIncharge"
              value={issueDetails.facultyLabIncharge}
              readOnly
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Date:</label>
            <input
              className="h-10 border border-gray-300 mt-1 rounded-md px-4 w-full bg-gray-100 cursor-not-allowed"
              type="date"
              name="date"
              value={issueDetails.date}
              readOnly
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Equipment:</label>
            <select
              name="deviceType"
              className="h-10 border border-gray-300 mt-1 rounded-md px-4 w-full bg-white"
              value={issueDetails.deviceType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choose an Equipment
              </option>
              <option value="Monitor">Monitor</option>
              <option value="PC">PC</option>
              <option value="Projector">Projector</option>
              <option value="Fan">Fan</option>
            </select>
          </div>
          
        {(devicevalue!=="PC")? 
              <div>
              <label>Device Id:</label>
              {/* try to make a drop down select later */}
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                type="text"
                name="deviceId"
                value={issueDetails.deviceId}
                onChange={handleChange}
              ></input>
            </div>:
            <div className="w-auto flex justify-center items-center"><ViewLayout handleDeviceId={handleDeviceId} data={lab}></ViewLayout></div>
            }
            

          <div>
            <label className="block text-gray-700 font-medium">Issue:</label>
            <textarea
              className="h-24 border border-gray-300 mt-1 rounded-md px-4 w-full"
              name="details"
              value={issueDetails.details}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="reset"
              onClick={handleReset}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};



export default page;
