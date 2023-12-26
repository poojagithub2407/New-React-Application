import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Layout/Navbar/Navbar";
import CreateAds from "./Components/CreateADS/CreateAds"
import AppRoutes from "./Components/AppRoutes";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
