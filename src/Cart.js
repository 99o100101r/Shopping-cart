import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
           products:[{
              item:"phone",
              Qnty:3,
              price:666,
              id:1
           },{
            item:"laptop",
            Qnty:8,
            price:66,
            id:2
           },{
            item:"book",
            Qnty:2,
            price:666,
            id:3
           }]
        }
    }
    render() {
        const {products}=this.state;
        return (
            <div className="Cart">
               {products.map((product)=>{
                   return (
                    <CartItem  produ={product} key={product.id} />
                   )
               })}
             </div>
        )
    }

}

export default Cart;