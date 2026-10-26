import React from "react"; 

// import {Box,Button,Container, Stack, Typography} from "@mui/material";
// import { RippleBadge } from "./MaterialTheme/styled";
import { Route ,Link , Switch, useLocation} from "react-router-dom";
import  Homepage  from "./screens/homePage";
import  UserPage from "./screens/userPage";
import  ProductsPage  from "./screens/productsPage";
import  OrdersPage  from "./screens/ordersPage";
import HomeNavbar  from "./components/headers/HomeNavbar";
import  OtherNavbar from "./components/headers/OtherNavbar";//@ts-ignore
import Footer  from "./components/footer"; //@ts-ignore
import "../css/app.css";//@ts-ignore
import "../css/navbar.css";//@ts-ignore
import "../css/footer.css";
import  HelpPage from "./screens/helpPage";

function App() {
const location = useLocation();
 

  return (
    <>
    {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/> }
      <Switch>        
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path= "/orders">
          <OrdersPage/>
        </Route>
        <Route path= "/member-page">
          <UserPage/>
        </Route>
        <Route path= "/help">
          <HelpPage/>
        </Route>
        <Route path ="/">
          <Homepage/>
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}



export default App;





