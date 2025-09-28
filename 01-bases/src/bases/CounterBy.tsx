import { useState } from "react";

interface CounterByProps {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: CounterByProps) => {

    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });


    const handleClick = (value: number) => {
        setCounterState(({ counter }) => ({
            counter: counter + value,
            clicks: clicks + 1,
        }));
    }

    return (
        <>
            <h1>
                CounterBy: {counter}
            </h1>
            <p>
                Clicks: {clicks}
            </p>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
            <hr />
        </>
    )
}
