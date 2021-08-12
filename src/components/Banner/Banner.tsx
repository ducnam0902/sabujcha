import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import bg from '../../assets/images/bg-product.jpg';
type BannerProps ={
    name:string 
}
const Banner: FC<BannerProps> = ({name}) => {
    return (
        <div className="banner" style={{backgroundImage: `url(${bg})`}} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-header">
                            <h4 className="banner-title">{name}</h4>
                            <p className="banner-breadcrumb">
                                <Link title="Back to homepage" className="banner-link" to="/">Home</Link>
                                <span className="banner-current-link">{` / ${name}`}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
