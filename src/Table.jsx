import React from "react";

const Table = ({ data }) => {
  //   console.log(data);

  return (
    <table>
      <tbody>
        {data.map((item) => {
          const {
            id,
            name,
            image,
            symbol,
            current_price,
            market_cap,
            total_volume,
            market_cap_change_percentage_24h,
          } = item;
          return (
            <tr key={id}>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "70px", height: "70px" }}
                  src={image}
                  alt=""
                />{" "}
                <span>{name}</span>
              </td>
              <td>{symbol.toUpperCase()}</td>
              <td>${current_price}</td>
              <td>${total_volume}</td>
              <td
                style={
                  market_cap_change_percentage_24h > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                {market_cap_change_percentage_24h}%
              </td>
              <td>Mkt Cap : ${market_cap}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
