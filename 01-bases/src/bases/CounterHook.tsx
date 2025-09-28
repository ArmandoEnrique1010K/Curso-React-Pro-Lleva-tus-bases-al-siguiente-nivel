import { useCounter } from "../hooks/useCounter"


export const CounterHook = () => {

    const { counter, elementToAnimate, handleClick } = useCounter({
        maxCount: 15
    })

    return (
        <>
            <h1>
                CounterHook: {counter}
            </h1>

            <h2 ref={elementToAnimate}>{counter}</h2>

            <button onClick={handleClick}>+1</button>
            <hr />
        </>
    )
}
