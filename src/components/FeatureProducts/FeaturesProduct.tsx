import { useState } from 'react';
import { featureProduct } from '../../constants/products'
import ProductList from './components/ProductList'
const FeaturesProduct = () => {
    const [products, setProducts] = useState(featureProduct.slice(0,4));
    return (
        <div className="feature-products">
            <div className="container">
                <div className="row">
                    {products.map((values, key) => (
                         <div key={key} className=" col-lg-3 col-md-6 col-sm-12">
                        <ProductList  data={values}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesProduct
