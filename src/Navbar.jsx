import React, { useState } from "react";

const Navbar = ({ data, setData, filterData, setFilterData }) => {
  // const [text, setText] = useState("");
  function handleSearch(e) {
    let val = e.target.value;
    if (val == "") setFilterData();
    else
      setFilterData(
        data.filter((itm) => itm.name.toLowerCase().includes(val.toLowerCase()))
      );
  }

  function handleSortByCap() {
    let tem = [...data];
    tem.sort((a, b) => a.market_cap - b.market_cap);
    setData(tem);
  }

  function handleSortByPersent() {
    let tem = [...data];
    tem.sort(
      (a, b) =>
        a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h
    );
    setData(tem);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr 1fr",
        gap: "1rem",
      }}
    >
      <input
        type="text"
        placeholder="Search By Name or Symbol"
        onChange={handleSearch}
      />
      <button onClick={handleSortByCap}>Sort By Mkt Cap</button>
      <button onClick={handleSortByPersent}>Sort by percentage</button>
    </div>
  );
};

export default Navbar;
