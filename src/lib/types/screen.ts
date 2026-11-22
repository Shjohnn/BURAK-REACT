import { Product  } from "./product";
import { Member } from "./member";
import { Order } from "./order";

export interface AppRootState { //app ni state sini yaratib oldik
    homePage: HomePageState; //home page dagi 3ta malumotlarni saqlash uchun state yaratib oldik
    productPage: ProductsPageState; 
    ordersPage: OrdersPageState; 
}


/**HOME PAGE STATE */
export interface HomePageState { // home page dagi malumotlarni saqlash uchun state yaratib oldik
    popularDishes: Product[]; 
    newDishes: Product[];
    topUsers: Member[];  
} 

/**PRODUCT PAGE STATE */
export interface ProductsPageState {
    restaurant:Member | null;
    chosenProduct: Product| null;
    products: Product[]
}


/**ORDERS PAGE STATE */

export interface OrdersPageState {
    pausedOrders: Order[];
    processOrders: Order[] ;
    finishedOrders: Order[] ;
}

//bu fayl vazifasi ts ga omborda nima bor deb aytib beradi. yani state ni type sini belgilaydi.