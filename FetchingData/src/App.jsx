import One from "./Components/One";
import Two from "./Components/Two";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/One">Simple Fetching Data</Link>
          </li>
          <li>
            <Link to="/Two">Data Fetching Using useEffect</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/One" element={<One />} />
        <Route path="/Two" element={<Two />} />
      </Routes>
    </Router>
  );
}

export default App;
