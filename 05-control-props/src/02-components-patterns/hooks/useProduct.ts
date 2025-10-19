import { useEffect, useState } from "react"
import type { OnChangeArgs, Product } from "../interfaces/interfaces";

export interface UseProductProps {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductProps) => {

    const [counter, setCounter] = useState(value)
    // console.log({ value })

    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue)


        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onChange && onChange({
            product: product,
            count: newValue
        })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return {
        counter,
        increaseBy
    }
}