import React from "react";
import { useState, useEffect } from "react";
function Ue3() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState({ sayHi: "This is Hook" });

  // CDM+CDU run for both
  useEffect(() => {
    console.log("useEffect of CDM+CDU is called");
  });

  // useeffect only run for count valued change
  useEffect(() => {
    console.log("useEffect of Count is called");
  }, [count]); // when count will update this will render.

  // useffect will run only if msg is changed.
  useEffect(() => {
    console.log("useEffect of Msg is called");
  }, [msg]);

  let handleMsg = (e) => {
    msg.sayHi = e.target.value;
    console.log(msg);
    setMsg({ ...msg });
  };
  console.log("Render")
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>sub</button>
      <input
        type="text"
        value={msg.sayHi}
        onChange={(e) => handleMsg(e)}
      ></input>
    </div>
  );
}

export default Ue3;
