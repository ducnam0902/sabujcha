import React from 'react'
import { latestNews } from '../../constants/news'
import NewItem from './components/NewItem'
const New = () => {
    return (
        <div className="news">
            <div className="container">
                <div className="row">
                    <h3 className="news-title">Latest News</h3>
                    {latestNews.map((values, key) => <NewItem key={key} data={values} />)}
                </div>
            </div>



        </div>
    )
}

export default New
