# Dark Product Card

Este es un paquete de pruebas de despliegue en NPM

### Armando Enrique

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'dark-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ reset, increaseBy, isMaxCountReached, maxCount, count }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
