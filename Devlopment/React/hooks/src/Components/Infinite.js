import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Infinite() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect is Called");
    let rand = Math.random() * 100;
    
    setCount(10);  // rand this will setState and rander will call everytime and it will goes into infinte render 
    // setCount(rand) this will run infinity time cuz value is beign changing. but constat value won't affect it.
  });
  console.log("Render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>sub</button>
    </div>
  );
}

export default Infinite
