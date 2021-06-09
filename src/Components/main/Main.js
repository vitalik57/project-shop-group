import data from "../data";
import Laptops from "../phoneList/Laptops";
import PhoneList from "../phoneList/PhoneList";
import React, { Component } from 'react';
import CartList from "../cart/CartList";
class Main extends Component {
    state = {
        cart:[],
    }
    addToCart = (product) => {
        this.setState((prevState) => ({
            cart:[...prevState.cart,product],
        }))
    }
    removeFromCart = (id) => this.setState((prevState) => ({ cart: [...prevState.cart.filter((product) => product.id !== id)] }));
    removeAllCart = () => {
        this.setState({cart:[]})
    }
    
    
    render() {
        return <main>
            <CartList cart={this.state.cart} removeFromCart={this.removeFromCart} removeAllCart={this.removeAllCart}/>
            <PhoneList phones={data.phones} addToCart={this.addToCart}
            />
            
            <Laptops laptops={data.laptops} addToCart={this.addToCart}/>
        </main>
    }
}
export default Main;