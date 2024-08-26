"use client";

import react from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

const Piechart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width={"100%"} minHeight={300}>
        <PieChart>
          <Pie
            nameKey="name"
            dataKey="value"
            data={data}
            fill="#8884d8"
            label={(item) => item.name}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default Piechart;
