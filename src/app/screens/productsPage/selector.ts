import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";


const selecetProductsPage = (state: AppRootState) => state.productPage;

export const retrieveRestaurant = createSelector(
    selecetProductsPage,
    (ProductsPage) => ProductsPage.restaurant
);

export const retrieveChosenProduct = createSelector(
    selecetProductsPage,
    (ProductsPage) => ProductsPage.chosenProduct
);

export const retrieveProducts= createSelector(
    selecetProductsPage,
    (ProductsPage) => ProductsPage.products
);