import React, { FC } from 'react'
import { Link } from 'react-router-dom';
type NewItemProps = {
    data: any
}
const NewItem: FC<NewItemProps> = ({ data }) => {
    const { image, title, date, content } = data;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="new-item">
                <Link to="/" className="new-item_link"><img className="new-item_image" src={image} alt="" /></Link>
                <p className="new-item_date">{date}</p>
                <Link to="/" className="new-item_title">{title}</Link>
                <p className="new-item_content">{content}</p>
                <Link to="/" className="new-item_read-more">Read More</Link>
            </div>
        </div>
    )
}

export default NewItem
