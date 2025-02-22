import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Layout } from "./components/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
