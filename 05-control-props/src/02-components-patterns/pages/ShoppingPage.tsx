import { useState } from "react";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import type { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {

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

        setShopingCart(oldShoppingCart => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log(toDelete)
                return {
                    ...rest
                }
            }

            return {
                ...oldShoppingCart,
                [product.id]: {
                    ...product,
                    count
                }
            }
        })
        console.log(shopingCart)
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {/* <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons className="custom-button" />
                </ProductCard> */}

                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        onChange={onProductCountChange}
                        value={shopingCart[product.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }} />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-button" />
                    </ProductCard>
                ))}


                {/* <ProductCard
                    product={product}
                    style={{ backgroundColor: '#70D1F8' }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
                </ProductCard> */}

            </div>

            {/*
                <input value={counter} onChange={ (event) => setCounter(e.target.value) }/>
            */}


            <div className="shopping-cart">

                {
                    Object.entries(shopingCart).map(([key, product]) => (

                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            // onChange={() => onProductCountChange()}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }} />
                            {/* <ProductTitle title={`${product.count}`} /> */}
                            <ProductButtons
                                className="custom-button"
                                style={{ display: 'flex', justifyContent: 'center' }}
                            />
                        </ProductCard>

                    ))
                }

            </div>

            {/* <div>
                <code>
                    {JSON.stringify(shopingCart, null, 5)}
                </code>
            </div> */}
        </div>
    )
}
