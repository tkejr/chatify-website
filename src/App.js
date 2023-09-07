import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Privacy from "./pages/Privacy";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/privacy" element={<Privacy />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
