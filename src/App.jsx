import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Layout, SingleProduct, ProductsPage } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:product" element={<SingleProduct />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/products/:category" element={<ProductsPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
