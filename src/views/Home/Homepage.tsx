import React from 'react'
import Collection from '../../components/Collection/Collection'
import FeaturesProduct from '../../components/FeatureProducts/FeaturesProduct'
import New from '../../components/News/New'
import Slide from '../../components/Slide/Slide'
import Slogan from '../../components/Slogan/Slogan'
import SubscribeEmail from '../../components/SubcribeEmail/SubscribeEmail'
import DefaultLayout from '../../layouts/DefaultLayout'

const Homepage = () => {
    return (
        <div>
           <DefaultLayout>
            <Slide/>
            <Collection/>
            <FeaturesProduct/>
            <Slogan/>
            <New/>
            <SubscribeEmail/>
           </DefaultLayout>
        </div>
    )
}

export default Homepage
