import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Layout } from "./components/layout";
import { Products } from "./pages/products";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      }
    ]
  }
])
export {router}