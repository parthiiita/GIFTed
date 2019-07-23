import React from 'react';

class CartItem extends React.Component {

    calcTotal = () => {
        var sum = 0;
        this.props.items.map(item => sum += item.quantity*item.unitPrice)
        return sum;
    }
    render() {
        return (<div>
            {this.props.items.map(item => !!item.quantity && <div style={{display:'flex'}}>
                <div>
            {item.name}</div>
            <div>{item.quantity * item.unitPrice}</div>
            </div>)}
            <div>Grand Total: {this.calcTotal()}</div>
        </div>);

    }

}
export default CartItem;