import React, {useState} from "react"; 

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
import { CartItem } from "../lib/types/search";

function App() {
const location = useLocation();

const cartJson : string | null = localStorage.getItem("cartData");//cart itemni local storagedan olamiz
const currentCart = cartJson ? JSON.parse(cartJson): [];//cart itemni jsnon formatda objectga aylantiramiz
const [cartItems, setCartItems] = useState<CartItem[]>(currentCart)
 
//Handlers 
const onAdd = (input:CartItem)=>{      //basketga mahsulotlarni qoshish
  const exist:any = cartItems.find(
    (item:CartItem)=> item._id === input._id
  );
  if(exist){
    const cartUpdate = cartItems.map((item: CartItem)=>
      item._id === input._id 
    ? {...exist, quantity:exist.quantity + 1 } // cartga qoshishda : agar shu mahsulot
     //                                        //cartda bolsa shunchaki soni +1 ga oshadi
    :item 
    );
    setCartItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  } else { //agar cartda bolmasa cart ni yangi valuesi sifatida qoshib olamiz
    const cartUpdate = [...cartItems,{...input}];
    setCartItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  }
}
  return (
    <>
    {location.pathname === "/" ? <HomeNavbar/> :
     <OtherNavbar cartItems={cartItems}/> }
      <Switch>        
        <Route path="/products">
          <ProductsPage onAdd= {onAdd} />
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





