import React from 'react'
import { Link } from 'react-router-dom'

const CartHeader = () => {
    return (
        <div className="header-cart">
            <span>0</span>
            <i className="ti ti-shopping-cart"></i>
            <div className="header-cart-nav">
                <div className="cart-list">

                    <div className="cart-item">

                        <div className="cart-item_image">
                        <Link className="cart-item_image_link" to="/"></Link>
                        </div>

                        <div className="cart-item_info">
                            <Link to="/" className="cart-item_title"></Link>
                            <p className="cart-item_quantity"></p>
                            <p className="cart-item_price"></p>
                        </div>

                    </div>
                    <div className="header-cart_summary">
                        <div className="header-cart_total">
                            <p className="header-cart_total">Total</p>
                            <p className="header-cart_price"></p>
                        </div>
                        <div className="hearder-cart_function">
                            <div className="header-cart_viewcart">View Cart</div>
                            <div className="header-cart_checkout">Checkout</div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CartHeader
