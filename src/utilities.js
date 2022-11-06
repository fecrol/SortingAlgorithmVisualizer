import { generateData } from "./generateData"
import { bubbleSort } from "./sorting-algorithms/sortingAlgorithms"

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

export const calculateAnimationSpeed = (dimensions) => {

  return dimensions.width < 400 ? 25 : dimensions.width > 1000 ? 0.5 : 5
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