import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import City from "./pages/City";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<City/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default App;
