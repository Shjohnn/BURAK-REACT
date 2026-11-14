import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events"; //@ts-ignore
import "../../../css/home.css"

import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/**REDUX SLICE & SELECTOR  */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function Homepage(){
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  //Selectors: Store => Data

  useEffect(() => {
//     //Backenddan malumotlarni olish uchun fetch qilamiz => Data 
//     const result = [
//     {
//         "_id": "6ad5f864c17e0352bd9c63d8",
//         "productStatus": "PROCESS",
//         "productCollection": "DISH",
//         "productName": "grr",
//         "productPrice": 123,
//         "productLeftCount": 123123,
//         "productSize": "NORMAL",
//         "productVolume": 1.5,
//         "productDesc": "1231",
//         "productImages": [
//             "uploads/products/0bd838ab-b03a-4688-884f-d7aa2b9c2e21.png"
//         ],
//         "productViews": 0,
//         "createdAt": "2026-10-19T11:00:52.619Z",
//         "updatedAt": "2026-10-19T11:25:22.889Z",
//         "__v": 0
//     },
//     {
//         "_id": "6ad4c1cd21006561d784687e",
//         "productStatus": "PROCESS",
//         "productCollection": "DISH",
//         "productName": "steak",
//         "productPrice": 20,
//         "productLeftCount": 50,
//         "productSize": "LARGE",
//         "productVolume": 1,
//         "productDesc": "asdadfa",
//         "productImages": [
//             "uploads/products/58efc101-3c12-4838-ae5c-8a145b62ee8a.png",
//             "uploads/products/00575cf1-8348-4723-aa2a-36ad6b280dc9.jpg"
//         ],
//         "productViews": 2,
//         "createdAt": "2026-10-18T12:55:41.142Z",
//         "updatedAt": "2026-11-05T10:27:31.139Z",
//         "__v": 0
//     }
// ]
//     //slice: data => store ga yuborish => state ga saqlash
//     // @ts-ignore
//     setPopularDishes(result);

  }, []);
// console.log("PopularDishes:", popularDishes);

  return <div className={"homepage"}> 
  <Statistics/>
  <PopularDishes/>
  <NewDishes/>
  <Advertisement/>
  <ActiveUsers/>
  <Events/>
  </div>;
}