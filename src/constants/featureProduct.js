import fp1 from '../assets/images/featureproduct1.jpg';
import fp2 from '../assets/images/featureproduct2.jpg';
import fp3 from '../assets/images/featureproduct3.jpg';
import fp4 from '../assets/images/featureproduct4.jpg';

export const featureProduct = [
    {
        isSale: false,
        isSoldout: true,
        image: fp1,
        newPrice: '$61',
        oldPrice: '$85',
        title: '3. Variable product'
    },
    {
        isSale: true,
        isSoldout: false,
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
        title: 'Aliexpress dropshipping by obelo',
        isSoldout: false,
    },
    {
        isSale: false,
        image: fp4,
        newPrice: '$80',
        title: '2. New badge product',
        isSoldout: false,
    }
];
