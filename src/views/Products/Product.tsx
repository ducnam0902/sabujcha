import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout';
import { otherServices } from '../../services/otherServices';
import { featureProduct } from '../../constants/products'
import Banner from '../../components/Banner/Banner';
import DetailsProduct from '../../components/DetailsProduct/DetailsProduct';
type productProps = {
    isSale?: boolean,
    image?: string,
    newPrice?: string,
    oldPrice?: string,
    title?: string,
    isSoldout?: boolean
}
const Product = () => {
    let query = otherServices.useQuery();
    const productTitle = query.get('product');
    const [product, setProduct] = useState<productProps>({});
    useEffect(() => {
        const initData = () => {
            const data = featureProduct.filter((values) => values.title === productTitle);
            if (data.length > 0)
                setProduct(data[0]);
        }
        initData();
    }, [productTitle]);
    const { title} = product;
    return (
        <DefaultLayout>
            <Banner name={title ? title : ''} />
            <DetailsProduct data={product}/>
        </DefaultLayout>
    )
}

export default Product
