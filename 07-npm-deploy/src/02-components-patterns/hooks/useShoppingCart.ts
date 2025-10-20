import { useState } from "react";
import type { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shopingCart, setShopingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShopingCart(oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

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
