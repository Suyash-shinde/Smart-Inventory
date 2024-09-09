"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { cards } from "../../data";

const LabDetails = ({ params }) => {
  const id = params.details_id;
  console.log(id);
  const [lab, setLab] = useState({
    labName: "",
    labDescription: "",
    labIncharge: "",
  });
  const router = useRouter();
  const handleOnClick = () => {
    // console.log(card);
    //console.log("Here");

    // const path = `/Form?id=${card.index}`;
    const path = `/Labs/${id}/Form?id=${id}`;

    router.push(path);
  };
  useEffect(() => {
    if (id) {
      const card = cards.find((card) => card.index === parseInt(id));
      if (card) {
        console.log(card);
        setLab({
          labName: card.labName,
          labDescription: card.labDescription,
          labIncharge: card.labIncharge,
        });
      } else {
        console.error("Card not found");
      }
    }
  }, [id]);

  return (
    <>
      {" "}
      <div>lab details of lab {id}</div>
      <div className="min-h-screen p-6 bg-slate-100">
        <div className="flex flex-col items-center p-10 bg-white border-2 shadow-lg rounded-xl">
          <h1 className="text-4xl font-bold text-gray-800">{lab.labName}</h1>
          <p className="text-lg mt-4">{lab.labDescription}</p>
          <p className="text-lg mt-4">Incharge: {lab.labIncharge}</p>
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
