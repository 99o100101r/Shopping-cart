
import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

import * as firebase from 'firebase';


class App extends React.Component {
     
  constructor() {
    super()
    this.state = {
       products:[],
       loading:true,
      //  db:firebase.firestore()
    }
};

  componentDidMount(){
      // firebase
      // .firestore()
      // .collection('products')
      // .get()
      // .then((snapshot)=>{
      //     console.log(snapshot)
      //     let products=   snapshot.docs.map((doc)=>{
      //        console.log(doc.data());
      //        const data= doc.data();
      //        data['id']=doc.id;
      //        return data;
      //     })
      //     this.setState({products:products,
      //       loading:false
      //     })
      // })
      firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot)=>{
        console.log(snapshot)
        let products=   snapshot.docs.map((doc)=>{
           console.log(doc.data());
           const data= doc.data();
           data['id']=doc.id;
           return data;
        })
        this.setState({products:products,
          loading:false
        })
    })
  }
  
  

   plus=(product)=>{
  const {products}=this.state;
  const index = products.indexOf(product);
  // products[index].Qnty +=1;
  // this.setState({products:products})
  //   console.log('increase')
  const docRef=firebase.firestore().collection('products').doc(products[index].id);
   
  docRef.update({
    Qnty:products[index].Qnty+1
  }).then(()=>{
      console.log('successfully updated')
  }).catch(()=>{
    console.log('error in updating')
  })
}

addProduct=()=>{
  firebase
  .firestore()
      .collection('products')
      .add({
        Qnty:2,
        item:'chappal',
        price:222
      })
      .then((docRef)=>{
          console.log(docRef);
      })
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
         products:items,
     })
  }

  getCartCount=()=>{
      const {products}=this.state;
      let count= 0;
      products.forEach((item)=>{
        count +=item.Qnty
      })
      return count;
  }

  render(){ 
  return (
    <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding:10 ,fontSize:20}}>add product</button>
         <Cart  products={this.state.products}
              increase={this.plus}
               decrease={this.minus} 
               delete={this.delete} />
               {this.state.loading && <h1>loading data</h1> }
    </div>
  );
  }
}

export default App;
