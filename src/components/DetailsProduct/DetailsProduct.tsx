import React, { FC } from 'react'
import { Link } from 'react-router-dom';
type DetailsProductProps = {
    data: any
}
const DetailsProduct: FC<DetailsProductProps> = ({ data }) => {
    const { isSale, image, newPrice, oldPrice, title, isSoldout } = data;
    return (
        <div className="container">
            <div className="details-product">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="details-product-image-group">
                            <img src={image} alt={title} className="details-product-image" />
                        </div>

                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="details-product-info">
                            <h3 className="details-product-title">{title}</h3>
                            <div className="details-product_group">
                                <div className="details-product_star">
                                    <i className="ti ti-star details-product_star_icon"></i>
                                    <i className="ti ti-star details-product_star_icon"></i>
                                    <i className="ti ti-star details-product_star_icon"></i>
                                    <i className="ti ti-star details-product_star_icon"></i>
                                    <i className="ti ti-star details-product_star_icon"></i>
                                </div>
                                <span className="details-product_reviews">No Reviews</span>
                            </div>
                            <h4 className="details-product_price">{newPrice} <span className="details-product_oldprice">{oldPrice}</span></h4>
                            <div className="details-product_description">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </div>
                            {!isSoldout && <>
                                <div className="details-product_size">
                                    <span className="details-product_size_title">Size : </span>
                                    <ul className="details-product_size_group">
                                        <li className="details-product_size_item">
                                            <input className="details-product_size_input" id="m" type="radio" name="size" />
                                            <label className="details-product_size_label" htmlFor="m">M</label>
                                        </li>
                                        <li className="details-product_size_item">
                                            <input className="details-product_size_input" id="l" type="radio" name="size" />
                                            <label className="details-product_size_label" htmlFor="l">L</label>
                                        </li>
                                        <li className="details-product_size_item">
                                            <input className="details-product_size_input" id="xl" type="radio" name="size" />
                                            <label className="details-product_size_label" htmlFor="xl">XL</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-product_color">
                                    <span className="details-product_color_title">Color : </span>
                                    <ul className="details-product_color_group">
                                        <li className="details-product_color_item">
                                            <input className="details-product_color_input" id="yellow" name="color" type="radio" />
                                            <label className="details-product_color_label" htmlFor="yellow"></label>
                                        </li>
                                    </ul>
                                </div>
                            </>}
                        </div>
                        <div className="product-action">
                            <div className="product-action-quantity-group">
                                {!isSoldout && <div className="product-action-quantity">
                                    <div className="product-action-quantity-desc">-</div>
                                    <input type="text" className="product-quantity" defaultValue={0} />
                                    <div className="product-action-quantity-inc">+</div>
                                </div>}
                                <div className="product-action-icon-group">
                                    <i className="ti ti-shopping-cart product-action-icon"></i>
                                    <i className="ti ti-heart product-action-icon"></i>
                                </div>
                            </div>

                            { !isSoldout && <button className="product-action_buy">Buy it Now</button>}

                            <ul className="product-action-share_list">
                                <li className="product-action-share_item facebook">
                                    <Link to="/" className="product-action-share_link">
                                        <i className="ti ti-facebook product-share-icon "></i>
                                        <span className="product-share-title">Facebook</span>
                                    </Link>
                                </li>
                                <li className="product-action-share_item twitter">
                                    <Link to="/" className="product-action-share_link">
                                        <i className="ti ti-twitter product-share-icon "></i>
                                        <span className="product-share-title">Twitter</span>
                                    </Link>
                                </li>
                                <li className="product-action-share_item google">
                                    <Link to="/" className="product-action-share_link">
                                        <i className="product-share-icon ti ti-google"></i>
                                        <span className="product-share-title">Google +</span>
                                    </Link>
                                </li>
                                <li className="product-action-share_item pinterest">
                                    <Link to="/" className="product-action-share_link">
                                        <i className="ti ti-pinterest product-share-icon"></i>
                                        <span className="product-share-title">Pinterest</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsProduct
