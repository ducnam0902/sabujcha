import React from 'react'

const FeaturesProduct = () => {
    return (
        <div className="feature-products">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature-product-item">
                            <div className="feature-product-image">
                                <div className="feature-product-sale">Sale</div>
                                <div className="feature-product-function">
                                    <div className="feature-product-favourite"></div>
                                    <div className="feature-product-quickview"></div>
                                </div>
                            </div>
                            <div className="feature-product-info">
                                <p className="feature-product-name">3. Variable product</p>
                                <p className="feature-product-price"><span>$61.00</span><span> - </span><span>$85.00</span></p>
                                <p className="feature-product-add">Add to cart</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default FeaturesProduct
