import React from 'react'
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import ProductOverview from '../../components/ProductsOverview/ProductOverview';
import DefaultLayout from '../../layouts/DefaultLayout'
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Categories = () => {
    let query = useQuery();
    const name = query.get('name');
    return (
        <DefaultLayout>
            <Banner name={name ? name : ''} />
            <div className="main_categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <FilterCategory/>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <ProductOverview/>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Categories
