import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.page";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.page";
import Shop from "../src/routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
