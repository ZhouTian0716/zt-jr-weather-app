import { Route, Routes } from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Overlay from "./components/Overlay/Overlay";
import Search from "./components/Modal/Search";
// Page inports
import Home from "./pages/Home/Home";
import City from "./pages/City";
import NotFound from "./pages/NotFound";

// Redux Hooks
import { useSelector } from "react-redux";
// Query for getting Redux State
import { searchModalStatus } from "./redux/reducers/displaySlice";

const App = () => {
  const isSearching = useSelector(searchModalStatus);
  return (
    <>
      {isSearching && <Overlay />}
      {isSearching && <Search />}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
