import React from 'react';
import CartItem from './CartItem';
import CartBill from './CartBill';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [
                {name: 'Milk', quantity: 0, unitPrice: 10}, 
                {name: 'sugar', quantity: 0, unitPrice: 20}, 
                {name: 'tea', quantity:0, unitPrice: 30}]
        }
    }
    
    setQ = (index, increase) => {
        const oldItems = this.state.items;
        if (increase)
        oldItems[index].quantity = oldItems[index].quantity  + 1;
        else {
            if (oldItems[index].quantity)
            oldItems[index].quantity = oldItems[index].quantity  - 1;
            
        }

        this.setState({items: oldItems});
    }
    render() {
        return (<div style = {{display: 'flex'}}>
        <div style={{width: '60%'}}>
    {this.state.items.map((item, i) => <CartItem setQ={this.setQ} item={item} index={i}/>)}</div>
            <div style={{width: '40%'}}><CartBill items={this.state.items}/></div>
        </div>);

    }

}
export default Cart;