import { useEffect, useRef, useState } from "react"
import type { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";

export interface UseProductProps {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductProps) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    console.log(initialValues?.count)

    const isMounted = useRef(false);

    // const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue)

        // if (isControlled.current) {
        //     return onChange!({
        //         count: value,
        //         product
        //     })
        // }

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onChange && onChange({
            product: product,
            count: newValue
        })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset
    }
}