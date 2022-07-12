import React from 'react';

const CartItem=(props)=>  {
  
    
        let { price, Qnty, item } = props.produ;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt='cart-icon' style={style.image}  src="https://media.istockphoto.com/photos/wind-farm-at-sunset-picture-id1301243910?s=612x612" />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}> {item}  </div>
                    <div style={{ color: '#777' }}>price: {price} </div>
                    <div style={{ color: '#777' }}> Qnty:{Qnty} </div>
                    <div className='cart-item-actions'>
                        <img alt='decrease' onClick={()=>props.decrease(props.produ)}
                            className='action-icons'
                            src='htt57/1000_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg' />

                        <img alt='increase' onClick={()=>props.increase(props.produ)}
                            className='action-icons'
                            src='https://as1.ftcdn.net/v2/jpg/01/09/34/82/1000_F_109348261_aanUtbiqtEPzkc2Xx3SmIwIKxDBcSYMt.jpg' />

                        <img alt='delete'onClick={()=>props.delete(props.produ.id)} className='action-icons'
                            src='https://thumbs.dreamstime.com/z/blank-182026259.jpg' />
                    </div>
                </div>
            </div>
        )
    }


const style = {
    image: {
        height: 110,
        width: 110,
        marginRight: 10,
        background: "#ccc"
    }
}

export default CartItem;