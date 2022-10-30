export const generateData = (dataPieceWidth, marginRight, containerDimensions, maxVal) => {

    const numOfPieces = Math.floor(containerDimensions.width / (dataPieceWidth + marginRight))
    const data = []

    for(let i = 0; i < numOfPieces; i++) {

        const randInt = Math.floor((Math.random() * maxVal) + 1)
        const dataPieceHeight = Math.floor((containerDimensions.height - 16) / maxVal * randInt) // - 16 to compensate for padding (0.5rem top and bottom = 16px total) 
        const dataPiece = {value: randInt, width: dataPieceWidth, height: dataPieceHeight, margin: marginRight}
        
        data.push(dataPiece)
    }

    return data
}