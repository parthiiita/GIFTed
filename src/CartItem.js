import React from 'react';

class CartItem extends React.Component {

    
    
    render() {
        return (<div>
            <div style={{display: 'flex'}}>
            <div>{`${this.props.index + 1}. `}</div>
            <div>{this.props.item.name}</div>
            </div>
            <div style= {{display:'flex'}}> Quantity <div onClick={() => this.props.setQ(this.props.index, true)}>+</div>
<div>{this.props.item.quantity}</div>
 <div onClick={() => this.props.setQ(this.props.index, false)}>-</div>
</div>

        </div>);

    }

}
export default CartItem;