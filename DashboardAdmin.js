import React, { useState } from "react";

const DashboardAdmin = () => {
  const [stores] = useState([
    { id: 1, name: "ABC Supermarket", address: "New York, NY", owner: "John Doe", rating: 4.5 },
    { id: 2, name: "XYZ Electronics", address: "Chicago, IL", owner: "Jane Smith", rating: 4.0 },
  ]);

  const [users] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Normal User" },
    { id: 2, name: "Bob Lee", email: "bob@example.com", role: "Admin" },
  ]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      {/* Stats */}
      <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <div style={cardStyle}><h2>120</h2><p>Total Users</p></div>
        <div style={cardStyle}><h2>45</h2><p>Total Stores</p></div>
        <div style={cardStyle}><h2>350</h2><p>Total Ratings</p></div>
      </div>

      {/* Store List */}
      <div style={sectionStyle}>
        <h3>Stores</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Address</th>
              <th>Owner</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.id}>
                <td>{store.name}</td>
                <td>{store.address}</td>
                <td>{store.owner}</td>
                <td>{store.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User List */}
      <div style={sectionStyle}>
        <h3>Users</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* Simple styles */
const cardStyle = {
  background: "#fff",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  textAlign: "center",
  flex: 1,
};

const sectionStyle = {
  marginTop: "30px",
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

export default DashboardAdmin;
