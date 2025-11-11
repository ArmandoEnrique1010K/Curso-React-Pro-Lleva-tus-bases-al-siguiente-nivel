import React from 'react';
import { render } from '@testing-library/react';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
    test('Debe de mostrar el componente correctamente con el título personalizado', () => {
        const { container } = render(
            <ProductTitle title="Custom Product" className='custom-class' />
        );

        const element = container.firstChild as HTMLElement;

        // const json = {
        //     type: element.tagName.toLowerCase(),
        //     props: Object.fromEntries(
        //         Array.from(element.attributes).map(attr => [attr.name, attr.value])
        //     ),
        //     children: element.textContent
        // };

        // console.log(JSON.stringify(json, null, 2));

        expect(element).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => {
        const { container } = render(
            <ProductCard product={product1}>
                {
                    () => (<ProductTitle />)
                }
            </ProductCard >
        );

        const element = container.firstChild as HTMLElement;

        expect(element).toMatchSnapshot();
    })
});
