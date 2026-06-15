import React, { useEffect, useState } from 'react'
import { getTenPopulatedCountries } from '../api/api'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const TopTenPop = () => {

  const [topTen,setTopTen] = useState([])

  async function fetchdata(){
    const res = await getTenPopulatedCountries()
    setTopTen(res)
  }

  useEffect(()=>{
    fetchdata()
  },[])

console.log(topTen)

  return (
    <>
        <div>Top Ten Populated countries</div>
  <div style={{ width: "400px", height: "300px" }}>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={topTen}>
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Population" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </>

  )
}

export default TopTenPop