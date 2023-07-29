import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';


const initialState = {
    productList: [],
    cartItems: []

}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            console.log(action);
            state.productList = [...action.payload]
        },
        addCartItems: (state, action) => {
            const checkitem = state.cartItems.some(el => el._id === action.payload._id)
            console.log(checkitem);

            if (checkitem) {
                toast("Item Selected Already, Pick Another")
            } else {
                toast("Item Selected, Pick Another")

                const total = action.payload.price
                state.cartItems = [...state.cartItems, { ...action.payload, quantit: 1, total: total }]
            }

        },
        deleteCartItems: (state, action) => {
            toast("1 item deleted")
            const index = state.cartItems.findIndex((el) => el._id === action.payload)
            state.cartItems.splice(index, 1)
            console.log(index);

        },
        increaseQty: (state, action) => {
            const index = state.cartItems.findIndex((el) => el._id === action.payload);
            let quantit = state.cartItems[index].quantit;
            const quantitIncr = ++quantit
            state.cartItems[index].quantit = quantitIncr;

            const price = state.cartItems[index].price
            const total = price * quantitIncr

            state.cartItems[index].total = total

        },
        decreaseQty: (state, action) => {
            const index = state.cartItems.findIndex((el) => el._id === action.payload)
            let quantit = state.cartItems[index].quantit
            if (quantit > 1) {
                const quantitDcr = --quantit
                state.cartItems[index].quantit = quantitDcr

                const price = state.cartItems[index].price
                const total = price * quantitDcr

                state.cartItems[index].total = total

            }


        },

    }

})


export const { setDataProduct, addCartItems, deleteCartItems, increaseQty, decreaseQty } = productSlice.actions

export default productSlice.reducer