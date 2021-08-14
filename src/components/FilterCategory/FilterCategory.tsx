import React from 'react';
import { collectionItem } from '../../constants/images';
import FilterList from './components/FilterList';
import { vendors } from '../../constants/vendors';
import { sizes } from '../../constants/sizes';
import { colors } from '../../constants/color'; 
const FilterCategory = () => {

    return (
        <div className="filter-category">
            <div className="search-store">
                <form action="">
                    <input type="text" className="search-store-input" placeholder="Search our store" />
                    <button className="ti ti-search search-store-button">
                    </button>
                </form>
            </div>
            <div className="filter-wrapper">
                <div className="filter-category">
                    <h4 className="filter-category-title">Categories</h4>
                    <ul className="filter-category-list">
                        {collectionItem.map((values, key) => (
                            <li key={key} className="filter-category-item">
                                {values.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <FilterList title="Vendors" data={vendors}/>
                <FilterList title="Color" data={colors}/>
                <FilterList title="Size" data={sizes}/>

            </div>
        </div>
    )
}

export default FilterCategory
