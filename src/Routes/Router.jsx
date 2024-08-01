import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PortfolioDetails from "../Components/Portfolio/PortfolioDetails/PortfolioDetails";
import Add from "../Components/Portfolio/Add/Add";

export  const router = createBrowserRouter([
   {
    path:'/',
    element:<App></App>,
   },
   {
      path:'/details',
      element:<PortfolioDetails></PortfolioDetails>
   },
   {
      path:'/portfolio/add',
      element:<Add></Add>
   }
])