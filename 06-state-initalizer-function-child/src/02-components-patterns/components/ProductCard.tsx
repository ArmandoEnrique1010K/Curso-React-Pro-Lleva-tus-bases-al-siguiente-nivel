import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react';
import type { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'
import type { JSX } from 'react/jsx-runtime';


// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

export interface Props {
    // children?: React.ReactElement | React.ReactElement[]
    children: (args: ProductCardHandlers) => JSX.Element;
    product: Product;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
        onChange,
        product,
        value,
        initialValues,
    });

    return (
        <Provider value={{
            counter, increaseBy, product, maxCount
        }}>
            <div
                className={` ${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                })}
            </div>

        </Provider>
    )
}
