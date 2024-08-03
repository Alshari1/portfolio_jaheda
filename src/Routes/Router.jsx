import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PortfolioDetails from "../Components/Portfolio/PortfolioDetails/PortfolioDetails";
import Add from "../Components/Portfolio/Add/Add";
import UpdatePortfolio from "../Components/Portfolio/UpdatePortfolio/UpdatePortfolio";
import Inventory from "../Components/Inventory/Inventory";

export  const router = createBrowserRouter([
   {
    path:'/',
    element:<App></App>,
   },
   {
      path:'/portfolio/details',
      element:<PortfolioDetails></PortfolioDetails>
   },
   {
      path:'/portfolio/add',
      element:<Add value={'Submit'}></Add>
   },
   {
      path:'/portfolio/update',
      element:<UpdatePortfolio></UpdatePortfolio>,
   },
   {
      path:'/inventory',
      element:<Inventory></Inventory>,
      loader:() => fetch('http://localhost:5000/clients')
   }
])