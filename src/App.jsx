import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";
import WelcomePage from "./pages/WelcomePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* Fallback redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
