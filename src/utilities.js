import { generateData } from "./generateData"
import { bubbleSort, selectionSort, insertionSort } from "./sorting-algorithms/sortingAlgorithms"

export const wait = (timeout) => {

  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const toggleBtns = (buttons) => {

    buttons.forEach(button => {
      button.current.disabled = button.current.disabled ? false : true
  });
}

export const calculateAnimationSpeed = (dimensions, algorithm) => {

  const slowSpeed = algorithm === "bubble" ? 25 : algorithm === "selection" ? 75 : 400
  const midSpeed = algorithm === "bubble" ? 5 : algorithm === "selection" ? 30 : 250
  const maxSpeed = algorithm === "bubble" ? 0.5 : algorithm === "selection" ? 10 : 150

  return dimensions.width < 400 ? slowSpeed : dimensions.width > 1000 ? maxSpeed : midSpeed
}

export const generateBtnClick = (setData, dimensions) => {

  const data = generateData(dimensions)
  setData([...data])
}

export const bubbleSortBtnClick = async (buttons, sorting, dimensions) => {

  toggleBtns(buttons) // disable buttons

  sorting.current = true
  await bubbleSort(dimensions, sorting)

  toggleBtns(buttons) // enable buttons
}

export const selectionSortBtnClcik = async (buttons, sorting, dimensions) => {

  toggleBtns(buttons) // disable buttons

  sorting.current = true
  await selectionSort(dimensions, sorting)

  toggleBtns(buttons) // enable buttons
}

export const insertionSortBtnClick = async (buttons, sorting, dimensions) => {

  toggleBtns(buttons) // disable buttons

  sorting.current = true
  await insertionSort(dimensions, sorting)

  toggleBtns(buttons) // enable buttons
}