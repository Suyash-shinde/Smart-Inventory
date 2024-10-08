"use client";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
import { image } from "@nextui-org/react";

const Risit = () => {
  const ref = useRef(null);
  const handlepdf = () => {
    const opt = {
      margin: 0.5,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(ref.current).set(opt).save();
  };
  return (
    <>
      <div>
        {" "}
        <div
          ref={ref}
          className="min-h-screen w-screen text-xl font-semibold p-12"
        >
          <div>
            <div className="grid grid-cols-6 grid-rows-4 font-bold">
              <div className="col-span-1 row-span-3 content-center border-2 border-black p-2 text-center">
                College Logo
              </div>
              <div className="col-span-4 row-span-3 content-center border-2 border-black p-2 text-center text-3xl">
                <p>Pimpri Chinchwad Education Trust's</p>
                <p>
                  Pimpri Chinchwad College of Engineering & Research <br />
                  Ravet, Pune
                </p>
                <p>IQAC PCCOER</p>
              </div>
              <div className="col-span-1 row-span-3 content-center border-2 border-black p-2 text-center">
                PCET Logo
              </div>
              <div className="col-span-1 row-span-1 content-center border-2 border-black p-2 text-center">
                A. Year: 2024-25 <br />
                Term: I/II
              </div>
              <div className="col-span-4 row-span-1 content-center border-2 border-black p-2 text-center">
                Maintenance Report
              </div>
              <div className="col-span-1 row-span-1 content-center border-2 border-black p-2 text-center">
                IT/R/03
              </div>
            </div>
            <div className="grid grid-cols-7 grid-rows-1 py-3">
              <div className="col-span-5 row-span-1 content-center p-2">
                Type of Problem: System/Furniture/Civil/Electrical/Workshop
              </div>
              <div className="col-span-2 row-span-1 content-center p-2">
                Date: _ / / _ _ _
              </div>
            </div>
          </div>
          <div className="grid h-full w-full grid-cols-6 grid-rows-9 gap-y-3">
            <div className="col-span-6 row-span-2 grid grid-cols-7 grid-rows-8 border-2 border-black">
              <div className="p-2-2 col-span-1 row-span-8 content-center border-2 border-black p-2 text-center">
                Originator
              </div>
              <div className="col-span-3 row-span-1 border-2 border-black p-2">
                Department:
              </div>
              <div className="col-span-3 row-span-1 border-2 border-black p-2">
                Location:
              </div>
              <div className="col-span-6 row-span-3 border-2 border-black p-2">
                Complaint Details:
              </div>
              <div className="col-span-3 row-span-1 border-2 border-black p-2">
                Recuring Complaint (Yes/No):
              </div>
              <div className="col-span-3 row-span-1 border-2 border-black p-2">
                If Yes, how many times:
              </div>
              <div className="col-span-3 row-span-3 content-end border-2 border-black p-2 text-center">
                Incharge/Lab Assistant <br />
                Name and Signature with Date
              </div>
              <div className="col-span-3 row-span-3 content-end border-2 border-black p-2 text-center">
                Head of Department <br />
                Signature with Date
              </div>
            </div>
            <div className="col-span-6 row-span-2 grid grid-cols-7 grid-rows-5 border-2 border-black">
              <div className="p-2-2 col-span-1 row-span-5 content-center border-2 border-black p-2 text-center">
                Verification
              </div>
              <div className="col-span-3 row-span-2 content-end border-2 border-black p-2 text-center">
                Maintenance Section Incharge <br />
                Complaint received date with signature
              </div>
              <div className="col-span-3 row-span-2 border-2 border-black p-2">
                Name of the person to whom work is allocated:
              </div>
              <div className="col-span-3 row-span-3 border-2 border-black p-2">
                Verification and Remarks:
              </div>
              <div className="col-span-3 row-span-3 border-2 border-black p-2">
                Material replaced/repaired/used for attending complaint:
              </div>
            </div>
            <div className="col-span-6 row-span-3 grid grid-cols-7 grid-rows-6 border-2 border-black">
              <div className="p-2-2 col-span-1 row-span-6 content-center border-2 border-black p-2 text-center">
                Correction Action
              </div>
              <div className="col-span-3 row-span-2 border-2 border-black p-2">
                Complaint resolved and closed inhouse
              </div>
              <div className="col-span-3 row-span-2 border-2 border-black p-2">
                Remark:
              </div>
              <div className="col-span-3 row-span-2 border-2 border-black p-2">
                Purchase of consumable required recommended
              </div>
              <div className="col-span-3 row-span-2 border-2 border-black p-2">
                Details (Description/Oty/Cost):
              </div>
              <div className="col-span-3 row-span-2 border-2 border-black p-2">
                Reommended Maintenance from external agency
              </div>
              <div className="p-2-2 col-span-3 row-span-2 content-center space-y-3 border-2 border-black p-2">
                <p>Agency name:</p>
                <p>Expected Expenditure (Approx):</p>
              </div>
            </div>
            <div className="col-span-6 row-span-2 grid grid-cols-7 grid-rows-4 border-2 border-black">
              <div className="p-2-2 col-span-1 row-span-4 content-center border-2 border-black p-2 text-center">
                Maintenance Report Closure
              </div>
              <div className="col-span-3 row-span-2 border-2 border-black p-2">
                Remark on work completion by person incharge of the
                lab/className:
              </div>
              <div className="col-span-3 row-span-2 content-end border-2 border-black p-2 text-center">
                Incharge/Lab Assistant <br />
                Name and Signature with Date
              </div>
              <div className="col-span-3 row-span-2 border-2 border-black p-2">
                Remark on work completion by Maintenance section Incharge:
              </div>
              <div className="col-span-3 row-span-2 content-end border-2 border-black p-2 text-center">
                Maintenance Section Incharge
                <br />
                Complaint closed Date with Signature
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-black text-white rounded-lg w-full mt-8"
          onClick={handlepdf}
        >
          generate
        </button>
      </div>
    </>
  );
};
export default Risit;
