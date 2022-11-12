import { generateData } from "./generateData"
import { bubbleSort, selectionSort } from "./sorting-algorithms/sortingAlgorithms"

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

  const slowSpeed = algorithm === "bubble" ? 25 : 75
  const midSpeed = algorithm === "bubble" ? 5 : 30
  const maxSpeed = algorithm === "bubble" ? 0.5 : 10

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

  toggleBtns(buttons) // enabe buttons
}