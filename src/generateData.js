export const generateData = (containerDimensions) => {

    const dataPieceWidth = 10
    const dataPieceMarginRight = 2
    const maxVal = 100

    const numOfPieces = Math.floor(containerDimensions.width / (dataPieceWidth + dataPieceMarginRight))
    const data = []

    for(let i = 0; i < numOfPieces; i++) {

        const randInt = Math.floor((Math.random() * maxVal) + 1)
        const dataPieceHeight = Math.floor((containerDimensions.height - 16) / maxVal * randInt) // - 16 to compensate for padding (0.5rem top and bottom = 16px total) 
        const dataPiece = {value: randInt, width: dataPieceWidth, height: dataPieceHeight, margin: dataPieceMarginRight}
        
        data.push(dataPiece)
    }

    return data
}