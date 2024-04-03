import "./App.scss";
import Dog from "./components/Dog/Dog";
import Shop from "./components/Shop/Shop";
import Cat from "./components/Cat/Cat";
import Home from "./components/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </>
  );
}

export default App;
