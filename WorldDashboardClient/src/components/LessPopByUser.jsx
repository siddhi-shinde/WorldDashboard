import React, { useState } from "react";
import { getLessPopulationBySpecificVal } from "../api/Api";

const LessPopByUser = () => {

    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await getLessPopulationBySpecificVal(value);
        setData(res);
    };

    return (
       <div className="table-card modern-card">

    <div className="card-header">
        <h2>Population Less Than</h2>
        <p>Filter countries below a population value</p>
    </div>

    <div className="input-row">
        <input
            type="number"
            placeholder="Enter population (e.g. 1000000)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={fetchData}>
            Search
        </button>
    </div>

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
    );
};

export default LessPopByUser;