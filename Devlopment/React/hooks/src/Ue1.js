import React from "react";
import {useState} from 'react'
import {useEffect} from 'react'


function Ue1() {
  const [count, setCount] = useState(0);
  //works as  componentDidMount+componentDidUpdate
  useEffect(() => {
    console.log("UseEffect is Called");
    document.title = `Button is clicked ${count} Times`
    console.log({count})
  });

  console.log("Render")
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>sub</button>
    </div>
  );
}

export default Ue1;
