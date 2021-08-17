import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featureProduct } from '../../../constants/products'
type featureProductProps = {
    image?: string,
    title?: string,
    oldPrice?: string
}
const CartHeader = () => {
    const [products, setProducts] = useState<Array<featureProductProps>>(featureProduct);
    const totalItem = products.length ? products.length : 0;
    const renderCartList = () => {
        return (
            products.map((values, key) => (
                <div key={key} className="cart-item">
                    <div className="cart-item_image">
                        <Link className="cart-item_image_link" to={`/products?product=${values.title}`}>
                            <img className="img-fluid cart-item-image-img" src={values.image} alt={values.title}></img>
                        </Link>
                    </div>
                    <div className="cart-item_info">
                        <Link to={`/products?product=${values.title}`} className="cart-item_title">{values.title}</Link>
                        <p className="cart-item_quantity">Qty: {10}</p>
                        <p className="cart-item_price">{values.oldPrice}</p>
                    </div>
                    <div className="cart-item_remove">
                        <i className="ti ti-close cart-item_remove-icon" aria-hidden="true"></i>
                    </div>
                </div>
            ))

        )
    }
    return (
        <div className="header-cart">
            <span>{totalItem}</span>
            <i className="ti ti-shopping-cart"></i>

            {totalItem <= 0 ?
                <div className="header-cart-nav">
                    <h3 className="header-cart-empty">Your cart is currently empty.</h3>
                </div> :
                <div className="header-cart-nav">
                    <div className="cart-list">
                        {renderCartList()}
                    </div>
                    <div className="header-cart_summary">
                        <div className="header-cart_total-item">
                            <p className="header-cart_total">Total</p>
                            <p className="header-cart_price">$35</p>
                        </div>
                        <div className="header-cart_function">
                            <div className="header-cart_viewcart">View Cart</div>
                            <div className="header-cart_checkout">Checkout</div>
                        </div>
                    </div>

                </div >}

        </div >
    )
}

export default CartHeader
