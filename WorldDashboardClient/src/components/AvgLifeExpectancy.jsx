import React, { useEffect, useState } from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { getAverageLifeExpectancy } from '../api/api';



const AvgLifeExpectancy = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAverageLifeExpectancy();

        console.log(res);

        setValue(Number(res));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // data for bar chart
  const data = [
    {
      name: "Average Life Expectancy",
      years: value
    }
  ];

  return (
    <div className="analytics-card">

      <h2>Average Life Expectancy</h2>

      <div style={{ width: "100%", height: "350px" }}>

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="years" fill="#4CAF50" />

          </BarChart>

        </ResponsiveContainer>

      </div>

      <h3 style={{ textAlign: "center", marginTop: "10px" }}>
        {value.toFixed(2)} Years
      </h3>

    </div>
  );
};


export default AvgLifeExpectancy