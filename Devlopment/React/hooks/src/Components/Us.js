import React from "react";
import { useState } from "react";

function Us() {
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState(null);
  const [visiblity, setVisiblity] = useState(false);
  console.log(msg);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>sub</button>
      <div>
        <br></br>
        <button
          onClick={() => {
            setMsg("Massage is updated with Hooks");
            setVisiblity(!visiblity);
          }}
        >
          {visiblity ? `Click to hide msg` : `Click to see Hidden Msg`}
        </button>
        {visiblity && <h1>{msg}</h1>}
      </div>
    </div>
  );
}

export default Us;
