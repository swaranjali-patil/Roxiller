import React, { useState } from "react";

const DashboardOwner = () => {
  const [stores] = useState([
    { id: 1, name: "ABC Supermarket", reviews: 50, avgRating: 4.5 },
    { id: 2, name: "XYZ Electronics", reviews: 30, avgRating: 4.2 },
  ]);

  const [recentReviews] = useState([
    { id: 1, user: "Alice", comment: "Loved your service!", rating: 5 },
    { id: 2, user: "Bob", comment: "Good quality products.", rating: 4 },
  ]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Store Owner Dashboard</h1>

      {/* Store Stats */}
      <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <div style={cardStyle}><h2>{stores.length}</h2><p>My Stores</p></div>
        <div style={cardStyle}><h2>80</h2><p>Total Reviews</p></div>
        <div style={cardStyle}><h2>4.3</h2><p>Avg Rating</p></div>
      </div>

      {/* My Stores */}
      <div style={sectionStyle}>
        <h3>My Stores</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Reviews</th>
              <th>Avg Rating</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.id}>
                <td>{store.name}</td>
                <td>{store.reviews}</td>
                <td>{store.avgRating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Reviews */}
      <div style={sectionStyle}>
        <h3>Recent Reviews</h3>
        <ul>
          {recentReviews.map((r) => (
            <li key={r.id}>
              <b>{r.user}</b>: "{r.comment}" ⭐ {r.rating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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

export default DashboardOwner;
