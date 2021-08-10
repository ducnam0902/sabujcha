import React, {FC} from 'react'
import { Link } from 'react-router-dom'
type CollectionListProps ={
    image?: any,
    title?: string
}
const CollectionList: FC<CollectionListProps> = ({image, title}) => {
    return (
        <div className="col-md-4">
            <div className="collection-item">
                <Link to="/" className="collection-item_link">
                    <div className="collection-item_image" style={{ backgroundImage: `url(${image})` }}>
                        <div className="collection-item_label">{title}</div>
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default CollectionList
