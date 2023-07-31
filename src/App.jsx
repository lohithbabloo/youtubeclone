import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  const openClose = (value) => {
    console.log(value);
  };
  return (
    <>
      <Navbar openCloseFunc={openClose} />
      <Sidebar />
    </>
  );
}

export default App;
