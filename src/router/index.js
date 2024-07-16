import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../components/layout/Layout";
import i18n from "../components/i18next";

const routes =[
    {
        path:"/",
        element: <Layout/>,
        children: [
   
          {
            path: "/",
            element: <Home/>,
          },]
    },

]

const router = createBrowserRouter(routes);
export default router;