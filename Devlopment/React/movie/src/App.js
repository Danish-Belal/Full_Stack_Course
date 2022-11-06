import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import List from "./Components/List";
import Faviourate from "./Components/Faviourate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <List />
              </>
            }
          />
          <Route path="/ban" element={<Banner />} />
          <Route path="/fav" element={<Faviourate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
