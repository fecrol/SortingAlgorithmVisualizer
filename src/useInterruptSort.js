import { useEffect, useRef } from "react"

export const useInterruptSort = (dimensions, data) => {

    const sorting = useRef(true)

    useEffect(() => {

        sorting.current = false
    }, [dimensions, data])

    return sorting
}