import { useState, useEffect } from "react"
import { generateData } from "./generateData";

export const useRandData = (containerDimensions) => {

    const [data, setData] = useState([])

    useEffect(() => {
      const randData = generateData(containerDimensions)
      setData([...randData])
  }, [containerDimensions])

  return [data, setData]
}