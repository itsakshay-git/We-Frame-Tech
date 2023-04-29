import React from "react";
import styles from "./ClientTable.module.css";
import data from "../../data/data.js";

const ClientTable = () => {

  return (
    <div className={styles.clienttable}>
      <h3>Per client</h3>
      <form onSubmit={null}>
        <input type="text" placeholder="Search client" />
        <button>
          Search <img src={require("../../assets/Vector112.png")} alt="logo" />
        </button>
      </form>
      <table className={styles.client}>
        <thead>
          <tr>
            <th>Client</th>
            <th># send</th>
            <th>end date</th>
            <th>Interval</th>
            <th>amount</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={require("../../assets/Rectangle 23.png")}
                  height={"35px"}
                  alt="logo"
                />{" "}
                {item.Client}
              </td>
              <td>{item.Interval}</td>
              <td>{item.amount}</td>
              <td>{item.enddate}</td>
              <td>{item.send}</td>
              <td>
                <button>
                  Edit
                  <img
                    src={require("../../assets/Vectorarrow.png")}
                    height={"10px"}
                    alt="logo"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
