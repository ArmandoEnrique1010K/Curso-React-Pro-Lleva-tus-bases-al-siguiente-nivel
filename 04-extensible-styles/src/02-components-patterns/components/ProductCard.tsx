import { useProduct } from '../hooks/useProduct'
import { createContext, type ReactElement } from 'react';
import type { ProductContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'


// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext



export interface Props {
    children?: ReactElement | ReactElement[]
    product: Product;
    className?: string;
}


export const ProductCard = ({ children, product, className }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter, increaseBy, product
        }}>
            <div className={` ${styles.productCard} ${className}`}>
                {children}
            </div>

        </Provider>
    )
}
