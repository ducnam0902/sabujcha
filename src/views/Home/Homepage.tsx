import React from 'react'
import Collection from '../../components/Collection/Collection'
import Slide from '../../components/Slide/Slide'
import DefaultLayout from '../../layouts/DefaultLayout'


const Homepage = () => {
    return (
        <div>
           <DefaultLayout>
            <Slide/>
            <Collection/>
           </DefaultLayout>
        </div>
    )
}

export default Homepage
