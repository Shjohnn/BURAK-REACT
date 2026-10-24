import React from "react"; //@ts-ignore
import "../css/app.css";
// import {Box,Button,Container, Stack, Typography} from "@mui/material";
// import { RippleBadge } from "./MaterialTheme/styled";
import { Route ,Link , Switch, } from "react-router-dom";
import { Home } from "./screens/homePage";
import { UserPage } from "./screens/userPage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
            <li>
            <Link to="/member-page">UserPage</Link>
            </li>
        </ul>
      </nav>

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
        <Route path ="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}



export default App;





