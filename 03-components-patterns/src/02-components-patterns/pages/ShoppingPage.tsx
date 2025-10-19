import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {/* <ProductCard product={product}>
                    <ProductCard.Image img={product.img} />
                    <ProductCard.Title title={'Café'} />
                    <ProductCard.Buttons counter={0} increaseBy={function (quantity: number): void {
                        throw new Error("Function not implemented.")
                    }} />
                </ProductCard> */}

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Hola Mundo'} />
                    <ProductCard.Buttons />
                </ProductCard>


                {/* <ProductCard product={product}>
                    <ProductImage img={product.img} />
                    <ProductTitle title={'Café'} />
                    <ProductButtons counter={0} increaseBy={function (quantity: number): void {
                        throw new Error("Function not implemented.")
                    }} />
                </ProductCard> */}

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={''} />
                    <ProductButtons />
                </ProductCard>


            </div>
        </div>
    )
}
