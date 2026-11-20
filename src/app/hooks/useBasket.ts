import { useState } from "react";
import { CartItem } from "../../lib/types/search";

const useBasket = () => {
    const cartJson : string | null = localStorage.getItem("cartData");//cart itemni local storagedan olamiz
    const currentCart = cartJson ? JSON.parse(cartJson): [];//cart itemni jsnon formatda objectga aylantiramiz
    const [cartItems, setCartItems] = useState<CartItem[]>(currentCart)

    const onAdd = (input:CartItem)=>{      //basketga mahsulotlarni qoshish
      const exist:any = cartItems.find(
        (item:CartItem)=> item._id === input._id
      );
      if(exist){
        const cartUpdate = cartItems.map((item: CartItem)=>
          item._id === input._id 
        ? {...exist, quantity:exist.quantity + 1 } // cartga qoshishda : agar shu mahsulot
         //                                        //cartda bolsa shunchaki soni +1 ga oshadi
        :item 
        );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
      } else { //agar cartda bolmasa cart ni yangi valuesi sifatida qoshib olamiz
        const cartUpdate = [...cartItems,{...input}];
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
      }
    }

    const onRemove = (input:CartItem)=>{ //basketdan mahsulotlarni ochirish
      const exist:any = cartItems.find(
        (item:CartItem)=> item._id === input._id
      );
      if(exist.quantity === 1){
        const cartUpdate = cartItems.filter((item:CartItem)=> item._id !== input._id);
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
      } else {
        const cartUpdate = cartItems.map((item: CartItem)=>
            item._id === input._id
          ? {...exist, quantity: exist.quantity - 1}
          : item
        );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
      }
    }

    const onDelete = (input:CartItem)=>{ //basketdan mahsulotlarni ochirish
      const cartUpdate = cartItems.filter((item:CartItem)=> item._id !== input._id);
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } 

    const onDeleteAll = () => { //basketni tozalash
      setCartItems([]);
      localStorage.removeItem("cartData");
    }


 
    return {cartItems, onAdd, onRemove, onDelete, onDeleteAll};
};

export default useBasket;   