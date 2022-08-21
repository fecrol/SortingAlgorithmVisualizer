import React, {useState, useEffect} from "react";
import Content from "./Content"
import "./App.css"

function App() {
  
  const [data, setData] = useState([])
  const [isSorted, setIsSorted] = useState(false)

  const defaultColour = "#89cff0"
  const currentItemColour = "#b1546b"
  const itemToBeSwappedColour = "#35b5ac"

  const generateBtn = document.getElementById("generate-btn")
  const bubbleSortBtn = document.getElementById("bubble-sort-btn")
  const selectionSortBtn = document.getElementById("selection-sort-btn")
  const insertionSortBtn = document.getElementById("insertion-sort-btn")
  const buttons = [generateBtn, bubbleSortBtn, selectionSortBtn, insertionSortBtn]

  useEffect(() => {
    generateRandData()
  }, [])
  
  const disableButtons = () => {
    buttons.forEach(button => {
      button.disabled = true
    })
  }

  const enableButtons = () => {
    buttons.forEach(button => {
      button.disabled = false
    })
  }
  
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout)
    })
  }
  
  const generateRandData = () => {

    setIsSorted(false)
    
    const randData = []

    for(let i = 0; i < 30; i++) {

      const randInt = Math.floor((Math.random() * 30) + 1)
      const dataPiece = {value: randInt, colour: defaultColour}

      randData.push(dataPiece)
    }

    setData(randData)
  }

  const bubbleSort = async (data) => {

    if(!isSorted) {
      disableButtons()
    
      let arrayLength = data.length - 1
      let sorted = false
      
      while(!sorted) {
          
        sorted = true

        for(let i = 0; i < arrayLength; i++) {

          data[i].colour = itemToBeSwappedColour
          
          setData([...data])
          await wait(60)

          if(data[i].value > data[i + 1].value) {
            
            const temp = data[i]
            data[i] = data[i + 1]
            data[i + 1] = temp
              
            sorted = false

            setData([...data])
            await wait(60)
          }

          data[i].colour = defaultColour
          data[i + 1].colour = defaultColour

          setData([...data])
        }

        arrayLength--
      }
    }

    setIsSorted(true)
    enableButtons()
  }

  const selectionSort = async (data) => {

    if(!isSorted) {
      const waitTime = 200
      disableButtons()

      for(let i = 0; i < data.length; i++) {
        let lowestValueIndex = i
        data[lowestValueIndex].colour = currentItemColour
  
        for(let j = i + 1; j < data.length; j++) {
  
          if(data[j].value < data[lowestValueIndex].value) {
            lowestValueIndex = j
            data[j].colour = itemToBeSwappedColour

            setData([...data])
            await wait(waitTime)

            data[j].colour = defaultColour
            setData([...data])
          }
        }

        data[lowestValueIndex].colour = itemToBeSwappedColour

        setData([...data])
        await wait(waitTime)
  
        const temp = data[lowestValueIndex]
        data[lowestValueIndex] = data[i]
        data[i] = temp
  
        setData([...data])
        await wait(waitTime)

        data[i].colour = defaultColour
        data[lowestValueIndex].colour = defaultColour
      }
    }

    setIsSorted(true)
    enableButtons()
  }

  const insertionSort = async (data) => {

    if(!isSorted) {
      disableButtons()

      for(let i = 1; i < data.length; i++) {
        const itemToInsert = data[i]
        let j = i - 1

        itemToInsert.colour = itemToBeSwappedColour

        setData([...data])
        await wait(300)

        while(j >= 0 && data[j].value > itemToInsert.value) {
          data[j + 1] = data[j]
          j -= 1
        }

        data[j + 1] = itemToInsert
        
        setData([...data])
        await wait(300)

        data[j + 1].colour = defaultColour
        setData([...data])
      }
    }

    setIsSorted(true)
    enableButtons()
  }
  
  return (
    <>
      <Content data={data} generateData={generateRandData} bubbleSort={bubbleSort} selectionSort={selectionSort} insertionSort={insertionSort} />
    </>
  )
}

export default App;
