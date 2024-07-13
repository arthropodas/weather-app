import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../components/layout/Layout";

const routes =[
    {
        path:"/",
        element: <Layout/>,
        children: [
   
          {
            path: "/home",
            element: <Home/>,
          },]
    },

]

const router = createBrowserRouter(routes);
export default router;