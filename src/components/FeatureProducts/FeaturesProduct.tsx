import { featureProduct } from '../../constants/featureProduct'
import ProductList from './components/ProductList'
const FeaturesProduct = () => {
    return (
        <div className="feature-products">
            <div className="container">
                <div className="row">
                    {featureProduct.map((values, key) => (
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
