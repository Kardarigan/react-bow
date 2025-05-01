import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Layout, SingleProduct } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:product" element={<SingleProduct />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
