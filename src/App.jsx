import Completesidebar from "./components/completesidebar";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import Videosection from "./components/videosection";

function App() {
  const [menuInput, setMenuInput] = useState(true);
  const openClose = (value) => {
    setMenuInput(value);
    console.log(value);
  };
  return (
    <>
      <Navbar openCloseFunc={openClose} />
      <div className="flex">
        {menuInput ? <Sidebar /> : <Completesidebar />}
        <Videosection />
      </div>
    </>
  );
}

export default App;
