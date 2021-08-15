import React from 'react';
import { collectionItem } from '../../constants/collectionItem';
import FilterList from './components/FilterList';
import { vendors } from '../../constants/vendors';
import { sizes } from '../../constants/sizes';
import { colors } from '../../constants/color';
import { Link } from 'react-router-dom';
import greenTeaBenefit from '../../assets/images/green-tea-benefits.jpg';
const FilterCategory = () => {

    return (
        <div className="filter-category">
            <form action="" className="search-store">
                <input type="text" className="search-store-input" placeholder="Search our store" />
                <button className="ti ti-search search-store-button">
                </button>
            </form>
            <div className="filter-wrapper">
                <div className="filter-category-group">
                    <h4 className="filter-category-title">Categories</h4>
                    <ul className="filter-category-list">
                        {collectionItem.map((values, key) => (
                            <li key={key} className="filter-category-item">
                                <Link className="filter-category-link" to={`/categories?name=${values.title}`}>{values.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <FilterList title="Vendors" data={vendors} />
                <FilterList title="Color" data={colors} />
                <FilterList title="Size" data={sizes} />               
            </div>
            <div className="filter-banner">
                <img className="filter-banner_image" src={greenTeaBenefit} alt="Matcha Tea" />
            </div>
        </div>
    )
}

export default FilterCategory
