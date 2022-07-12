import React from "react"

const Navbar=(props)=> {

        return (
            <div style={styles.nav} >
                 <div style={styles.cartIconContainer} >
                <img  style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart-icon"/>
                <span style={styles.cartCount} > {props.count} </span>
                </div>
            </div>
        )
    
}

const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        display:'flex',
        alignItems:"center",
        justifyContent:'flex-end',
        background:"#4267b2"
    },
    cartIconContainer:{
        position:"relative"
    },
    cartCount:{
        background:"yellow",
        borderRadius:"45%",
       height:20,
        position:"absolute",
        right:16,
        top:-9
    }
}

export default Navbar

