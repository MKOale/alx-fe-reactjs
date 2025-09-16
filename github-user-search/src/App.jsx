import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div>
        <h1>GitHub User Search App</h1>
        <Routes>
          {/* T0 stays intact */}
          <Route path="/" element={<p>Welcome! Start building your app.</p>} />

          {/* T1: Add the Search feature on a new route */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
