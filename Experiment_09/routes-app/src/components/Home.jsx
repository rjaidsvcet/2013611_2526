import React, { useState } from "react";

function Home({ name }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This site is developed by {name}.</p>

      <h3>Counter Example using useState:</h3>
      <p>Counter Value: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default Home;
