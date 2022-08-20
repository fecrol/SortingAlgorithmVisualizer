import React, {useState, useEffect} from "react";
import Content from "./Content"
import "./App.css"

function App() {
  
  const [data, setData] = useState([])
  const [sorted, setSorted] = useState(false)

  const defaultColour = "#03a9f4"
  const currentItemColour = "red"
  const itemToBeSwappedColour = "green"

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

    setSorted(false)
    
    const randData = []

    for(let i = 0; i < 50; i++) {

      const randInt = Math.floor((Math.random() * 50) + 1)
      const dataPiece = {value: randInt, colour: defaultColour}

      randData.push(dataPiece)
    }

    setData(randData)
  }

  const bubbleSort = async (data) => {

    disableButtons()
    
    let arrayLength = data.length - 1
    let sorted = false
    
    while(!sorted) {
        
      sorted = true

      for(let i = 0; i < arrayLength; i++) {

        data[i].colour = currentItemColour
        setData([...data])

        if(data[i].value > data[i + 1].value) {
          
          const temp = data[i]
          data[i] = data[i + 1]
          data[i + 1] = temp
            
          sorted = false

          setData([...data])
          await wait(50)
        }

        data[i].colour = defaultColour
        data[i + 1].colour = defaultColour

        setData([...data])
      }

      arrayLength--
    }

    setSorted(true)
    enableButtons()
  }

  const selectionSort = async (data) => {

    if(!sorted) {

      disableButtons()

      for(let i = 0; i < data.length; i++) {

        let lowestValueIndex = i
        data[lowestValueIndex].colour = currentItemColour
  
        for(let j = i + 1; j < data.length; j++) {
  
          if(data[j].value < data[lowestValueIndex].value) {
            lowestValueIndex = j
          }
        }

        data[lowestValueIndex].colour = itemToBeSwappedColour

        setData([...data])
        await wait(300)
  
        const temp = data[lowestValueIndex]
        data[lowestValueIndex] = data[i]
        data[i] = temp
  
        setData([...data])
        await wait(300)

        data[i].colour = defaultColour
        data[lowestValueIndex].colour = defaultColour
      }
    }

    setSorted(true)
    enableButtons()
  }
  
  return (
    <>
      <Content data={data} generateData={generateRandData} bubbleSort={bubbleSort} selectionSort={selectionSort} />
    </>
  )
}

export default App;
