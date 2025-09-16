import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>GitHub User Search App</h1>
        <Routes>
          <Route path="/" element={<p>Welcome! Start building your app.</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
