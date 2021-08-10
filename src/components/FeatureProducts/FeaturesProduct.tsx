import React from 'react'
import { Link } from 'react-router-dom'
import featuresproduct1 from '../../assets/images/featureproduct1.jpg'
const FeaturesProduct = () => {
    return (
        <div className="feature-products">
            <div className="container">
                <div className="row">
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <div className="feature-product-item">
                            <Link to="/">
                                <div className="feature-product-image" style={{ backgroundImage: `url(${featuresproduct1})` }}>
                                    <div className="feature-product-sale">Sale</div>
                                    <div className="feature-product-function">
                                        <div className="feature-product-favourite">
                                            <i className="feature-product-favourite_icon fa fa-heart-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="feature-product-quickview">
                                            <i className="feature-product-quickview_icon fa fa-search" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="feature-product-info">
                                <Link className="feature-product-name" to="/">3. Variable product</Link>
                                <p className="feature-product-price">
                                    <span className="feature-product-new-price">$61.00</span>
                                    <span>
                                        <span> - </span>
                                        <span className="feature-product-old-price">$85.00</span>
                                    </span>

                                </p>
                                <Link className="feature-product-add" to="/">Add to cart</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturesProduct
