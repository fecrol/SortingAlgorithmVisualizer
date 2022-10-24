import { useState, useEffect } from "react"
import { generateData } from "./generateData";

export const useRandData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const randData = generateData()
        setData([...randData])
  }, [])

  return [data, setData]
}