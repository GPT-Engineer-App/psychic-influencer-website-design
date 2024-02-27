import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MembershipDetails from "./pages/MembershipDetails.jsx";
import MembershipOverview from "./pages/MembershipOverview.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/memberships" element={<MembershipOverview />} />
        <Route path="/membership/:tier" element={<MembershipDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
