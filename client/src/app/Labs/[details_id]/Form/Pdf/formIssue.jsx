import React, { useState, useEffect, forwardRef } from "react";
import { formatToUKDate, getDate } from "@/app/components/date";
import axios from "axios";

const FormIssue = forwardRef(({ location, deviceId }, ref) => {
  let date = getDate();
  date = formatToUKDate(date);
  const today = new Date();
  const year = today.getFullYear();
  const [issueData, setIssueData] = useState({});
  useEffect(() => {
    axios
      .post("http://localhost:3090/api/issues/getIssue", {
        id: deviceId,
      })
      .then((response) => {
        console.log(response.data.data);
        const data = response.data.data;
        const calculatedDept = data.labNo ? getDepartment(data.labNo) : ""; // Handle missing labNo
        setIssueData({ ...data, department: calculatedDept }); // Update data with department
      })
      .catch((err) => {
        console.error("Error Fetching Data", err);
      });
  }, [deviceId]);

  // Function to determine department based on labNo
  const getDepartment = (labNo) => {
    let dept = "";
    const no = (labNo - (labNo % 100)) / 100;
    if (no === 1) dept = "Civil";
    if (no === 2) dept = "Mechanical";
    if (no === 3) dept = "First Year";
    if (no === 4) dept = "EnTC";
    if (no === 5) dept = "Computer";
    return dept;
  }; //write controller and stuff to get lab details from a particular lab number and id
  return (
    <div
      ref={ref}
      className="w-screen p-8 text-xs font-semibold"
      style={{ height: "297mm", overflowY: "auto" }}
    >
      <div>
        <div className="grid grid-cols-6 grid-rows-3 font-bold">
          <div className="content-center col-span-1 row-span-3 p-2 text-center border-black border-1">
            <img
              src="/image.png"
              alt="College logo"
              className="w-auto h-auto "
            />
          </div>
          <div className="content-center col-span-4 row-span-3 p-2 text-xl text-center border-black border-1">
            <p>Pimpri Chinchwad Education Trust's</p>
            <p>
              Pimpri Chinchwad College of Engineering & Research <br />
              Ravet, Pune
            </p>
            <p>IQAC PCCOER</p>
          </div>
          <div className="content-center col-span-1 row-span-3 p-2 text-center border-black border-1">
            <img
              src="/pcet.png"
              alt="College logo"
              className="w-auto h-auto "
            />
          </div>
          <div className="content-center col-span-1 row-span-1 p-2 text-center border-black border-1">
            A. Year: {year}-{year + 1} <br />
            Term: I/II
          </div>
          <div className="content-center col-span-4 row-span-1 p-2 text-center border-black border-1">
            Maintenance Report
          </div>
          <div className="content-center col-span-1 row-span-1 p-2 text-center border-black border-1">
            IT/R/03
          </div>
        </div>
        <div className="grid grid-cols-7 grid-rows-1 py-3">
          <div className="content-center col-span-5 row-span-1 p-2">
            Type of Problem: System/Furniture/Civil/Electrical/Workshop
          </div>
          <div className="content-center col-span-2 row-span-1 p-2">
            Date: {date}{" "}
          </div>
        </div>
      </div>
      <div className="grid w-full h-full grid-cols-6 grid-rows-9 gap-y-3">
        <div className="grid grid-cols-7 col-span-6 row-span-2 border-black grid-rows-8 border-1">
          <div className="content-center col-span-1 p-2 text-center border-black p-2-2 row-span-8 border-1">
            Originator
          </div>
          <div className="col-span-3 row-span-1 p-2 border-black border-1">
            Department: {issueData.department}
          </div>
          <div className="col-span-3 row-span-1 p-2 border-black border-1">
            Location:{location}
          </div>
          <div className="col-span-6 row-span-3 p-2 border-black border-1">
            Complaint Details:
            <p className="font-mono">{issueData.details}</p>
          </div>
          <div className="col-span-3 row-span-1 p-2 border-black border-1">
            Recuring Complaint (Yes/No):
            {issueData.recurring ? "Yes" : "No"}
          </div>
          <div className="col-span-3 row-span-1 p-2 border-black border-1">
            If Yes, how many times:
          </div>
          <div className="content-end col-span-3 row-span-3 p-2 text-center border-black border-1">
            {issueData.facultyLabIncharge}
            <br />
            Incharge/Lab Assistant
            <br />
            Name and Signature with Date
          </div>
          <div className="content-end col-span-3 row-span-3 p-2 text-center border-black border-1">
            Head of Department <br />
            Signature with Date
          </div>
        </div>
        <div className="grid grid-cols-7 col-span-6 grid-rows-3 row-span-1 border-black border-1">
          <div className="content-center col-span-1 row-span-3 p-1 text-center border-black border-1">
            Verification
          </div>
          <div className="content-end col-span-3 row-span-2 p-1 text-center border-black border-1">
            Maintenance Section Incharge <br />
            Complaint received date with signature
          </div>
          <div className="col-span-3 row-span-2 p-1 border-black border-1">
            Name of the person to whom work is allocated:
          </div>
          <div className="col-span-3 row-span-1 p-1 border-black border-1">
            Verification and Remarks:
          </div>
          <div className="col-span-3 row-span-1 p-1 border-black border-1">
            Material replaced/repaired/used for attending complaint:
          </div>
        </div>

        <div className="grid grid-cols-7 col-span-6 grid-rows-6 row-span-2 border-black border-1">
          <div className="content-center col-span-1 row-span-6 p-2 text-center border-black p-2-2 border-1">
            Correction Action
          </div>
          <div className="col-span-3 row-span-2 p-2 border-black border-1">
            Complaint resolved and closed inhouse
          </div>
          <div className="col-span-3 row-span-2 p-2 border-black border-1">
            Remark:
          </div>
          <div className="col-span-3 row-span-2 p-2 border-black border-1">
            Purchase of consumable required recommended
          </div>
          <div className="col-span-3 row-span-2 p-2 border-black border-1">
            Details (Description/Oty/Cost):
          </div>
          <div className="col-span-3 row-span-2 p-2 border-black border-1">
            Reommended Maintenance from external agency
          </div>
          <div className="content-center col-span-3 row-span-2 p-2 space-y-3 border-black p-2-2 border-1">
            <p>Agency name:</p>
            <p>Expected Expenditure (Approx):</p>
          </div>
        </div>
        <div className="grid grid-cols-7 col-span-6 grid-rows-4 row-span-2 border-black border-1">
          <div className="content-center col-span-1 row-span-4 p-2 text-center border-black p-2-2 border-1">
            Maintenance Report Closure
          </div>
          <div className="col-span-3 row-span-2 p-2 border-black border-1">
            Remark on work completion by person incharge of the lab/className:
          </div>
          <div className="content-end col-span-3 row-span-2 p-2 text-center border-black border-1">
            Incharge/Lab Assistant <br />
            Name and Signature with Date
          </div>
          <div className="col-span-3 row-span-2 p-2 border-black border-1">
            Remark on work completion by Maintenance section Incharge:
          </div>
          <div className="content-end col-span-3 row-span-2 p-2 text-center border-black border-1">
            Maintenance Section Incharge
            <br />
            Complaint closed Date with Signature
          </div>
        </div>
      </div>
    </div>
  );
});

export default FormIssue;
