import React, { useRef } from 'react'
import DataPieces from './DataPieces'
import { useContainerResize } from './useContainerResize'
import { useRandData } from './useRandData'

export default function Content() {

  const dataPieceWidth = 10
  const dataPieceMarginRight = 2
  const maxVal = 100
  const contentBodyRef = useRef()
  const dimensions = useContainerResize(contentBodyRef)
  const [data, setData] = useRandData(dataPieceWidth, dataPieceMarginRight, dimensions, maxVal)
  
  return (
    <div className="flex-container centre">
        <div className="content-container centre">
          <div className="content-header">
            <h1 className="content-title">
                Sorting Algorithm Visualizer
            </h1>
          </div>
          <div className="content-body" ref={contentBodyRef}>
            <DataPieces data={data} />
          </div>
          <div className="content-footer">
            <div className="buttons">
              <button id="generate-btn" className="button">Generate</button>
              <button id="bubble-sort-btn" className="button">Bubble Sort</button>
              <button id="selection-sort-btn" className="button">Selection Sort</button>
              <button id="insertion-sort-btn" className="button">Insertion Sort</button>
            </div>
          </div>
        </div>
    </div>
  )
}
