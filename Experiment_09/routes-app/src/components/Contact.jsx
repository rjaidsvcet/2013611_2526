import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Contact Page</h2>
      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>Your Message: {message}</p>
    </div>
  );
}

export default Contact;
