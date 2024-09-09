"use client";
import React, { useState, useEffect } from "react";
import {
  getCookie,
  parseCookie,
  getPropertyFromCookie,
} from "../utils/useCookie";
import { useSearchParams } from "next/navigation";
import "dotenv/config";
import { cards } from "../data";
import styles from "./form.css";
import { issuePost } from "../utils/APIpost";
const page = () => {
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

  //const date=getDate();

  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window !== "undefined") {
      let cookieReq = getCookie("user"); //this gets me the cookie associated with user
      let parsed = parseCookie(cookieReq).user;
      let fetchedName = getPropertyFromCookie(parsed, "name");

      let id = +searchParams.get("id");

      //console.log(typeof(id));

      const selectedCard = cards.find((card) => card.index === id);
      console.log(selectedCard);
      //console.log(date);

      setIssueDetails((prevDetails) => ({
        ...prevDetails,
        facultyName: fetchedName,
        facultyLabIncharge: selectedCard ? selectedCard.labIncharge : "No",
        date: getDate(),
      }));
    }
  }, [searchParams]);
  const [issueDetails, setIssueDetails] = useState({
    deviceId: "",
    deviceType: "",
    date: getDate(),
    facultyName: "",
    facultyLabIncharge: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssueDetails((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const sendData = async () => {
    const myData = issueDetails;
    const result = await issuePost(myData);
    //const resultInJson= await result.json();
    console.log(result);
    //   const result = await fetch('{$host}/api/issues',{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(myData)
    // })
    // const resultInJson= await result.json();
  };

  const handleSubmit = async (e) => {
    //console.log(id);

    e.preventDefault();
    await sendData();
    console.log(issueDetails);
    //console.log(id);
  };

  const handleReset = (e) => {
    window.alert("You are about to reset");
  };

  return (
    <>
      {/* <Navbar/> */}
      <div className="min-h-screen bg-green-200 py-2">
        <div className="Form">
          <form>
            <div>
              <label className=""> Faculty Name: </label>
              {/* We need to get this automatically from login details */}
              <input
                className=" h-10 border mt-1 rounded px-4 w-full bg-gray-50  cursor-not-allowed"
                id="facultyName"
                name="facultyName"
                placeholder="Not logged in"
                type="text"
                value={issueDetails.facultyName}
                readOnly
              />
            </div>

            <div>
              <label> Faculty Lab Incharge: </label>
              {/* We need to get this automatically from either lab ka details or something like that , maybe a hardcoded json of each lab to faculty,login details */}
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 cursor-not-allowed"
                type="text"
                name="facultyLabIncharge"
                id="FacultyLab"
                placeholder="Faculty LabInCharge"
                value={issueDetails.facultyLabIncharge}
                readOnly
              />
            </div>

            <div>
              <label>Date:</label>
              {/* Automatically from OS or something */}
              <input
                className="h-11 border mt-1 rounded px-4 w-full bg-gray-50 cursor-not-allowed"
                type="date"
                name="date"
                id="Date"
                value={issueDetails.date}
                readOnly
              ></input>
            </div>

            <div>
              <label> Equipment : </label>
              <select
                name="deviceType"
                className="appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-400"
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
            </div>

            <div>
              <label>Issue</label>
              <textarea
                className=" rounded-md"
                name="details"
                value={issueDetails.details}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="bottomButtons">
              <button
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-[58%] "
                type="reset"
                onClick={handleReset}
              >
                Delete{" "}
              </button>
              <button
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
