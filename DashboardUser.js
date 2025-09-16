import React, { useState } from "react";

const DashboardUser = () => {
  const [favorites] = useState([
    { id: 1, name: "ABC Supermarket", rating: 4.5 },
    { id: 2, name: "XYZ Electronics", rating: 4.0 },
  ]);

  const [reviews] = useState([
    { id: 1, store: "ABC Supermarket", review: "Great service!", rating: 5 },
    { id: 2, store: "XYZ Electronics", review: "Good prices", rating: 4 },
  ]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>User Dashboard</h1>

      {/* Quick Stats */}
      <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <div style={cardStyle}><h2>10</h2><p>Favorite Stores</p></div>
        <div style={cardStyle}><h2>5</h2><p>Reviews Given</p></div>
      </div>

      {/* Favorites */}
      <div style={sectionStyle}>
        <h3>Favorite Stores</h3>
        <ul>
          {favorites.map((store) => (
            <li key={store.id}>{store.name} ⭐ {store.rating}</li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div style={sectionStyle}>
        <h3>My Reviews</h3>
        <ul>
          {reviews.map((r) => (
            <li key={r.id}>
              <b>{r.store}</b>: "{r.review}" ⭐ {r.rating}
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

export default DashboardUser;
