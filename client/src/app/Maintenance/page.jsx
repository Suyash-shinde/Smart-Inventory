"use client";

import { useEffect, useState , useRef} from "react";
import axios from "axios";
const Maintenance = () => {

  const Options = {
    device: ["Device", "Computer", "Projector", "Fan"],
    status: ["Status", "Pending", "Ongoing", "Completed"],
    //faculty: ["Faculty", "Faculty 1", "Faculty 2", "Faculty 3"],
  };

  const [Issues,setIssue] = useState([]);
  const [OrIssues,setOrIssue]=useState([]);
  const runOnce = useRef(false)

  
  const fetchData = async () =>{
    try {
     
      const response = (await axios.get("http://localhost:3090/api/issues")).data;
    console.log("Response: " , response);
    // response.forEach((_id)=>{
    //     Issues.push(_id);
    // })
    setIssue(response);
    setOrIssue(response);
    //Issues.push(response.data)
    console.log(Issues);

    } catch (error) {
      console.log(error);
      
    }
    
    
  }
  useEffect(()=>{
    if(runOnce.current===false){
      fetchData();
    }
    return () => runOnce.current=true
  },[])
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  //const [selectedFaculty, setSelectedFaculty] = useState("");


  const handleFilter = () => {
    let filteredIssues = Issues;


    if (selectedDevice && selectedDevice !== "Device") {
      filteredIssues = filteredIssues.filter(
        (issue) => issue.deviceType === selectedDevice
      );
      
    }

    if (selectedStatus && selectedStatus !== "Status") {
      filteredIssues = filteredIssues.filter(
        (issue) => issue.status === selectedStatus
      );
    }

    if (selectedDate) {
      filteredIssues = filteredIssues.filter(
        (issue) => issue.date === selectedDate
      );
    }

    // if (selectedFaculty && selectedFaculty !== "Faculty") {
    //   filteredIssues = filteredIssues.filter(
    //     (issue) => issue.faculty === selectedFaculty
    //   );
    // }

    return filteredIssues;
  };

  let filteredIssues = handleFilter();
  const check = () =>{
    filteredIssues = handleFilter();
    if(filteredIssues.length===0 || selectedDevice === "Device" ){
        setIssue(OrIssues);
    }
    else{
    setIssue(filteredIssues);
    }  
    console.log("Filtered Issue",filteredIssues);
    console.log("Issues state",Issues);
      
      
  }
  return (
    <>
      <div className="w-full h-min-screen">
        <header className="flex items-center justify-center w-full h-12 bg-emerald-500">
          <h1 className="text-2xl font-bold text-white">Maintenance</h1>
        </header>

        <main className="w-full h-full p-4 bg-cyan-100">
          <div className="flex items-center justify-center mb-4">
            <input
              type="search"
              placeholder="Search"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-cyan-100"
            />
          </div>

          <div className="flex flex-col items-center px-4 py-3 space-x-4 bg-white border rounded-md sm:flex-row">
            <div className="flex flex-col w-full space-y-4 ">
              <div className="flex space-x-4">
                <select
                  name="device-type"
                  id="device-type"
                  className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                >
                  {Options.device.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  name="maintenance-status"
                  id="maintenance-status"
                  className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {Options.status.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-4">
                <select
                  name="faculty"
                  id="faculty"
                  className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  // value={selectedFaculty}
                  // onChange={(e) => setSelectedFaculty(e.target.value)}
                >
                  {/* {Options.faculty.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))} */}
                </select>

                <div className="flex flex-col w-full space-y-4">
                  <div className="flex items-center">
                    <label
                      htmlFor="date-input"
                      className="text-left w-fit sm:w-1/4"
                    >
                      Date:
                    </label>
                    <input
                      type="date"
                      id="date-input"
                      className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="px-8 py-2 mt-3 text-white rounded-md sm:mt-0 bg-emerald-500"
                onClick={check}
              >
                Filter
              </button>
            </div>
          </div>

          <ul className="mt-5 space-y-4">
            {filteredIssues.length >= 0 ? (
              Issues.map((issue) => (
                <li
                  key={issue._id}
                  className="flex justify-between border rounded-md bg-slate-50"
                >
                  <div className="flex flex-col self-center w-11/12 p-4 space-y-2 rounded-l-md text-slate-500">
                    <div>
                      <h6>Issue Id: {issue._id}</h6>
                      <h6>Date: {issue.date}</h6>
                    </div>
                    <div className="flex flex-wrap">
                      <h6 className="w-1/2">Faculty: {issue.facultyLabIncharge}</h6>
                      <h6 className="w-1/2">Lab: 1</h6>
                      <h6 className="w-1/2">Device: {issue.deviceType}</h6>
                    </div>
                  </div>

                  <div
                    className={`flex items-center justify-center w-1/12 rounded-r-md ${
                      issue.status === "Completed"
                        ? "bg-green-500"
                        : issue.status === "Ongoing"
                        ? "bg-yellow-400"
                        : "bg-red-500"
                    }`}
                  >
                    <span
                      className="font-semibold text-white"
                      style={{ writingMode: "vertical-lr" }}
                    >
                      {issue.status}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">No issues found.</p>
            )}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Maintenance;
