import { Route, Routes } from "react-router"
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/products" element={<Products />} /> */}
      {/* <Route path="/cart" element={<Cart />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes