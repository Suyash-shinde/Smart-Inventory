"use client";

import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Define a function to dynamically assign color based on the device name
const getColor = (name) => {
  if (name === "Computer") return '#d4d884';
  if (name === "Fan") return '#d88884';
  if (name === "Projector") return '#84d8b2';
  return '#8884d8'; // Default color for other devices
};
// data is coming like {
//  name : "PC",
// value:1
// }
const Piechart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width={"100%"} minHeight={300}>
        <PieChart>
          <Pie
            nameKey="name"  // Assuming pie data has "device" key for name
            dataKey="value"    // Assuming pie data has "count" key for values
            data={data}
            label={(item) => item.name}  // Display device type as label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.name)} /> // Dynamically assign colors
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default Piechart;
