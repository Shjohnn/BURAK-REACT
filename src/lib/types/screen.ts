import { Product  } from "./product";
import { Member } from "./member";

export interface AppRootState { //app ni state sini yaratib oldik
    homePage: HomePageState; //home page ni state sini yaratib oldik
    //productPage: ProductPageState; yaratamiz
    //ordersPage: OrdersPageState; yaratamiz
}


/**HOME PAGE STATE */
export interface HomePageState { // home page dagi malumotlarni saqlash uchun state yaratib oldik
    popularDishes: Product[]; 
    newDishes: Product[];
    topUsers: Member[];  
} 

/**PRODUCT PAGE STATE */

/**ORDERS PAGE STATE */