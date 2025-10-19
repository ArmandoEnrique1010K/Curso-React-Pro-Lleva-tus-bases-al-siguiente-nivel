// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { lazy, type LazyExoticComponent } from "react";
import type { JSX } from "react/jsx-runtime";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))
// const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
// const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    // {
    //     to: '/lazy1',
    //     path: 'lazy1',
    //     Component: Lazy1,
    //     name: 'Lazy-1'
    // },
    // {
    //     to: '/lazy2',
    //     path: 'lazy2',
    //     Component: Lazy2,
    //     name: 'Lazy-2'
    // },
    // {
    //     to: '/lazy3',
    //     path: 'lazy3',
    //     Component: Lazy3,
    //     name: 'Lazy-3'
    // },
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No-Lazy'
    }
]