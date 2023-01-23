import React, { useState, useEffect } from "react";

export const API = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="cnt">
      <h1>use list</h1>
      <table border={1}>
        <tr>
          <td>Name</td>
          <td>User Name</td>
          <td>Email</td>
          <td>City</td>
          <td>Longitude</td>
          <td>Comapny Name</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
            <td>{item.address.geo.lng}</td>
            <td>{item.company.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
