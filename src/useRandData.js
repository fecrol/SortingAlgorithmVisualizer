import { useState, useEffect } from "react"
import { generateData } from "./generateData";

export const useRandData = (dataPieceWidth, marginRight, containerDimensions, maxVal) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const randData = generateData(dataPieceWidth, marginRight, containerDimensions, maxVal)
        setData([...randData])
  }, [containerDimensions])

  return [data, setData]
}