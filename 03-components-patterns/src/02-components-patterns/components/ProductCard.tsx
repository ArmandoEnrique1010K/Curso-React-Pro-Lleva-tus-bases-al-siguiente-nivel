import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react';
import type { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'
// import { ProductTitle } from './ProductTitle';
// import { ProductImage } from './ProductImage';
// import { ProductButtons } from './ProductButtons';


// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext




// interface ProductButtonsProps {
//     counter: number,
//     increaseBy: (quantity: number) => void
// }

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter, increaseBy, product
        }}>
            <div className={styles.productCard}>

                {children}
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>

        </Provider>
    )
}


// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;