import React from 'react'
const currencyList = ['USD - US Dollar', 'EUR - Euro', 'GBP - British Pound',
    'INR -  Indian Rupee', 'BDT - Bangladesh Taka', 'JPY- Japan Yen', 'CAD - Canada Dollar',
    'AUD - Australian Dollar'];
const Currency = () => {
    const renderList = () => {
        return (
            currencyList.map((values, key) => <li key={key} className="header-currency_item">{values}</li>)
        )
    }
    return (
        <div className="header-currency">
            <span>USD</span>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            <ul className="header-currency_list">
                {renderList()}
            </ul>
        </div>
    )
}

export default Currency
