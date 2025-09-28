import { useState } from "react";

interface CounterByProps {
    initialValue?: number;
}

export const CounterBy = ({ initialValue = 5 }: CounterByProps) => {

    const [counterState, setCounterState] = useState({
        counter: initialValue,
        clicks: 0,
    });

    const { counter, clicks } = counterState;

    const handleClick = (value: number) => {
        setCounterState(prev => ({
            counter: prev.counter + value,
            clicks: prev.clicks + 1,
        }));
    }

    return (
        <>
            <h1>
                CounterBy: {counter}
            </h1>
            <h2>
                Clicks: {clicks}
            </h2>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>

        </>
    )
}
