"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { cards } from "../../data";

const LabDetails = () => {
  const { deatils_id: id } = useParams();

  // const [selectedLab, setSelectedLab] = useState({
  //   labName: "",
  //   labImage: "",
  //   labDescription: "",
  //   labIncharge: "",
  // });
  useEffect(() => {
    if (id) {
      const card = cards.find((card) => card.index === details_id);

      console.log(card);
    }
  }, [id]);

  return (
    <>
      {" "}
      {/* <div>lab details of lab {id}</div>
      <div className="min-h-screen p-6 bg-slate-100">
        <div className="flex flex-col items-center p-10 bg-white border-2 shadow-lg rounded-xl">
          <h1 className="text-4xl font-bold text-gray-800">
            {selectedLab.labName}
          </h1>
          <p className="text-lg mt-4">{selectedLab.labDescription}</p>
          <p className="text-lg mt-4">Incharge: {selectedLab.labIncharge}</p>
        </div>
      </div> */}
      <div>{id}</div>
    </>
  );
};

export default LabDetails;
