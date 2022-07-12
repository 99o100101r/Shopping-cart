import React from "react";
import CartItem from "./CartItem";


const Cart=(props)=> {
   
    
        const {products}=props;
        return (
            <div className="Cart">
               {products.map((product)=>{
                   return (
                    <CartItem  produ={product} key={product.id} 
                             increase={props.increase} decrease={props.decrease} 
                               delete={props.delete} />
                   )
               })}
             </div>
        )
    }



export default Cart;