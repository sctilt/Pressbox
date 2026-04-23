import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState("front");

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#001a0d",
      color: "#e8f5ee",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: "#006a3d",
        padding: "30px 20px",
        textAlign: "center",
        borderBottom: "6px solid #ffd100"
      }}>
        <h1 style={{ fontSize: "42px", margin: 0, color: "#ffd100" }}>
          🏟️ THE PRESS BOX
        </h1>
        <p style={{ margin: "10px 0 0", fontSize: "18px", opacity: 0.9 }}>
          Sports Cards • Live Scores • Draft Tracker
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        backgroundColor: "#002814",
        padding: "12px 0",
        marginBottom: "20px"
      }}>
        {["FRONT PAGE", "MLB", "NBA", "MY PLAYERS", "WAX", "OZ"].map((label, i) => (
          <button
            key={i}
            onClick={() => setTab(label.toLowerCase().replace(" ", ""))}
            style={{
              padding: "12px 20px",
              background: tab === label.toLowerCase().replace(" ", "") ? "#ffd100" : "transparent",
              color: tab === label.toLowerCase().replace(" ", "") ? "#001a0d" : "#7ab893",
              border: "none",
              fontWeight: "bold",
              whiteSpace: "nowrap"
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ textAlign: "center", padding: "60px 20px", fontSize: "22px" }}>
        {tab === "front" && (
          <div>
            <h2>Welcome to The Press Box</h2>
            <p style={{ fontSize: "18px", marginTop: "20px" }}>
              Your daily sports cards newspaper is ready! 🎉
            </p>
          </div>
        )}
        {tab !== "front" && (
          <p>🚧 {tab.toUpperCase()} section coming soon...</p>
        )}
      </div>
    </div>
  );
}
