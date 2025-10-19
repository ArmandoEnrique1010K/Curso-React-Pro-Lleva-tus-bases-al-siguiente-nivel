import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {

    const { shopingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
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
            </div>

            <div className="shopping-cart">

                {
                    Object.entries(shopingCart).map(([key, product]) => (

                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }} />
                            <ProductButtons
                                className="custom-button"
                                style={{ display: 'flex', justifyContent: 'center' }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}

