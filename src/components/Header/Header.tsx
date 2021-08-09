import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-3">
                        <Link className="header-logo" to="/"><img src={logo} alt="header logo" /></Link>
                    </div>
                    <div className="col-6 col-lg-9">
                        <div className="header-nav">
                            <ul className="main-nav">
                                <li className="main-nav_item">
                                    <Link to="/" className="main-nav_item--link">Home</Link>
                                </li>
                                <li className="main-nav_item">
                                    <Link to="/" className="main-nav_item--link">About</Link>
                                </li>
                                <li className="main-nav_item">
                                    <Link to="/" className="main-nav_item--link">Shop</Link>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                    
                                </li>
                                <li className="main-nav_item">
                                    <Link to="/" className="main-nav_item--link">Product</Link>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>

                                </li>
                                <li className="main-nav_item">
                                    <Link to="/" className="main-nav_item--link">Blog</Link>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>

                                </li>
                                <li className="main-nav_item">
                                    <Link to="/" className="main-nav_item--link">Contact</Link>
                                </li>
                            </ul>
                            <div className="header-currency">
                                <span>USD</span>
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                            <div className="header-cart">
                                <span>0</span>
                                <i className="ti ti-shopping-cart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
