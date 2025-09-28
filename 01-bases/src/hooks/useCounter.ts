import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";


export const useCounter = ({ maxCount = 1 }) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<HTMLHeadingElement>(null);

    const tl = useRef(gsap.timeline())

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => {
        // if (counter < 10) return
        // console.log('%c Se llego al valor máximo', 'color: red; background-color: black;');

        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause()

    }, [])

    useEffect(() => {
        // if (counter < maxCount) return;
        tl.current.play(0)
    }, [counter])

    return {
        elementToAnimate,
        counter,
        handleClick
    }
}