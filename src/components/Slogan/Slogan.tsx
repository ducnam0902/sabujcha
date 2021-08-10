import React from 'react'
import slogan from '../../assets/images/testi_compact.png'
const Slogan = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                    <div className="slogan">

                        <img className="slogan-image" src={slogan} alt="slogan" />

                        <h3 className="slogan-title">
                            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore
                        </h3>
                        <h4 className="slogan-author">John Sullivan</h4>
                        <h5 className="slogan-author-job">Customer</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slogan
