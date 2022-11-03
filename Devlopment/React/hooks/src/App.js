import "./App.css";
// import Ue1 from './Ue1';
import Ue2 from "./Components/Ue2";
import Infinite from "./Components/Infinite";
import Ue3 from "./Components/Ue3";

import context from "./Components/Context";
import Parent1 from "./Components/Parent1";
import Parent2 from "./Components/Parent2";
import Nav from "./Components/Nav";
import { useState } from "react";

function App() {
  const [theme, setTheame] = useState(false);
  return (
    // <Us/>
    // <Ue1 />
    // <Ue2 />
    // <Infinite />
    // <Ue3 />

    <context.Provider value={theme}>
      <button onClick={() => setTheame(!theme)}>Change Theme</button>
      <Nav />
      <Parent1 />
      <Parent2 />
    </context.Provider>
  );
}

export default App;
