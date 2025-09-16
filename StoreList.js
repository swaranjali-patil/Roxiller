import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./StoreList.css";

const StoreList = () => {
  const { user } = useContext(AuthContext);

  // Dummy store data
  const [stores, setStores] = useState([
    { id: 1, name: "ABC Bakery", address: "123 Main St", rating: 4.2, userRating: null, ownerId: 3 },
    { id: 2, name: "XYZ Mart", address: "45 Market St", rating: 3.8, userRating: 5, ownerId: 4 },
    { id: 3, name: "Fresh Fruits", address: "22 Green Road", rating: 4.5, userRating: null, ownerId: 5 },
  ]);

  const handleRating = (storeId, rating) => {
    setStores(prev =>
      prev.map(store =>
        store.id === storeId ? { ...store, userRating: rating } : store
      )
    );
  };

  return (
    <div className="store-list-container">
      <h1>Welcome to Store Rating Platform</h1>
      <p>Browse all registered stores and see their ratings.</p>

      <div className="store-cards">
        {stores.map(store => (
          <div key={store.id} className={`store-card ${user?.role === "owner" && user?.id === store.ownerId ? "my-store" : ""}`}>
            <h3>{store.name}</h3>
            <p><strong>Address:</strong> {store.address}</p>
            <p><strong>Overall Rating:</strong> ⭐ {store.rating}</p>

            {/* Normal user actions */}
            {user?.role === "normal" && (
              <div className="rating-actions">
                <p>Your Rating: {store.userRating ? `⭐ ${store.userRating}` : "Not rated yet"}</p>
                {[1, 2, 3, 4, 5].map(r => (
                  <button
                    key={r}
                    className={`rating-btn ${store.userRating === r ? "active" : ""}`}
                    onClick={() => handleRating(store.id, r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}

            {/* Store Owner highlight */}
            {user?.role === "owner" && user?.id === store.ownerId && (
              <p className="owner-tag">⭐ This is your store</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
