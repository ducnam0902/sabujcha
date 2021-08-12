import React from 'react'
import { Link } from 'react-router-dom'
import payment from '../../assets/images/payment.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">

                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <p className="footer-item_title">My Account</p>
                                <ul className="footer-list">
                                    <li className="footer-list_item">My Account</li>
                                    <li className="footer-list_item">Order History</li>
                                    <li className="footer-list_item">WishList</li>
                                    <li className="footer-list_item">Newsletter</li>
                                    <li className="footer-list_item">Cart</li>
                                    <li className="footer-list_item">International Orders</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <p className="footer-item_title">Information</p>
                                <ul className="footer-list">
                                    <li className="footer-list_item">About Us</li>
                                    <li className="footer-list_item">Delivery Information</li>
                                    <li className="footer-list_item">Privacy Policy</li>
                                    <li className="footer-list_item">Terms &#38; Conditions</li>
                                    <li className="footer-list_item">Customer Service</li>
                                    <li className="footer-list_item">Return Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <p className="footer-item_title">Contact Us</p>
                                <p className="footer-item_info">Your current address goes to here, 120 example, country.</p>
                                <div className="footer-item-group">
                                    <p className="footer-item_info">(008) 254 254 254 25487</p>
                                    <p className="footer-item_info">(008) 358 587 657 6985</p>
                                </div>
                                <div className="footer-item-group">
                                    <p className="footer-item_info">support@example.com</p>
                                    <p className="footer-item_info">example@admin.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <p className="footer-item_title">Find us</p>
                                <p className="footer-item_info">Your Description goes to here you can find us here</p>
                                <div className="footer-item-group">
                                    <Link to="/" className="footer-item-link"><i className="fa fa-twitter footer-item_icon"></i></Link>
                                    <Link to="/" className="footer-item-link"><i className="fa fa-instagram footer-item_icon"></i></Link>
                                    <Link to="/" className="footer-item-link"><i className="fa fa-google footer-item_icon"></i></Link>
                                    <Link to="/" className="footer-item-link"><i className="fa fa-linkedin footer-item_icon"></i></Link>
                                    <Link to="/" className="footer-item-link"><i className="fa fa-pinterest footer-item_icon"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <p className="footer-bottom_copyright">
                                Copyright 2021 &#169; <Link className="footer-bottom_link" to="/">SabujCha.</Link> All Right Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img className="footer-bottom_payment" src={payment} alt="payment" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
