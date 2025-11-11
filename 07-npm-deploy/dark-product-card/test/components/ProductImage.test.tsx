import React from 'react';
import { render } from '@testing-library/react';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/product';

describe('ProductImage', () => {
    test('Debe de mostrar el componente correctamente con el estilo personalizado', () => {
        const { container } = render(
            <ProductImage img="./hola.jpg" className='custom-class' style={{ backgroundColor: 'red' }} />
        );

        const element = container.firstChild as HTMLElement;
        expect(element).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen personalizada', () => {
        const { container } = render(
            <ProductCard product={product2}>
                {
                    () => (<ProductImage />)
                }
            </ProductCard >
        );

        const element = container.firstChild as HTMLElement;
        expect(element).toMatchSnapshot();
    })
});
