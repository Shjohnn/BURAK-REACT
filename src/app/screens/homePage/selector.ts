import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDishes = createSelector(
  selectHomePage, //initial state ni olish uchun 
                    // selectHomePage selectorini ishlatamiz
  (homePage) => homePage.popularDishes
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (homePage) => homePage.newDishes
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (homePage) => homePage.topUsers
);