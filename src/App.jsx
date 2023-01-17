import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import Main from "./layout/Main";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";

// React Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/page-not-found",
        element: <div>Page Not Found Router</div>,
      },
    ],
  },
]);

const App = () => {
  return (
    <div style={{ padding: "40px 100px" }}>
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </div>
  );
};

export default App;
