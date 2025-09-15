import React, { useState } from "react";

export default function ColorSelector() {
  // useState hook to store selected color
  const [color, setColor] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Select a Color</h2>

      <button onClick={() => setColor("Red")}>Red</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Yellow")}>Yellow</button>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        {color && <p>You have selected <b>{color}</b>.</p>}
      </div>
    </div>
  );
}
