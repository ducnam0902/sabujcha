import bg1 from '../assets/images/s42.jpg';
import bg2 from '../assets/images/s43.jpg';

import blacktea from '../assets/images/razdel.jpg';
import mixtea from '../assets/images/razdel_05.jpg';
import lovetea from '../assets/images/razd.jpg';

import fp1 from '../assets/images/featureproduct1.jpg';
import fp2 from '../assets/images/featureproduct2.jpg';
import fp3 from '../assets/images/featureproduct3.jpg';
import fp4 from '../assets/images/featureproduct4.jpg';


export const slides = [bg1, bg2];

export const collectionItem = [
    {
        image: blacktea,
        title: 'Black tea'
    }
    ,
    {
        image: mixtea,
        title: 'Mix tea'
    },
    {
        image: lovetea,
        title: 'Love tea'
    }
];
export const featureProduct = [
    {
        isSale: true,
        image: fp1,
        newPrice: '$61',
        oldPrice: '$85',
        title: '3. Variable product'
    },
    {
        isSale: true,
        image: fp2,
        newPrice: '$110',
        oldPrice: '$130',
        title: '1. New and sale badge product'
    },
    {
        isSale: true,
        image: fp3,
        newPrice: '$61',
        oldPrice: '$85',
        title: 'Aliexpress dropshipping by obelo'
    },
    {
        isSale: false,
        image: fp4,
        newPrice: '$80',
        title: '2. New badge product'
    }
];
