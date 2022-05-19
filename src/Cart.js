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
    };
       plus=(product)=>{
      const {products}=this.state;
      const index = products.indexOf(product);
      products[index].Qnty +=1;
      this.setState({products:products})
        console.log('increase')
    }
    minus=(product)=>{
        const {products}=this.state;
        const index = products.indexOf(product);
        products[index].Qnty -=1;
        this.setState({products:products})
          console.log('minus')
      }
       delete= (id)=>{
         const{products}=this.state;
         
        const items= products.filter((item)=>item.id !== id)
         this.setState({
             products:items
         })
      }

    render() {
        const {products}=this.state;
        return (
            <div className="Cart">
               {products.map((product)=>{
                   return (
                    <CartItem  produ={product} key={product.id} 
                             increase={this.plus} decrease={this.minus} 
                               delete={this.delete} />
                   )
               })}
             </div>
        )
    }

}

export default Cart;