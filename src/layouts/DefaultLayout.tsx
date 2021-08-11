import React, { FC,ReactChild } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
type DefaultLayoutProps = {
    child?: ReactChild
}
const DefaultLayout: FC<DefaultLayoutProps>  = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default DefaultLayout
