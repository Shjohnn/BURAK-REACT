import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events"; //@ts-ignore
import "../../../css/home.css"

export default function Homepage(){

  //Selectors: Store => Data

  useEffect(() => {
    //Backenddan malumotlarni olish uchun fetch qilamiz => Data 

    //slice: data => store ga yuborish => state ga saqlash
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