import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../Header/Header.scss'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="logo">
                            <Link to="/"> <img src={logo} alt="sabujcha logo" /></Link>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-9">
                        <div className="nav">
                            <ul>
                                <li>
                                    <Link to="/"><span>Home</span></Link>
                                </li>
                                <li>
                                    <Link to="/"><span>About</span></Link>
                                </li>
                                <li>
                                    <Link to="/"><span>Shop</span> <i className="fa fa-chevron-down" aria-hidden="true"></i> </Link>
                                </li>
                                <li>
                                    <Link to="/"><span>Product</span> <i className="fa fa-chevron-down" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><span>Blog</span> <i className="fa fa-chevron-down" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><span>Contact</span></Link>
                                </li>
                            </ul>
                            <div className="subMenu">
                                <div className="currency">
                                    <span>USD</span>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <div className="cart">
                                    <span>0</span>
                                    <i className="ti ti-shopping-cart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
