import React, { useState } from 'react'
import { getGreaterPopulationBySpecificVal } from '../api/api';

const GreaterPopByUser = () => {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await getGreaterPopulationBySpecificVal(value);
        setData(res);
    };
  return (
    <div className="table-card modern-card">

            {/* Header */}
            <div className="card-header">
                <h2>Population Greater Than</h2>
                <p>Filter countries above a population value</p>
            </div>

            {/* Input */}
            <div className="input-row">
                <input
                    type="number"
                    placeholder="Enter population (e.g. 10000000)"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <button onClick={fetchData}>
                    Search
                </button>
            </div>

            {/* Scroll List */}
            <div className="scroll-box modern-scroll">

                {data.length === 0 ? (
                    <div className="empty-state">
                        No data found
                    </div>
                ) : (
                    data.map((item, index) => (
                        <div className="scroll-item modern-item" key={index}>

                            <div className="country-info">
                                <span className="rank">#{index + 1}</span>
                                <span className="name">{item.Name}</span>
                            </div>

                            <div className="population">
                                {item.Population.toLocaleString()}
                            </div>

                        </div>
                    ))
                )}

            </div>

        </div>
  )
}

export default GreaterPopByUser