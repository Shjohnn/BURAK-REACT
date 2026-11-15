import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events"; //@ts-ignore
import "../../../css/home.css"
import {  useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes, setNewDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/**REDUX SLICE & SELECTOR  */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});

export default function Homepage(){
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());
  //Selectors: Store => Data

    console.log(process.env.REACT_APP_API_URL);
  useEffect(() => {
    //backenddan ma'lumotlarni olish /fetch qilish
    const product = new ProductService();
    product.getProducts( {
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH
    })
    .then((data) => {
      console.log("Data passed here:", data);
      setPopularDishes(data);
    })
    .catch((err) => {
      console.error("Error fetching popular dishes:", err);
    });
    
    product.getProducts( {
      page: 1,
      limit: 4,
      order: "createdAt",
      productCollection: ProductCollection.DISH
    })
    .then((data) => {
      console.log("Data passed here:", data);
      setNewDishes(data);
    })
    .catch((err) => {
      console.error("Error fetching new dishes:", err);
    });

  }, []);

  return <div className={"homepage"}> 
  <Statistics/>
  <PopularDishes/>
  <NewDishes/>
  <Advertisement/>
  <ActiveUsers/>
  <Events/>
  </div>;
}