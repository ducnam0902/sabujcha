import React, { FC } from 'react'
type FilterListProps = {
    title: string
    data: Array<any>
}
const FilterList: FC<FilterListProps> = ({ title, data }) => {

    return (
        <div className="filter-list">
            <h4 className="filter-list_title">{title}</h4>
            <ul className="filter-list-ul">
                {
                    data.map((values, key) => (
                        <li key={key} className="filter-list_item">
                            <input type="checkbox" className="filter-list_item_input" name={values.name} value={values.value} defaultChecked={values.tick} />
                            <label htmlFor="">{values.name}</label>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default FilterList
