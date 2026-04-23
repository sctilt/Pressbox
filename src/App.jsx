import { useState } from 'react';

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#001a0d",
      color: "#e8f5ee",
      fontFamily: "Arial, sans-serif",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "48px", color: "#ffd100", marginBottom: "20px" }}>
        🏟️ THE PRESS BOX
      </h1>
      <p style={{ fontSize: "24px" }}>
        Sports Cards Tracker
      </p>
      <p style={{ marginTop: "50px", fontSize: "18px", color: "#7ab893" }}>
        ✅ Successfully Deployed!<br/>
        Working on Android too.
      </p>
    </div>
  );
}
