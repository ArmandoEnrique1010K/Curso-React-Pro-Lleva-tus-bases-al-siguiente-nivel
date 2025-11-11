import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/product';


describe('ProductCard', () => {
    test('Debe de mostrar el componente correctamente', () => {
        const { container } = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );

        const element = container.firstChild as HTMLElement;
        expect(element).toMatchSnapshot();
    });

    test('debe de incrementar el contador', () => {
        const { container, getByText } = render(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        );

        // --- función recursiva para convertir un nodo DOM a objeto JSON ---
        const nodeToJSON = (node: Element | ChildNode): any => {
            // Si es un nodo de texto
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent?.trim();
                return text ? text : null;
            }

            // Si es un nodo de elemento (div, h1, etc.)
            const el = node as Element;

            return {
                type: el.tagName.toLowerCase(),
                props: Object.fromEntries(
                    Array.from(el.attributes).map(attr => [attr.name, attr.value])
                ),
                children: Array.from(el.childNodes)
                    .map(nodeToJSON)
                    .filter(Boolean) // elimina nulos
            };
        };

        // snapshot antes del click
        let jsonTree = Array.from(container.childNodes)
            .map(nodeToJSON)
            .filter(Boolean);
        expect(jsonTree).toMatchSnapshot();

        // 🚀 Reemplazo directo del "act": usar fireEvent (ya incluye act internamente)
        fireEvent.click(getByText('+1'));
        fireEvent.click(getByText('+1'));

        // snapshot después del click
        let updatedTree = Array.from(container.childNodes)
            .map(nodeToJSON)
            .filter(Boolean);

        // console.log(JSON.stringify(updatedTree, null, 2));

        // verificar que el contador cambió (de 0 a 2)
        expect((updatedTree[0] as any).children[1].children[0]).toBe('2');
    });
});
