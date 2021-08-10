import { FC } from 'react'
import { Link } from 'react-router-dom'
type ProductListProps = {
    data?: any
}
const ProductList: FC<ProductListProps> = ({ data }) => {
    const { isSale, image, newPrice, oldPrice, title } = data
    return (
        <div className=" col-lg-3 col-md-6 col-sm-12">
            <div className="feature-product-item">
                <Link to="/">
                    <div className="feature-product-image" style={{ backgroundImage: `url(${image})` }}>
                        {isSale && <div className="feature-product-sale">Sale</div>}
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
                    <Link className="feature-product-name" to="/">{title.length > 25 ? `${title.slice(0,25)}...` : title}</Link>
                    <p className="feature-product-price">
                        <span className="feature-product-new-price">{newPrice} </span>
                        {oldPrice && <span>
                            <i className="ti ti-minus" />
                            <span className="feature-product-old-price"> {oldPrice}</span>
                        </span>}

                    </p>
                    <div className="feature-product-add">Add to cart</div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
