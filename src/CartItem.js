import React from 'react';
import './Cartitem.css';
class CartItem extends React.Component {

    
    
    render() {
        return (<div style={this.props.item.quantity ? {background: 'lightgreen'} : { background: 'white'}}className="itemRow">
            <div className="rowItemW" style={{display: 'flex'}}>
            <div className="rowItem">{`${this.props.index + 1}. `}</div>
            <div className="rowItem">{this.props.item.name}</div>
            <div className="rowItem">{'Unit Price ' + this.props.item.unitPrice}</div>

            </div>
            <div className="rowItemW" style= {{display:'flex'}}> <div className="rowItem">Quantity</div> <div style={{cursor: 'pointer'}} className="rowItem" onClick={() => this.props.setQ(this.props.index, true)}>+</div>
<div className="rowItem">{this.props.item.quantity}</div>
 <div className="rowItem" style={{cursor: 'pointer'}} onClick={() => this.props.setQ(this.props.index, false)}>-</div>
</div>

        </div>);

    }

}
export default CartItem;