import React from 'react';
import './CartBill.css';
class CartItem extends React.Component {

    calcTotal = () => {
        var sum = 0;
        this.props.items.map(item => sum += item.quantity*item.unitPrice)
        return sum;
    }
    render() {
        return (<div style={{background:'pink'}}>
            {this.props.items.map(item => !!item.quantity && <div className="itemRow" style={{display:'flex'}}>
                <div>
            {item.name}</div>
            <div>{item.quantity * item.unitPrice}</div>
            </div>)}
            <div style={{display: 'flex'}}><div style={{width: '50%'}}>Grand Total: {this.calcTotal()}</div>            
            <div><button style={{width:'100px', background: 'orange'}} onClick={this.props.checkout} >checkout</button></div>
</div>

        </div>);

    }

}
export default CartItem;