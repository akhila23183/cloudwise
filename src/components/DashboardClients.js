import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardClients = () => {

  const [data, setData] = useState([]);

  const clientId = localStorage.getItem(
    "client_id"
  );

  useEffect(() => {

    axios
      .get(
        `http://127.0.0.1:8000/client/client-data/${clientId}/`
      )

      .then((response) => {

        console.log(response.data);

        setData(response.data.data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, [clientId]);

  return (

    <div style={{ padding: "20px" }}>

      <h1>Dashboard</h1>

      <h2>
        Client ID: {clientId}
      </h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >

        <thead>

          <tr>

            <th>Account Id</th>
            <th>Client ID</th>
            <th>Cloud Provider</th>
            <th>Cost</th>
            <th>Currency</th>
            <th>Date</th>
            <th>Environment</th>
            <th>ID</th>
            <th>Region</th>
            <th>Resource ID</th>
            <th>Service</th>
            <th>Team</th>
            <th>Usage</th>

          </tr>

        </thead>

        <tbody>

          {Array.isArray(data) &&
            data.map((item, index) => (

              <tr key={index}>

                <td>{item.account_id}</td>
                <td>{item.client_id}</td>
                <td>{item.cloud_provider}</td>
                <td>{item.cost}</td>
                <td>{item.currency}</td>
                <td>{item.date}</td>
                <td>{item.environment}</td>
                <td>{item.id}</td>
                <td>{item.region}</td>
                <td>{item.resource_id}</td>
                <td>{item.service}</td>
                <td>{item.team}</td>
                <td>{item.usage}</td>

              </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default DashboardClients;