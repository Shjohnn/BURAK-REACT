import {createSlice } from '@reduxjs/toolkit';
import {OrdersPageState } from '../../../lib/types/screen';

const initialState: OrdersPageState = {
    pausedOrders: [],
    processOrders: [],
    finishedOrders: [],      //shu 3 tasi state ni boshlangi qiymati 
};  //dastur ishga tushganda 3 ta royhat bo'sh bo'lishi kerak, 
// shuning uchun initial state ni bo'sh array qilib oldik.

const ordersPageSlice = createSlice({
    name: 'ordersPage', //
    initialState,
    reducers: {
        setPausedOrders: (state, action) => {
            state.pausedOrders = action.payload;
        },
        setProcessOrders: (state, action) => {
            state.processOrders = action.payload;
        },
        setFinishedOrders: (state, action) => {
            state.finishedOrders = action.payload;
        }
    }
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } = ordersPageSlice.actions;
const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;