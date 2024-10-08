import React, { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  console.log("test", new Date());
  console.log("App");
  
    
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
