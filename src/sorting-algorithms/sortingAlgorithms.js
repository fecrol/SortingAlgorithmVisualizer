import { calculateAnimationSpeed, wait } from "../utilities"

export const bubbleSort = async (dimensions, sorting) => {

    let sorted = false
    let dataPieces = document.getElementsByClassName("data-piece")
    let arrayLength = dataPieces.length - 1
    let animationSpeed = calculateAnimationSpeed(dimensions)
    
    try {

        while(!sorted) {

            sorted = true
    
            for(let i = 0; i < arrayLength; i++) {
    
                if(!sorting.current) {
                    return
                }
    
                dataPieces[i].style.border = "2px solid white"
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