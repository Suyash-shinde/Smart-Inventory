"use client";
import React, { useEffect } from "react";
import axios from "axios";
import Piechart from "../components/Piechart";
import { useState } from "react";

const Page = () => {
  const [pie, setPie] = useState([]);

  const checkState = (input) => {
    console.log(input);
  };

  const popPie = (input) => {
    const updatedPie = [...pie]; // Create a copy of the current pie state

    input.forEach((currData) => {
      const deviceType = currData.deviceType; // Assuming input has 'deviceType' field

      // Check if the device type already exists in the pie array
      const existingDevice = updatedPie.find(
        (item) => item.name === deviceType
      );

      if (existingDevice) {
        // If device type exists, increment the count
        existingDevice.value += 1;
      } else {
        // If device type doesn't exist, add it to the pie array with count 1
        updatedPie.push({
          name: deviceType,
          value: 1,
        });
      }
    });

    setPie(updatedPie); // Update the pie state with the modified data
  };

  useEffect(() => {
    axios
      .get("http://localhost:3090/api/issues")
      .then((response) => {
        popPie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <>
      <div className="bg-slate-50">
        <div className="py-5 text-4xl text-center text-white bg-emerald-800">
          Dashboard
        </div>

        <div className="flex mt-10 justify-evenly">
          <div className="h-32 p-6 mx-auto border shadow-lg border-slate-300 shadow-emerald-100 rounded-2xl w-80">
            <h3 className="py-2 text-xl">Devices</h3>
            <p>Data placeholder</p>
          </div>

          <div className="h-32 p-6 mx-auto border shadow-lg border-slate-300 shadow-emerald-100 rounded-2xl w-80">
            <h3 className="py-2 text-xl">Maintenance Issues</h3>
            <p>Data placeholder</p>
          </div>

          <div className="h-32 p-6 mx-auto border shadow-lg border-slate-300 shadow-emerald-100 rounded-2xl w-80">
            <h3 className="py-2 text-xl">Replacement Issues</h3>
            <p>Data placeholder</p>
          </div>

          <div className="h-32 p-6 mx-auto border shadow-lg border-slate-300 shadow-emerald-100 rounded-2xl w-80">
            <h3 className="py-2 text-xl">Inventory</h3>
            <p>Data placeholder</p>
          </div>
        </div>

        <div>
          <Piechart data={pie} />
        </div>
      </div>
    </>
  );
};

export default Page;
