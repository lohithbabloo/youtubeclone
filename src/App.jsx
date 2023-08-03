import Completesidebar from "./components/completesidebar";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import Videosection from "./components/videosection";

function App() {
  const [menuInput, setMenuInput] = useState(false);
  const openClose = (value) => {
    setMenuInput(value);
  };

  return (
    <div className="">
      <Navbar openCloseFunc={openClose} />
      <div className="flex">
        <div>{menuInput ? <Sidebar /> : <Completesidebar />}</div>
        <div>
          <Videosection />
        </div>
      </div>
    </div>
  );
}

export default App;
