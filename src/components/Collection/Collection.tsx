import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import collectionItems from '../../assets/images/razdel.jpg'

type CollectionProps = {

}
const Collection: FC<CollectionProps> = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="collection-item">
                        <Link to="/" className="collection-item_link">
                            <div className="collection-item_image" style={{ backgroundImage: `url(${collectionItems})` }}>
                                <div className="collection-item_label">Black Tea</div>
                            </div>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection
