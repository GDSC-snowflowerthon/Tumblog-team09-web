import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import MyPage from "./pages/MyPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [],
      },
      {
        path: "ranking",
        element: <Ranking />,
        children: [],
      },
      {
        path: "mypage",
        element: <MyPage />,
        children: [],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
