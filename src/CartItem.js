import React from 'react';

class CartItem extends React.Component {
  
    render() {
        let { price, Qnty, item } = this.props.produ;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={style.image}  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-
                                     13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346275" />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}> {item}  </div>
                    <div style={{ color: '#777' }}>price: {price} </div>
                    <div style={{ color: '#777' }}> Qnty:{Qnty} </div>
                    <div className='cart-item-actions'>
                        <img alt='decrease' onClick={()=>this.props.decrease(this.props.produ)}
                            className='action-icons'
                            src='https://as2.ftcdn.net/v2/jpg/02/78/84/57/1000_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg' />

                        <img alt='increase' onClick={()=>this.props.increase(this.props.produ)}
                            className='action-icons'
                            src='https://as1.ftcdn.net/v2/jpg/01/09/34/82/1000_F_109348261_aanUtbiqtEPzkc2Xx3SmIwIKxDBcSYMt.jpg' />

                        <img alt='delete'onClick={()=>this.props.delete(this.props.produ.id)} className='action-icons'
                            src='https://thumbs.dreamstime.com/z/blank-182026259.jpg' />
                    </div>
                </div>
            </div>
        )
    }
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