import { Route, Routes } from "react-router"
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"
import About from "../pages/About/About"
import Products from "../pages/Products/Products"
import Cart from "../pages/Cart/Cart"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes