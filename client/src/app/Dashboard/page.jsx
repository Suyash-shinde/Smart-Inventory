
import React from "react";
import Piechart from "../components/Piechart";

const page = () => {
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
          data={[
            { name: "replacement issues", value: 400 },
            { name: "Maintenance issues", value: 300 },
            { name: "Devices ", value: 300 },
            { name: "Inventory", value: 200 },
          ]}
        />
        <div></div>
      </div>
      {/* NextJS Material Dashboard 2 Examples import PieChart from "/examples/Charts/PieChart"; */}
    </>
  );
};

export default page;

