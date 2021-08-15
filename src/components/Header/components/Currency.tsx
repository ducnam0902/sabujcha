import React, { useState } from 'react'
import { currencyList } from '../../../constants/currencyList';
const Currency = () => {
    const [listCurrency, ] = useState(currencyList);
    const [currencySelected, setCurrencySelected] = useState(listCurrency[0]);
    const changeCurrency = (currency: any) => {
        setCurrencySelected(currency);
    }
    const renderList = () => {
        return (
            currencyList.map((values, key) => <li key={key} onClick={() => changeCurrency(values)} className="header-currency_item">{`${values.currencyCode} - ${values.currencyName}`}</li>)
        )
    }
    return (
        <div className="header-currency">
            <span>{currencySelected.currencyCode}</span>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            <ul className="header-currency_list">
                {renderList()}
            </ul>
        </div>
    )
}

export default Currency
