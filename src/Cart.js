import React from 'react';
import CartItem from './CartItem';
import CartBill from './CartBill';
import './Cart.css';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [
                {name: 'Milk', quantity: 0, unitPrice: 10}, 
                {name: 'sugar', quantity: 0, unitPrice: 20}, 
                {name: 'tea', quantity:0, unitPrice: 30},
                {name: 'lemon', quantity: 0, unitPrice: 15}, 
                {name: 'salt', quantity: 0, unitPrice: 25}, 
                {name: 'ginger', quantity:0, unitPrice: 35},
            ]
        }
    }

    componentDidMount() {
        var items = JSON.parse(localStorage.getItem("items"));
        this.setState({items});
        //console.log(JSON.parse(items));
    }
    
    setQ = (index, increase) => {
        const oldItems = this.state.items;
        if (increase)
        oldItems[index].quantity = oldItems[index].quantity  + 1;
        else {
            if (oldItems[index].quantity)
            oldItems[index].quantity = oldItems[index].quantity  - 1;
            
        }

        this.setState({items: oldItems}, () => localStorage.setItem("items", JSON.stringify(this.state.items) ));
    }


    checkout = () => {
        this.setState({items:[]});
    }
    render() {
        return (
            <div style={{height:'700px'}}>
                <div className="header">STICKY HEADER</div>
        <div className="wrapper" style = {{display: 'flex'}}>
        <div style={{width: '60%', overflow:'scroll'}}>
    {this.state.items.map((item, i) => <CartItem setQ={this.setQ} item={item} index={i}/>)}</div>
            <div style={{width: '40%', overflow:'scroll'}}><CartBill checkout={this.checkout} items={this.state.items}/></div>
        </div>
        </div>);

    }

}
export default Cart;