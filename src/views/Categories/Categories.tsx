import React from 'react'
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import DefaultLayout from '../../layouts/DefaultLayout'
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Categories = () => {
    let query = useQuery();
    const name = query.get('name');
    return (
        <DefaultLayout>
            <Banner name={name ? name : ''} />
        </DefaultLayout>
    )
}

export default Categories
