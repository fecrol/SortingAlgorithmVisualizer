import { calculateAnimationSpeed, wait } from "../utilities"

const SELECTED_DATA_PIECE_BORDER = "2px solid white"
const SMALLEST_DATA_PIECE_CLASS = "smallest-data-piece"

export const bubbleSort = async (dimensions, sorting) => {

    let sorted = false
    const dataPieces = document.getElementsByClassName("data-piece")
    let arrayLength = dataPieces.length - 1
    const animationSpeed = calculateAnimationSpeed(dimensions, "bubble")
    
    try {
        while(!sorted) {

            sorted = true
    
            for(let i = 0; i < arrayLength; i++) {
    
                if(!sorting.current) return
    
                dataPieces[i].style.border = SELECTED_DATA_PIECE_BORDER
                await wait(animationSpeed)

                const dataPieceOneHeight = parseInt(dataPieces[i].style.height)
                const dataPieceTwoHeight = parseInt(dataPieces[i + 1].style.height)
    
                if(dataPieceOneHeight > dataPieceTwoHeight) {
    
                    let tempHeight = dataPieces[i].style.height
                    let tempBorder = dataPieces[i].style.border
                    dataPieces[i].style.height = dataPieces[i + 1].style.height
                    dataPieces[i].style.border = dataPieces[i + 1].style.border
                    dataPieces[i + 1].style.height = tempHeight
                    dataPieces[i + 1].style.border = tempBorder
                    
                    sorted = false
                }
    
                await wait(animationSpeed)
    
                dataPieces[i].style.border = "none"
                dataPieces[i + 1].style.border = "none"
            }
    
            arrayLength--
        }
    }
    catch (err) {
        // DO NOTHING
    }
}

export const selectionSort = async (dimensions, sorting) => {

    const dataPieces = document.getElementsByClassName("data-piece")
    let arrayLength = dataPieces.length
    const animationSpeed = calculateAnimationSpeed(dimensions,"selection")

    try {
        for(let i = 0; i < arrayLength; i++) {

            let lowestValueIndex = i
            dataPieces[i].style.border = SELECTED_DATA_PIECE_BORDER

            for(let j = i + 1; j < arrayLength; j++) {

                if(!sorting.current) {
                    dataPieces[i].style.border = "none"
                    dataPieces[lowestValueIndex].style.border = "none"
                    dataPieces[lowestValueIndex].classList.remove(SMALLEST_DATA_PIECE_CLASS)
                    return
                }

                dataPieces[j].style.border = SELECTED_DATA_PIECE_BORDER

                const lowestValueHeight = parseInt(dataPieces[lowestValueIndex].style.height)
                const currentValueHeight = parseInt(dataPieces[j].style.height)

                if(currentValueHeight < lowestValueHeight) {
                    if(lowestValueIndex != i) {
                        dataPieces[lowestValueIndex].style.border = "none"
                        dataPieces[lowestValueIndex].classList.remove(SMALLEST_DATA_PIECE_CLASS)
                    }
                    
                    lowestValueIndex = j
                    dataPieces[lowestValueIndex].classList.add(SMALLEST_DATA_PIECE_CLASS)
                }

                await wait(animationSpeed)
                dataPieces[j].style.border = "none"
                dataPieces[lowestValueIndex].style.border = SELECTED_DATA_PIECE_BORDER
            }

            const tempHeight = dataPieces[lowestValueIndex].style.height
            dataPieces[lowestValueIndex].style.height = dataPieces[i].style.height
            dataPieces[i].style.height = tempHeight
            dataPieces[lowestValueIndex].classList.remove(SMALLEST_DATA_PIECE_CLASS)

            await wait(animationSpeed)
            dataPieces[i].style.border = "none"
            dataPieces[lowestValueIndex].style.border = "none"
        }
    }
    catch(err) {
        // Clean up data pieces
        const dataPieces = document.getElementsByClassName("data-piece")
        for(let i = 0; i < dataPieces.length; i++) {
            dataPieces[i].style.border = "none"
            if(dataPieces[i].classList.contains(SMALLEST_DATA_PIECE_CLASS)) dataPieces[i].classList.remove(SMALLEST_DATA_PIECE_CLASS)
        }
    }
}