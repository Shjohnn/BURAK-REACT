import {createSlice } from '@reduxjs/toolkit';
import { HomePageState } from '../../../lib/types/screen';

const initialState: HomePageState = {
    popularDishes: [],
    newDishes: [],
    topUsers: [],      //shu 3 tasi state ni boshlangi qiymati 
};  //dastur ishga tushganda 3 ta royhat bo'sh bo'lishi kerak, 
// shuning uchun initial state ni bo'sh array qilib oldik.

const homePageSlice = createSlice({
    name: 'homePage', //
    initialState,
    reducers: {
        setPopularDishes: (state, action) => {
            state.popularDishes = action.payload;
        },
        setNewDishes: (state, action) => {
            state.newDishes = action.payload;
        },
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        }
    }
});

export const { setPopularDishes, setNewDishes, setTopUsers } = homePageSlice.actions;
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;