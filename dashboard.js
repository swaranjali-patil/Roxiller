import React, { useState } from "react";

const AdminDashboard = () => {
  const [stores, setStores] = useState([
    { id: 1, name: "ABC Supermarket", address: "New York, NY", owner: "John Doe", rating: 4.5 },
    { id: 2, name: "XYZ Electronics", address: "Chicago, IL", owner: "Jane Smith", rating: 4.0 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Normal User" },
    { id: 2, name: "Bob Lee", email: "bob@example.com", role: "Admin" },
  ]);

  const [searchStore, setSearchStore] = useState("");
  const [searchUser, setSearchUser] = useState("");

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchStore.toLowerCase()) ||
      store.address.toLowerCase().includes(searchStore.toLowerCase()) ||
      store.owner.toLowerCase().includes(searchStore.toLowerCase())
  );

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.email.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.role.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f6fa", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "#2c3e50", color: "white", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: "22px" }}>Admin Dashboard</h1>
        <nav>
          <a href="#" style={{ color: "white", marginLeft: "20px", textDecoration: "none" }}>Stores</a>
          <a href="#" style={{ color: "white", marginLeft: "20px", textDecoration: "none" }}>Users</a>
          <a href="#" style={{ color: "white", marginLeft: "20px", textDecoration: "none" }}>Ratings</a>
          <button style={{ marginLeft: "20px", background: "#e74c3c", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" }}>
            Logout
          </button>
        </nav>
      </header>

      <div style={{ padding: "20px" }}>
        {/* Stats Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
          <div style={cardStyle}>
            <h2>120</h2>
            <p>Total Users</p>
          </div>
          <div style={cardStyle}>
            <h2>45</h2>
            <p>Total Stores</p>
          </div>
          <div style={cardStyle}>
            <h2>350</h2>
            <p>Total Ratings</p>
          </div>
        </div>

        {/* Stores Table */}
        <div style={tableSection}>
          <h3>Stores</h3>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Search stores..."
              value={searchStore}
              onChange={(e) => setSearchStore(e.target.value)}
              style={inputStyle}
            />
          </div>
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
              {filteredStores.map((store) => (
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

        {/* Users Table */}
        <div style={tableSection}>
          <h3>Users</h3>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Search users..."
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              style={inputStyle}
            />
          </div>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
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
    </div>
  );
};

/* Styles */
const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const tableSection = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  marginBottom: "30px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const inputStyle = {
  padding: "8px",
  width: "250px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

export default AdminDashboard;
