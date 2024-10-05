import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      ).then((res) => res.json());
      // console.log(result);
      setData(result);
    };
    getData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar
        data={data}
        setData={setData}
        filterData={filterData}
        setFilterData={setFilterData}
      />
      {data ? <Table data={filterData ? filterData : data} /> : "Refresh API"}
    </div>
  );
}

export default App;
