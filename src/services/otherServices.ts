import { useLocation } from 'react-router-dom';
export const otherServices ={
    useQuery: () => {
        return new URLSearchParams(useLocation().search);
    }
};