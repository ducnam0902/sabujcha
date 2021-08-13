import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import CartHeader from './components/CartHeader'
import Currency from './components/Currency'

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
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
                                    <Link to="/" className="main-nav_item--link">Categories</Link>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                    <ul className="sub-nav">
                                        <li className="sub-nav_item">
                                            <Link to="/" className="sub-nav_item-link">Black Tea</Link>
                                        </li>
                                        <li className="sub-nav_item">
                                            <Link to="/" className="sub-nav_item-link">Mix Tea</Link>
                                        </li>
                                        <li className="sub-nav_item">
                                            <Link to="/" className="sub-nav_item-link">Love Tea</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="main-nav_item">
                                    <Link to="/" className="main-nav_item--link">Blog</Link>

                                </li>
                                <li className="main-nav_item">
                                    <Link to="/" className="main-nav_item--link">Contact</Link>
                                </li>
                            </ul>
                            <Currency />
                            <CartHeader />
                            <div className="header-mobile" onClick={() => setOpenNav(!openNav)}>
                                {openNav ? <i className=" ti ti-close header-mobile-icon" /> : <i className=" ti ti-menu header-mobile-icon" />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="mobile-nav">
                            <li className="mobile-nav_item">
                                <Link to="/" className="mobile-nav_item-link">Home</Link>
                            </li>
                            <li className="mobile-nav_item">
                                <Link to="/" className="mobile-nav_item-link">About</Link>
                            </li>
                            <li className="mobile-nav_item">
                                <div className="mobile-nav_group" >
                                    <Link to="/" className="mobile-nav_item-link">Categories</Link>
                                    <i className="ti ti-plus mobile-nav_item-icon" aria-hidden="true"></i>
                                    {/* <i className="ti ti-minus mobile-nav_item-icon" aria-hidden="true"></i> */}
                                </div>
                                <ul className="mobile-sub-nav">
                                    <li className="mobile-sub-nav_item">
                                        <Link to="/" className="mobile-sub-nav_item-link">Black Tea</Link>
                                    </li>
                                    <li className="mobile-sub-nav_item">
                                        <Link to="/" className="mobile-sub-nav_item-link">Mix Tea</Link>
                                    </li>
                                    <li className="mobile-sub-nav_item">
                                        <Link to="/" className="mobile-sub-nav_item-link">Love Tea</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="mobile-nav_item">
                                <Link to="/" className="mobile-nav_item-link">Blog</Link>

                            </li>
                            <li className="mobile-nav_item">
                                <Link to="/" className="mobile-nav_item-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
