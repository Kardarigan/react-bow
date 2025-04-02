import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Layout } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
