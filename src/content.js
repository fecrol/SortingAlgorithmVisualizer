import React from 'react'
import DataPieces from './DataPieces'

export default function Content({data, generateData, bubbleSort, selectionSort, insertionSort}) {
  return (
    <div className="flex-container centre">
        <div className="content-container">
          <div className="content-header">
            <h1 className="content-title">
                Sorting Algorithm Visualizer
            </h1>
          </div>
          <div className="content-body">
            <DataPieces data={data} />
          </div>
          <div className="content-footer">
            <div className="buttons">
              <button id="generate-btn" onClick={generateData}>Generate</button>
              <button id="bubble-sort-btn" onClick={() => {bubbleSort([...data])}}>Bubble Sort</button>
              <button id="selection-sort-btn" onClick={() => {selectionSort([...data])}}>Selection Sort</button>
              <button id="insertion-sort-btn" onClick={() => {insertionSort([...data])}}>Insertion Sort</button>
            </div>
          </div>
        </div>
    </div>
  )
}
