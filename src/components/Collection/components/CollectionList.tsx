import React, { FC } from 'react'
import { Link } from 'react-router-dom'
type CollectionListProps = {
    image?: any,
    title?: string,
    slug?: string
}
const CollectionList: FC<CollectionListProps> = ({ image, title, slug }) => {
    return (
        <div className="col-md-4">
            <div className="collection-item">
                <Link to={`/categories?name=${title}`} className="collection-item_link">
                    <div className="collection-item_image" style={{ backgroundImage: `url(${image})` }}>
                        <div className="collection-item_label">{title}</div>
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default CollectionList
