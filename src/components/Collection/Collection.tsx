import React, { FC } from 'react'
import { collectionItem } from '../../constants/images'
import CollectionList from './components/CollectionList'

type CollectionProps = {

}
const Collection: FC<CollectionProps> = () => {
    return (
        <div className="container-fluid">
            <div className="collection">
                <div className="row">
                    {collectionItem.map((value, key) => (<CollectionList key={key} title={value.title} image={value.image} slug={value.slug} />))}
                </div>
            </div>
        </div>
    )
}

export default Collection
