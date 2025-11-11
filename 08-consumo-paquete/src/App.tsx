import { ProductButtons, ProductImage, ProductTitle, ProductCard } from 'dark-product-card';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: 'coffee-mug.png'
}

function App() {

  return (
    <>
      <div className='container'>
        <h1>Consumo de paquetes</h1>
        <ProductCard
          product={product}
          initialValues={{
            count: 6,
            maxCount: 10
          }}
        >
          {
            ({ count, reset }) => (
              <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 20px'
                }}>
                  <span>Contador: {count}</span>
                  <button onClick={reset}>Reiniciar</button>
                </div>
              </>
            )
          }
        </ProductCard>

      </div>
    </>
  )
}

export default App
