import { Route, Routes } from "react-router"
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"
import About from "../pages/About/About"
import Cart from "../pages/Cart/Cart"
import ListProducts from "../pages/ListProducts/ListProducts"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={< ListProducts/>} />
      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes