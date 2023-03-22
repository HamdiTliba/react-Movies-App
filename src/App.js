import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import ContextProvider from "./components/context/GlobalContext";

function App() {
  return (
    <div>
      <Router>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
