import {  useState, useEffect } from "react"

export const useContainerResize = (containerRef) => {

    const [dimensions, setDimensions] = useState({height: 0, width:0})

    useEffect(() => {

        const handleResize = () => {

            setDimensions({
                height: containerRef.current.clientHeight, 
                width: containerRef.current.clientWidth
            })
        }

        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [containerRef])

    return dimensions
}