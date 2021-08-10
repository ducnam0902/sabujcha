import { featureProduct } from '../../constants/images'
import ProductList from './components/ProductList'
const FeaturesProduct = () => {
    return (
        <div className="feature-products">
            <div className="container">
                <div className="row">
                    {featureProduct.map((values, key) => (
                        <ProductList key={key} data={values}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesProduct
