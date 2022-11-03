import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Ue2() {
  const [count, setCount] = useState(0);
  //componentDidMount . if we want to execute only once.
  // this variation is needed when we want useeffect to behave like componentDidMount i.e
  // we need some side effect calls.

  // this variation will run only once , we use it for api calls and all
  useEffect(() => {
    console.log("UseEffect is Called");
    document.title = `Button is clicked ${count} Times`;
  }, []);

  console.log("Render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>sub</button>
    </div>
  );
}

export default Ue2;
