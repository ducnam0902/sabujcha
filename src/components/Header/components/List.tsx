import React, { FC } from 'react'
import ListItem from './ListItem'
type ListProps = {
    title?: string,
    data?: Array<any>
}
const renderList = (list: any) => {
    return list.map((items: any, key: number) => (
        <li key={key} className="list__item">
            <ListItem title={items.title} link={items.key} />
        </li>
    ))
}
const List: FC<ListProps> = ({ title, data }) => {
    return (
        <div className="column">
            <p className="title">{title}</p>
            <ul>
                {renderList(data)}
            </ul>
        </div>
    )
}

export default List
