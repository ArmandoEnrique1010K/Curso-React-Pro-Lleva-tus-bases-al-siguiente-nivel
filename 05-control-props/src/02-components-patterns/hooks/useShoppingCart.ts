import { useState } from "react";
import type { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {


    const [shopingCart, setShopingCart] = useState<{ [key: string]: ProductInCart }>({}
        // {
        //     '1': { ...product, count: 10 },
        //     '2': { ...product2, count: 20 }
        // }
    );

    // console.log(shopingCart);

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        // console.log(count, product)

        // shopingCart[product.id] = {
        //     ...product,
        //     count
        // }

        // console.log({ count });

        setShopingCart(oldShoppingCart => {

            //     if (count === 0) {
            //         const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //         console.log(toDelete)
            //         return {
            //             ...rest
            //         }
            //     }

            //     return {
            //         ...oldShoppingCart,
            //         [product.id]: {
            //             ...product,
            //             count
            //         }
            //     }
            // // console.log(shopingCart)

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
        })

    }

    return {
        shopingCart,
        onProductCountChange
    }
}
