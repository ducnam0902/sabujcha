import React, { useState } from 'react'
import ProductList from '../FeatureProducts/components/ProductList'
import { featureProduct } from '../../constants/products'
import Pagination from '../Pagination/Pagination';
const ProductOverview = () => {
    const [products, setProducts] = useState(featureProduct.slice(0,9));
    return (
        <div className="product-overview">

            <div className="shop-topbar-wrapper">
                <div className="change-view-wrapper">
                    <div className="change-view-icon-group">
                        <div className="fa fa-th  change-view-icon"></div>
                        <div className="fa fa-list-ul change-view-icon"></div>
                    </div>

                    <p className="total-result">Showing 1 - 8 of 8 result</p>
                </div>
                <div className="product-sorting-wrapper">
                    <label className="sorting-title">Sort by</label>
                    <select className="product-sorting-select" name="sortBy" id="" defaultValue={'best-selling'}>
                        <option className="product-sorting-option" value="manual">Featured</option>
                        <option className="product-sorting-option" value="best-selling">Best Selling</option>
                        <option className="product-sorting-option" value="title-ascending">Alphabetically, A-Z</option>
                        <option className="product-sorting-option" value="title-descending">Alphabetically, Z-A</option>
                        <option className="product-sorting-option" value="price-ascending">Price, low to high</option>
                        <option className="product-sorting-option" value="price-descending">Price, high to low</option>
                        <option className="product-sorting-option" value="created-descending">Date, new to old</option>
                        <option className="product-sorting-option" value="created-ascending">Date, old to new</option>


                    </select>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {products.map((values, key) => (
                        <div key={key} className="col-lg-4 col-md-6 col-12 ">
                            <ProductList data={values}/>
                        </div>
                    ))}
                </div>
            </div>
         <Pagination/>   
        </div>
    )
}

export default ProductOverview
